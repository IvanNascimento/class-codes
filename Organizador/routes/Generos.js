var express = require('express');
var app = require('express')();
// or var app = express();

var models = require('../models');
var Generos = models.Genero;

//get all genres
app.get('/genre/all', function (req, res){
  Generos
    .findAll()
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

//get genre by id
app.get('/genre/:Nome', function (req, res){
  Generos
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
          result: 'id(' + req.params.Id + ') gender does not exist'
        });
      }
    });
});

//add genre
app.post('/genre/add', function (req, res){
  console.log(req.body);
  Generos
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

//update genre
app.put('/genre/update', function (req, res){
  Generos
    .findById(parseInt(req.body.Id))
    .then(function (obj){
      if(obj){
        obj.Nome = req.body.Nome || obj.Nome;

        obj
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
          result: 'id(' + req.body.Id + ') gender does not exist'
        });
      }
    });
});

//delete genre
app.delete('/genre/delete', function (req, res){
  Generos
    .destroy({
      where: {
        id: req.body.Id
      }
    })
    .then(function (){
      res.json({
        success: true,
        message: 'deleted gender',
        result: undefined
      });
    });
});

module.exports = app;