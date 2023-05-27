var ex = require("express")();
const sqlite3 = require('sqlite3').verbose();
var at = {}

ex.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let myDB = new sqlite3.Database('./db/bancodb.db');

// Aqui se não existir o banco de dados ou a tabela ele cria
myDB.serialize(() => {
  myDB.run(`CREATE TABLE IF NOT EXISTS Banco(UId INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Cpf TEXT)`, (err, row) => {
    if(err){
      console.log("ERROR!!: ",err);
    }
  })
})

// printa os intens da tabela no console
myDB.serialize(() => {
  myDB.each(`SELECT  UId as id,
    Nome as nome,
    Cpf as cpf
    FROM Banco`, (err, row) => {
      if (err) {
        console.error(err.message);
      }else{
        console.log(row.id + "\t" + row.nome + "\t" + row.cpf);
      }
    });
  });

// usado para pegar os dados da tabela
ex.get('/',function(req,res){
  myDB.serialize(function(){
    var i = 0;
    myDB.each("SELECT * FROM Banco",function(err,row){
      at[i] = {'id':row.UId,'nome':row.Nome, 'cpf':row.Cpf}
      i++
    });
  });
  res.json(at);
});

// usado para abrir o html
ex.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

// usado para cria colocar coisas na tabela
// Exemplo: localhost:3000/Camila/555588-6
ex.get('/:nome/:cpf', function(req, res){
  myDB.serialize(function(){
    myDB.run(`INSERT INTO Banco (UId, Nome, Cpf) VALUES (?,?,?)`, [undefined, req.params.nome, req.params.cpf])
  });
  res.json({
    'Ok': true
  })
});

ex.listen(3000, function(){
  console.log(" conectado!");
});
