var express = require('express');
var app = require('express')();
// or var app = express();

var models = require('../models');
var Objetos = models.Conteudo;

//get all objects
app.get('/object/all', function (req, res){
  Objetos
    .findAll({
      include: [models.Tipo, models.Serie, models.Produtor, models.Genero]
    })
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

// get object by Name
app.get('/object/:Nome', function (req, res){
  Objetos
    .findOne({
      include: [models.Tipo, models.Serie, models.Produtor, models.Genero],
      where: {
        Nome: req.params.Nome
      }
    })
    .then(function (obj){
      res.json({
        success: true,
        message: 'Ok',
        result: obj
      });
    });
});

//get object by type
app.get('/object/:type', function (req, res){
  Objetos
    .findAll({
      where: {
        TipoId: req.params.type
      },
      include: [models.Tipo, models.Serie, models.Produtor, models.Genero]
    })
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

//add object
app.post('/object/add', function (req, res){
  var object = req.body;
  console.log(object);
  Objetos
    .create(object)
    .then(function (obj){
      res.json({
        success: true,
        message: 'Added successfully',
        result: obj
      });
    }, function (erro){
      res.json({
        success: false,
        message: 'failed to add',
        result: erro
      });
    });
});

//delete object
app.delete('/object/delete', function (req, res){
  Objetos
    .destroy({
      where: {
        id: req.body.Id
      }
    })
    .then(function (){
      res.json({
        success: true,
        message: 'deleted object',
        result: undefined
      });
    });
});

//update object
app.put('/object/update', function (req, res){
  Objetos
    .findById(parseInt(req.body.Id))
    .then(function (object){
      object.Nome = req.body.Nome || object.Nome;
      object.Avaliacao = req.body.Avaliacao || object.Avaliacao;
      object.Descricao = req.body.Descricao || object.Descricao;
      object.TipoId = req.body.TipoId || object.TipoId;
      object.SerieId = req.body.SerieId || object.SerieId;
      object.ProdutorId = req.body.ProdutorId || object.ProdutorId;

      object
        .save()
        .then(function (newObject){
          res.json({
            success: true,
            message: 'updated successfully',
            result: newObject
          });
        });
    }, function (erro){
      res.json({
        success: false,
        message: 'failed to update',
        result: erro
      });
    });
});

//edit genres
app.put('/object/:type/:objectId/genre/:genreId', function (req, res){
  var objectId = req.params.objectId;
  var genreId = req.params.genreId;
  var type = req.params.type;
  if(type === 'add'){
    Objetos
      .findOne({
        where: {
          id: objectId
        }
      })
      .then(function (object){
        object
          .addGenero([genreId])
          .then(function (obj){
            res.json({
              success: true,
              message: 'add successfully',
              result: obj
            });
          });
      }, function (erro){
        res.json({
          success: false,
          message: 'object not found',
          result: erro
        });
      });
  }
  else if(type === 'remove'){
    Objetos
      .findOne({
        where: {
          id: objectId
        }
      })
      .then(function (object){
        object
          .removeGenero([genreId])
          .then(function (){
            res.json({
              success: true,
              message: 'remove successfully'
            });
          });
      }, function (erro){
        res.json({
          success: false,
          message: 'object not found',
          result: erro
        });
      });
  }
});

module.exports = app;