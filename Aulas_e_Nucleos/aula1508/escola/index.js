var express = require('express')
var app = express()
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.sql')
var bp = require('body-parser')

app.use(bp.json())

app.post('/alunos', function(req,res){
  db.run("INSERT INTO alunos VALUES (?,?,?,?);",[undefined,req.body.matricula,req.body.nome,req.body.turma], function(err){
    if(err){
      res.json({
        success: false,
        error: err
      })
    }else{
      res.json({
        success: true,
        message: "O aluno foi adicionado.",
        result: req.body
      })
    }
  })
});

app.post('/diciplinas', function(req,res){
  db.run("INSERT INTO diciplinas VALUES (?,?);",[undefined,req.body.nome], function(err){
    if(err){
      res.json({
        success: false,
        error: err
      })
    }else{
      res.json({
        success: true,
        message: "A diciplina foi adicionada.",
        result: req.body
      })
    }
  })
});

app.listen(3001, function() {
  console.log("Rodando...")
  db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS alunos
      (id INTEGER PRIMARY KEY,
        matricula TEXT NOT NULL,
        nome TEXT NOT NULL,
        turma TEXT NOT NULL)`);
    db.run(`CREATE TABLE IF NOT EXISTS disciplinas
      (id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL)`);
    db.run(`CREATE TABLE IF NOT EXISTS avaliacoes
      (id INTEGER PRIMARY KEY,
        aluno_id INTEGER,
        disciplina_id INTEGER,
        nota REAL NOT NULL,
        FOREIGN KEY(aluno_id) REFERENCES alunos(id),
        FOREIGN KEY(disciplina_id) REFERENCES disciplinas(id));`);
  })
})
