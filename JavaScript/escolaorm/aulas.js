var express = require('express');
var app = express();
var models = require('./models/index');

var Professor = models.Professor;

app.post('/aulas', function(req, res) {
    Professor
        .findById(req.body.professorId)
        .then(function(professor) {
            professor
                .setTurmas([req.body.turmaId], {
                    through: {
                        inicio: req.body.inicio,
                        fim: req.body.fim,
                        local: req.body.local
                    }
                })
                .then(function(aula) {
                    res.json({
                        success: true,
                        result: aula
                    })
                });
        }, function(erro) {
            res.json({
                success: false,
                result: erro
            })
        });
});

module.exports = app;
