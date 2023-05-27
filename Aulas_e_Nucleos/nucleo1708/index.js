var express = require('express')
var app = express()
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.sql')
var bp = require('body-parser')

app.use(bp.json())

app.post('/clientes', function(req, res) {
  console.log(req.body);

  db.run("INSERT INTO clientes VALUES (?, ?, ?, ?, ?, ?);", [undefined, req.body.nome, req.body.sobrenome,
    req.body.genero, req.body.data_nascimento, req.body.email], function(err) {
      if (err) {
        if (err.errno == 19) {
          res.json({
            success: false,
            error: "Aconteceu um erro. Tente novamente..."
          })
        }
      } else {
        res.json({
          success: true,
          message: "O cliente foi adicionado.",
          cliente: req.body
        })
      }
    })
});



app.listen(3001, function() {
  console.log("Rodando...")
  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, sobrenome TEXT NOT NULL, genero INTEGER NOT NULL, data_nascimento DATE NOT NULL, email TEXT UNIQUE NOT NULL);");
  })
})
