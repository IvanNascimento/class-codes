var express = require('express')
var app = express()
var models  = require('../models/index');
var utils = require('../modules/utils');
var Aluno = models.Aluno;

// Obter todos os alunos
app.get('/alunos', function(req, res) {
  Aluno
    .findAll()
    .then(function(alunos) {
        utils.response(res, true, undefined, alunos, undefined);
    })
});

// Obter um aluno
// O identificador do aluno a ser retornado deve ser passado pela URL.
app.get('/alunos/:id', function(req, res) {
  Aluno
    .findById(parseInt(req.params.id))
    .then(function(aluno) {
      if (aluno) {
          utils.response(res, true, undefined, aluno, undefined);
      } else {
          utils.response(res, false, "O aluno com o ID especificado não existe", undefined, req.params.id);
      }
    })
});

// Remover aluno
// O identificador do aluno a ser removido deve ser passado pela URL.
app.delete('/alunos/:id', function(req, res) {
    // Use a operação destroy para remover entidades.
    // Através do parâmetro where, especifique a consulta para localizar as entidades que serão removidas.
    Aluno
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "O aluno foi removido.", undefined, req.params.id);
      });
});

// Editar aluno
// O json a ser enviado deve possuir os parâmetros:
// *Mantenha maiúsculas e minúsculas*
// -id: INT
// -nome: STRING
// -matricula: STRING
// -TurmaId: INT (chave estrangeira para Turma)
app.put('/alunos', function(req, res) {
  Aluno
    .findById(parseInt(req.body.id))
    .then(function(aluno) {
      if (aluno) {
        // Cada parâmetro recebe o novo valor que vem da requisição (req.body.*), se este for definido,
        // ou permanece com o valor antigo.
        // VARIAVEL = VALOR1 || VALOR2 significa que VARIAVEL recebe VALOR1, se este não for nulo.
        // Caso contrário, recebe VALOR2.
        aluno.nome = req.body.nome || aluno.nome;
        aluno.matricula = req.body.matricula || aluno.matricula;
        aluno.TurmaId = req.body.TurmaId || aluno.TurmaId;

        aluno
            .save()
            .then(function(alunoModificado) {
                utils.response(res, true, "Os dados do aluno foram atualizados.", alunoModificado, undefined);
            })
      } else {
          utils.response(res, false, "O aluno com o ID especificado não existe.", alunoModificado, req.params.id);
      }
    })
})

// Cria um aluno no banco de dados.
// O json a ser enviado deve possuir os parâmetros:
// *Mantenha maiúsculas e minúsculas*
// -nome: STRING
// -matricula: STRING
// -TurmaId: INT (chave estrangeira para Turma)
app.post('/alunos', function(req, res) {
  Aluno
    .create(req.body)
    .then(function(aluno) {
        utils.response(res, true, "O aluno foi adicionado.", aluno, undefined);
    }, function(erro) {
        utils.response(res, false, undefined, erro, undefined);
    });
});

module.exports = app;
