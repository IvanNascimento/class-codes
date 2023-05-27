const express = require('express');
const bcrypt = require('bcryptjs');
const { Model, ModelStatic } = require('sequelize');

const { SALT } = require('../config/constants');
const { verifyToken, login } = require('../modules/login');


/**
 * @param {ModelStatic<Model>} Users the sequelize model for this routes set
*/
module.exports = (Users) => {
  let router = express.Router()

  router.get('/all', verifyToken, async (req, res, next) => {
    Users
      .findAll()
      .then(users => {
        if (users) {
          let ul = []
          for (let user of users) {
            ul.push(user.dataValues)
          }
          res
            .status(200)
            .send({
              message: "Success",
              data: ul
            })
        } else {
          res
            .status(404)
            .send({
              message: "Success",
              datail: `Users not found`
            })
        }
      }).catch(err => {
        res
          .status(400)
          .send({
            message: "Error",
            error: err.message
          })
      })
  })

  // Verify if email exists in database
  router.get('/', async (req, res, next) => {
    let email = req.body.email
    if (email) {
      Users
        .findOne({
          where: {
            email: email
          }
        })
        .then(user => {
          if (user) {
            res
              .status(200)
              .send({
                message: "Success",
                datail: `Email exists in database`
              })
          } else {
            res
              .status(404)
              .send({
                message: "Success",
                datail: `Email not registered in database`
              })
          }
        })
        .catch(err => {
          res
            .status(400)
            .send({
              message: "Error",
              error: err.message
            })
        })
    } else {
      res
        .status(400)
        .send({
          message: "Error",
          details: 'Email is required'
        })
    }
  })

  // Verify token
  router.get('/me', verifyToken, async (req, res, next) => {
    res
      .status(200)
      .send(req.user)
  })

  router.post('/login', (req, res, next) => {
    let { email, password } = req.body
    Users
      .scope('auth')
      .findOne({
        where: {
          email: email.toLowerCase()
        },
        attributes: ["email", "password", "accessLevel", "name", "id", "allowed"]
      })
      .then(async user => {
        if (user) {
          let exists = false
          let dbpassword = user.dataValues['password']
          if (bcrypt.compareSync(password, dbpassword)) {
            exists = user.dataValues
          }
          if (exists) {
            if (exists.allowed) {
              // add access token here
              let token = login({
                userId: exists.id,
                email: exists.email,
                name: exists.name,
                accessLevel: exists.accessLevel,
                allowed: exists.allowed
              })

              res
                .status(200)
                .send({
                  message: "Success",
                  token: token,
                  user: {
                    id: exists.id,
                    name: exists.name,
                    email: exists.email,
                    accessLevel: exists.accessLevel,
                    allowed: exists.allowed
                  }
                })
            } else {
              res
                .status(403)
                .send({
                  message: "Error",
                  details: "User yet to be allowed"
                })
            }
          } else {
            res
              .status(403)
              .send({
                message: "Error",
                detaisl: "Credentials not match"
              })
          }
        } else {
          res
            .status(404)
            .send({
              message: "Error",
              details: "User not found"
            })
        }
      })
      .catch(err => {
        // console.log(err)
        res
          .status(400)
          .send({
            message: "Error",
            error: err.message
          })
      })
  })

  router.post('/register', async (req, res, next) => {
    let obj = req.body
    obj["password"] = await bcrypt.hash(obj["password"], SALT)
    obj["email"] = req.body.email.toLowerCase()
    Users
      .create(obj)
      .then(result => {
        res
          .status(200)
          .send({
            message: "Success",
            data: {
              email: result.dataValues.email,
              name: result.dataValues.name,
              access_level: result.dataValues.access_level
            }
          })
      })
      .catch(err => {
        console.error(err)
        res
          .status(403)
          .send({
            message: "Error",
            error: err.message
          })
      })
  })

  router.post('/logout', verifyToken, async (req, res, next) => {
    res
      .status(200)
      .send({
        "token": "JWT_TOKEN"
      })
  })

  router.put('/edit', verifyToken, async (req, res, next) => {
    let newPassword = undefined
    if (req.body.password) {
      newPassword = await bcrypt.hash(req.body['password'], SALT)
    }
    let update = {
      "name": req.body.name,
      "password": newPassword
    }
    Users
      .update(update, {
        where: {
          id: req.user.userId
        }
      })
      .then(result => {
        res
          .status(200)
          .send({
            message: "Success",
            data: result
          })
      })
      .catch(err => {
        console.error(err)
        res
          .status(400)
          .send({
            message: "Error",
            error: err.message
          })
      })
  })

  router.put('/edit/:id', verifyToken, async (req, res, next) => {
    let newPassword = undefined
    if (req.body.password) {
      newPassword = await bcrypt.hash(req.body['password'], SALT)
    }
    let update = {
      "name": req.body.name,
      "password": newPassword
    }
    Users
      .update(update, {
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        res
          .status(200)
          .send({
            message: "Success",
            data: result
          })
      })
      .catch(err => {
        console.error(err)
        res
          .status(400)
          .send({
            message: "Error",
            error: err.message
          })
      })
  })

  router.put('/access', verifyToken, (req, res, next) => {
    if (req.user.allowed) {
      let level = req.body.level
      // console.log(req.user);
      if ((parseInt(level) > parseInt(req.user.accessLevel))) {
        level = parseInt(req.user.accessLevel)
      }
      Users
        .update({
          accessLevel: String(level)
        }, {
          where: {
            id: req.body.userId
          }
        })
        .then(result => {
          res
            .status(200)
            .send({
              message: "Success",
              details: 'Access level updated'
            })
        })
        .catch(err => {
          console.error(err)
          res
            .status(400)
            .send({
              message: "Error",
              error: err.message
            })
        })
    } else {
      res
        .status(403)
        .send({
          message: "Error",
          details: "Not Enough credentials"
        })
    }
  })

  router.put('/allow', verifyToken, async (req, res, next) => {
    if (req.user.allowed) {
      let u = await Users.findOne({
        where: {
          id: req.body.userId
        }
      })
      if (u) {
        Users
          .update({
            allowed: !u.dataValues.allowed
          }, {
            where: {
              id: req.body.userId
            }
          })
          .then(result => {
            res
              .status(200)
              .send({
                message: "Success",
                details: "User allowed"
              })
          })
          .catch(err => {
            console.error(err)
            res
              .status(400)
              .send({
                message: "Error",
                error: err.message
              })
          })
      } else {
        res
          .status(404)
          .send({
            message: "Error",
            details: "User not found"
          })
      }
    } else {
      res
        .status(403)
        .send({
          message: "Error",
          details: "Not Enough credentials"
        })
    }
  })

  router.delete('/delete', verifyToken, (req, res, next) => {
    Users
      .destroy({
        where: {
          id: req.user.id
        }
      })
      .then(result => {
        res
          .status(200)
          .send({
            message: "Success",
            datails: "Account deleted successfully"
          })
      })
      .catch(err => {
        next(err)
      })
  })

  router.delete('/delete/:id', verifyToken, (req, res, next) => {
    if (req.user.accessLevel === '3') {
      Users
        .destroy({
          where: {
            id: req.params.id
          }
        })
        .then(result => {
          res
            .status(200)
            .send({
              message: "Success",
              datails: "Account deleted successfully"
            })
        })
        .catch(err => {
          next(err)
        })
    } else {
      res
        .status(403)
        .send({
          message: "Error",
          datails: "Not enough credentials"
        })
    }
  })

  return router
}