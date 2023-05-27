var express = require('express');
var app = express();
var models = require('./models/index');

var Turma = models.Turma;

// Obter todos as turmas
app.get('/turmas', function(req, res) {
    Turma
        .findAll({
            // use include para incluir os modelos relacionados a este.
            include: [ models.Aluno ]
        })
        .then(function(objs) {
            res.json({
                success: true,
                result: objs
            })
        });
});

// Criar turma
app.post('/turmas', function(req, res) {
    Turma
        .create(req.body)
        .then(function(obj) {
            res.json({
                success: true,
                message: "A turma foi criada.",
                result: obj
            })
        }, function(erro) {
            res.json({
                success: false,
                message: "Erro ao criar turma.",
                result: erro
            })
        });
});

//TODO: atualizar turma

module.exports = app;
