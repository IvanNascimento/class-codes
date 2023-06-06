var express = require('express')
var app = express()
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.sql')

// Obter disciplina

// Remover disciplina

// Editar disciplina

// Criar disciplina
app.post('/disciplinas', function(req, res) {
  var disciplina = req.body;
  console.log(disciplina);
  db.run("INSERT INTO disciplinas VALUES (?, ?);", [undefined,
    disciplina.nome], function(err) {
      if (err) {
        res.json({
          success: false,
          error: err
        })
      } else {
        disciplina.id = this.lastID;
        res.json({
          success: true,
          message: "A disciplina foi adicionada.",
          result: disciplina
        })
      }
    })
})

// Obter todas as disciplinas
app.get('/disciplinas', function(req, res) {
  db.all("SELECT * FROM disciplinas;", function(erro, linhas) {
    if (erro) {
      res.json({
        success: false,
        error: erro
      });
    } else {
      res.json({
        success: true,
        result: linhas
      });
    }
  })
})

module.exports = app;
