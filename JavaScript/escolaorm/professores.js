var express = require('express');
var app = express();
var models  = require('./models');

var Professor = models.Professor;

app.get('/professores', function(req, res) {
  Professor
    .findAll()
    .then(function(o) {
      res.json({
        success: true,
        result: o
      });
    })
})

app.post('/professores', function(req, res) {
  Professor
    .create(req.body)
    .then(function(o) {
      res.json({
        success: true,
        message: "O professor foi adicionado.",
        result: o
      })
    }, function(erro) {
      res.json({
        success: false,
        result: erro
      });
    });
});

module.exports = app;
