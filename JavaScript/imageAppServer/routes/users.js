var express = require("express");
var models = require("../models");
var bp = require("body-parser");
var axios = require("axios");

var User = models.User;
var Image = models.Image;
var Like = models.Like;
var Tag = models.Tag;
var Comentario = models.Comentario;

var router = express.Router();
var request = axios.create({
  baseURL: "https://backendserver",
});

router.use(bp.json());

router.post("/login", function (req, res) {
  request
    .get("/users/me", {
      headers: {
        authorization:
          "Beaders" + (req.headers.authorization || req.body.token),
      },
    })
    .then(function (resultado) {
      User.create({
        firstName: "",
        lastName: "",
        email: resultado.data.username,
      })
        .then(function (user) {
          res.json(user);
        })
        .catch(function (error) {
          if (error.name === "SequelizeUniqueConstraintError") {
            User.find({
              where: {
                email: resultado.data.username,
              },
              include: [
                {
                  model: Image,
                  include: [Like, Tag],
                },
              ],
            })
              .then(function (user) {
                res.json(user);
              })
              .catch(function (error) {
                res.json({
                  success: false,
                  result: error,
                });
              });
          }
        });
    })
    .catch(function (error) {
      console.log("Error 3:", error);
    });
});

router.post("", function (req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
    .then(function (user) {
      res.json({
        success: true,
        result: user,
      });
    })
    .catch(function (error) {
      res.json({
        success: false,
        result: error,
      });
    });
});

router.get("/:id", function (req, res) {
  User.findById(req.params.id, { include: [models.Image] })
    .then(function (user) {
      res.json(user);
    })
    .catch(function (error) {
      res.json({
        success: false,
        result: error,
      });
    });
});

router.get("", function (req, res) {
  User.all()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (error) {
      res.json({
        success: false,
        result: error,
      });
    });
});

router.delete("/:id", function (req, res) {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function (user) {
      res.json(user);
    })
    .catch(function (error) {
      res.json({
        success: false,
        result: error,
      });
    });
});

router.put("", function (req, res) {
  User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then(function (user) {
      res.json(user);
    })
    .catch(function (error) {
      res.json({
        success: false,
        result: error,
      });
    });
});

module.exports = router;
