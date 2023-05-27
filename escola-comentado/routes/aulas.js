var express = require('express')
var app = express()
var models  = require('../models/index');
var utils = require('../modules/utils');
var Aula = models.Aula;
var Professor = models.Professor;

// Cria uma aula no banco de dados.
// O json a ser enviado deve possuir os parâmetros:
// *Mantenha maiúsculas e minúsculas*
// -professorId: INT (chave estrangeira para Professor)
// -turmaId: INT (chave estrangeira para Turma)
app.post('/aulas', function(req, res) {
    // Um objeto Aula não é criado diretamente. Este é criado quando é adicionado um relacionamento
    // entre Professor e Turma.

    // Primeiro, encontra-se o professor por id (findById)
    Professor
        .findById(req.body.professorId)
        .then(function(professor) {
            // Depois, define-se as turmas do professor (setTurmas), passando o id da turma
            professor
                .setTurmas([req.body.turmaId], {
                    // Os outros atributos do relacionamento que irão compor a Aula são passados no
                    // parâmetro through
                    through: { inicio: req.body.inicio, fim: req.body.fim, local: req.body.local }
                })
                .then(function(aula) {
                    // Finalmente, mostre na resposta a aula criada
                    utils.response(res, true, "A aula foi adicionada.", aula, undefined);
                });
        }, function(erro) {
            utils.response(res, false, undefined, erro, undefined);
        });
});

module.exports = app;
