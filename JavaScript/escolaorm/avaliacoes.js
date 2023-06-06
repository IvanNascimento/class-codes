var express = require('express')
var app = express()
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.sql')

// Obter todas as avaliações

// Obter avaliação

// Remover avaliação

// Editar avaliação

// Criar avaliação
app.post('/avaliacoes', function(req, res) {
  var avaliacao = req.body;

  db.run("INSERT INTO avaliacoes VALUES (?, ?, ?, ?);", [undefined,
    avaliacao.aluno, avaliacao.disciplina, avaliacao.nota], function(err) {
      if (err) {
        res.json({
          success: false,
          error: err
        })
      } else {
        avaliacao.id = this.lastID;
        res.json({
          success: true,
          message: "A avaliação foi adicionada.",
          result: avaliacao
        })
      }
    })
})

module.exports = app
