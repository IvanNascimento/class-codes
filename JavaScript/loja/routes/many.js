const express = require('express');
const { Model, ModelStatic, Op } = require('sequelize');

/**
 * 
 * @param {ModelStatic<Model>} model 
 * @param {ModelStatic<Model>} model2
 * @returns 
 */
module.exports = (model, model2) => {
  let router = express.Router()

  // Rotas para editar, adicionar e remover relações many-to-many

  router.put('/add', async (req, res, next) => {
    let body = req.body

    try {
      let M1 = await model.findByPk(body[`${model.name}Id`])
      let M2 = await model2.findByPk(body[`${model2.name}Id`])

      if (!M1) {
        res
          .status(404)
          .send({
            message: "Error",
            details: `${model.name} not found`
          })
      } else if (!M2) {
        res
          .status(404)
          .send({
            message: "Error",
            details: `${model2.name} not found`
          })
      } else {
        M1[`add${model2.name}`](M2)

        res
          .status(200)
          .send({
            message: "Success",
            data: {
              [model.name]: M1,
              [model2.name]: M2
            }
          })
      }
    } catch (e) {
      res
        .status(400)
        .send({
          message: "Error",
          error: e.message
        })
    }
  })

  router.put('/remove', async (req, res, next) => {
    let body = req.body

    try {
      let M1 = await model.findByPk(body[`${model.name}Id`])
      let M2 = await model2.findByPk(body[`${model2.name}Id`])

      if (!M1) {
        res
          .status(404)
          .send({
            message: "Error",
            details: `${model.name} not found`
          })
      } else if (!M2) {
        res
          .status(404)
          .send({
            message: "Error",
            details: `${model2.name} not found`
          })
      } else {
        M1[`remove${model2.name}`](M2)

        res
          .status(200)
          .send({
            message: "Success",
            data: {
              [model.name]: M1,
              [model2.name]: M2
            }
          })
      }
    } catch (e) {
      res
        .status(400)
        .send({
          message: "Error",
          error: e.message
        })
    }
  })

  return router
}