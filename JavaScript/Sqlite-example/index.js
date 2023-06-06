var app = require('express')();
var sqlite = require('sqlite-sync');

sqlite.connect("dados.db");

app.get('/add/:nome/:senha', function(req, res){
  sqlite.insert('Dados', {Nome: req.params.nome, Senha: req.params.senha})
  res.send({
    Nome: req.params.nome,
    Senha: req.params.senha
  })
})

app.get('/get', function(req, res){
  var rows = sqlite.run("SELECT * FROM Dados");
  res.send(rows);
})

app.get('/get/:id', function(req, res){
  var row = sqlite.run("SELECT * FROM Dados WHERE Id = ?", [req.params.id]);
  res.send(row);
})

app.get('/delete/:id', function(req, res){
  sqlite.run("DELETE FROM Dados WHERE Id = ?", [req.params.id]);
  res.send("Ok");
})

app.get('/update/:id/:nome/:senha', function(req, res){
  sqlite.update("Dados",{Nome: req.params.nome, Senha: req.params.senha}, {Id: req.params.id});
  res.send("Ok");
})


app.listen(3000, function(){
  console.log("Porta 3000!");
  // Cria a table somente se ela não existir
  sqlite.run("CREATE TABLE IF NOT EXISTS Dados(Id INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT NOT NULL, Senha TEXT NOT NULL)");
})
