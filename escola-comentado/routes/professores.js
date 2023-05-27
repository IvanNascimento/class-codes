var express = require('express')
var app = express()
var models  = require('../models/index');
var utils = require('../modules/utils');
var Professor = models.Professor;

// Obter todos os professores
app.get('/professores', function(req, res) {
    Professor
        .findAll()
        .then(function(professores) {
            utils.response(res, true, undefined, professores, undefined);
        })
});

// Cria um professor no banco de dados.
// O json a ser enviado deve possuir os parâmetros:
// *Mantenha maiúsculas e minúsculas*
// -nome: STRING
// -matricula: STRING
app.post('/professores', function(req, res) {
    Professor
        .create(req.body)
        .then(function(professor) {
            utils.response(res, true, "O professor foi adicionado.", professor, undefined);
        }, function(erro) {
            utils.response(res, false, undefined, erro, undefined);
        });
});

module.exports = app;
