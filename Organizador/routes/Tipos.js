var express = require('express');
var app = require('express')();
// or var app = express();

var models = require('../models');
var Tipos = models.Tipo;

//get all types
app.get('/type/all', function (req, res){
  Tipos
    .findAll()
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

//get type by id
app.get('/type/:Nome', function (req, res){
  Tipos
    .findOne({
      where: {
        Nome: req.params.Nome
      }
    })
    .then(function (obj){
      if(obj){
        res.json({
          success: true,
          message: 'Ok',
          result: obj
        });
      }
      else{
        res.json({
          success: false,
          message: 'error',
          result: 'id(' + req.params.Id + ') type does not exist'
        });
      }
    });
});

//add type
app.post('/type/add', function (req, res){
  console.log(req.body);
  Tipos
    .create(req.body)
    .then(function (obj){
      res.json({
        success: true,
        message: 'added successfully',
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

//update type
app.put('/type/update', function (req, res){
  Tipos
    .findById(parseInt(req.body.Id))
    .then(function (object){
      if(object){
        object.Nome = req.body.Nome || object.Nome;

        object
          .save()
          .then(function (obj){
            res.json({
              success: true,
              message: 'update successfully',
              result: obj
            });
          });
      }
      else{
        res.json({
          success: false,
          message: 'error',
          result: 'Id(' + req.body.Id + ') type does not exist'
        });
      }
    });
});

//delete type
app.delete('/type/delete', function (req, res){
  Tipos
    .destroy({
      where: {
        id: req.body.Id
      }
    })
    .then(function (){
      res.json({
        success: true,
        message: 'deleted type',
        result: undefined
      });
    });
});

module.exports = app;