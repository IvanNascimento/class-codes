var express = require('express');
var app = express();
var models = require('../models/index');
var utils = require('../modules/utils');

var Turma = models.Turma;

// Obter todos as turmas
app.get('/turmas', function(req, res) {
    Turma
        .findAll({
            // use include para incluir os modelos relacionados a este.
            include: [ models.Aluno ]
        })
        .then(function(objs) {
            utils.response(res, true, undefined, objs, undefined);
        });
});

// Obter uma turma
// O identificador da turma a ser retornado deve ser passado pela URL.
app.get('/turmas/:id', function(req, res) {
    Turma
        .findOne({
            // você pode especificar várias opções.
            where: {
                id: req.params.id
            },
            // use include para incluir os modelos relacionados a este.
            include: [ models.Aluno ]
        })
        .then(function(turma) {
            if (turma) {
                utils.response(res, true, undefined, turma, undefined);
            } else {
                utils.response(res, false, "A turma com o ID especificado não existe", undefined, req.params.id);
            }
        })
})

// Remover turma
// O identificador da turma a ser removida deve ser passado pela URL.
app.delete('/turmas/:id', function(req, res) {
    // Use a operação destroy para remover entidades.
    // Através do parâmetro where, especifique a consulta para localizar as entidades que serão removidas.
    Turma
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            utils.response(res, true, "A turma foi removida.", undefined, req.params.id);
        });
});


// Criar turma
app.post('/turmas', function(req, res) {
    Turma
        .create(req.body)
        .then(function(obj) {
            utils.response(res, true, "A turma foi adicionada", obj, undefined);
        }, function(erro) {
            utils.response(res, false, "Ocorreu um erro ao criar turma.", erro, undefined);
        });
});

//TODO: atualizar turma

module.exports = app;
