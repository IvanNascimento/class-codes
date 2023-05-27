var express = require('express');
var app = require('express')();
// or var app = express();

var models = require('../models');
var Produtores = models.Produtor;

//get all producers
app.get('/producer/all', function (req, res){
  Produtores
    .findAll()
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

//get producer by id
app.get('/producer/:Nome', function (req, res){
  Produtores
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
          result: 'Id(' + req.params.Id + ') producer does not exists'
        });
      }
    });
});

//add producer
app.post('/producer/add', function (req, res){
  console.log(req.body);
  Produtores
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
        message: 'error',
        result: erro
      });
    });
});

//update producer
app.put('/producer/update', function (req, res){
  Produtores
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
          result: 'Id(' + req.body.Id + ') producer does not exists'
        });
      }
    });
});

//delete producer
app.delete('/producer/delete', function (req, res){
  Produtores
    .destroy({
      where: {
        id: req.body.Id
      }
    })
    .then(function (){
      res.json({
        success: true,
        message: 'deleted successfully',
        result: undefined
      });
    });
});

module.exports = app;