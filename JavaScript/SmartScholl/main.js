var express   = require('express');
var bp        = require('body-parser');
var sse       = require('./sse');
var app       = express();
var connections = [];

var port = process.env.PORT || 3000;

app.use(sse);
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/stream', function(req, res) {
  res.header("Content-Type", "text/event-stream");
  res.header("Cache-Control", "no-cache");
  res.header("Connection", "keep-alive");
  res.header("Access-Control-Allow-Origin", "*");

  connections.push(res);
});

app.post('/enviar', function(req, res) {
  for(var i = 0; i < connections.length; i++) {
    var nickname = req.body.nickname || 'Desconhecido';
    connections[i].sseSend({
      'nickname': nickname,
      'text': req.body.text
    });
  }
  console.log(req.body.text);
  res.json({ success: true });
});

app.listen(port, '0.0.0.0', function() {
  console.log('Rodando');
  console.log('PORT =', port);
});
