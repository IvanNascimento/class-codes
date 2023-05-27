var express = require('express');
var app = require('express')();
// or var app = express();

var models = require('../models');
var Series = models.Serie;

//get all series
app.get('/series/all', function (req, res){
  Series
    .findAll()
    .then(function (objs){
      res.json({
        success: true,
        message: 'Ok',
        result: objs
      });
    });
});

//get series by id
app.get('/series/:Nome', function (req, res){
  Series
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
          result: 'id(' + req.params.id + ') series does not exist'
        });
      }
    });
});

//add series
app.post('/series/add', function (req, res){
  console.log(req.body);
  Series
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

//update series
app.put('/series/update', function (req, res){
  Series
    .findBuId(parseInt(req.body.Id))
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
          result: 'id(' + req.body.Id + ') series does not exist'
        });
      }
    });
});

//delete series
app.delete('/series/delete', function (req, res){
  Series
    .destroy({
      where: {
        id: req.body.Id
      }
    })
    .then(function (){
      res.json({
        success: true,
        message: 'deleted series',
        result: undefined
      });
    });
});

module.exports = app;