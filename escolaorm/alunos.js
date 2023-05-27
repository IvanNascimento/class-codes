var express = require('express')
var app = express()
var models  = require('./models');

var Aluno = models.Aluno;

// Obter todos os alunos
app.get('/alunos', function(req, res) {
  Aluno
    .findAll()
    .then(function(alunos) {
      res.json({
        success: true,
        result: alunos
      });
    })
})

// Obter um aluno
app.get('/alunos/:id', function(req, res) {
  Aluno
    .findById(parseInt(req.params.id))
    .then(function(aluno) {
      if (aluno) {
        res.json({
          success: true,
          result: aluno
        });
      } else {
        res.json({
          success: true,
          message: "O aluno com o ID especificado não existe.",
          details: req.params.id
        });
      }
    })
})

// Remover aluno
app.delete('/alunos/:id', function(req, res) {
  Aluno
    .findById(parseInt(req.params.id))
    .then(function(aluno) {
      aluno.destroy();
      res.json({
        success: true,
        message: "Trabalho executado."
      })
    })
})

// Editar aluno
app.put('/alunos', function(req, res) {
  Aluno
    .findById(parseInt(req.body.id))
    .then(function(aluno) {
      if (aluno) {
        aluno.nome = req.body.nome || aluno.nome;
        aluno.matricula = req.body.matricula || aluno.matricula;
        aluno.turma = req.body.turma || aluno.turma;

        aluno
          .save()
          .then(function(alunoModificado) {
            res.json({
              success: true,
              result: alunoModificado
            });
          })
      } else {
        res.json({
          success: true,
          message: "O aluno com o ID especificado não existe.",
          details: req.params.id
        });
      }
    })
})

// Criar aluno
app.post('/alunos', function(req, res) {
  Aluno
    .create(req.body)
    .then(function(aluno) {
      res.json({
        success: true,
        message: "O aluno foi adicionado.",
        result: aluno
      })
    }, function(erro) {
      res.json({
        success: false,
        result: erro
      });
    });
});

module.exports = app;
