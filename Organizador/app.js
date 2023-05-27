/*
 ==========================================================================
 Autor: Ivan Nascimento
 Contato: ivanluis431@gmail.com
 ==========================================================================
 */

/* global __dirname */

var express = require("express");
var app = require("express")();
var http = require("http");
var bodyparser = require("body-parser");
var sqlite3 = require('sqlite3').verbose();

var models = require("./models");

var Generos = require("./routes/Generos");
var Tipos = require("./routes/Tipos");
var Series = require("./routes/Series");
var Produtores = require("./routes/Produtores");
var Objetos = require("./routes/Objetos");

const port = 9000;

app.use(bodyparser.urlencoded({extended: false}));// só coloca
app.use(bodyparser.json());

app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(Generos);
app.use(Tipos);
app.use(Series);
app.use(Produtores);
app.use(Objetos);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/html/index.html');
});


app.set('port', port);

var server = http.createServer(app);

models.sequelize.sync().then(function (){
  server.listen(port, function (){
    console.log('Express server listening on port ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});

function onError(error){
  if(error.syscall !== 'listen'){
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch(error.code){
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(){
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
