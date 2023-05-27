const translate = require('google-translate-api');
var express = require('express');
var bp = require('body-parser');
var app = express();

var obj = {
  para: 123,
  para2: "asdf"
}
app.use(bp.json())
app.use(bp.urlencoded());

app.get('/', function(req, res) {
  res.send(req.query.parametro1 + req.query.parametro2);
});

app.post('/traduzir', function(req, res) {
  var pars = req.body;
  var dicionario = {
    "en" : {
      "ola": "hello",
      "cachorro": "dog",
      "noite": "night"
    },
    "es" : {
      "ola": "hola",
      "cachorro": "perro",
      "noite": "noche"
    },
    "jp" : {
      "ola": "こんにちは",
      "cachorro": "犬",
      "noite": "夜"
    }
  };

  res.send(dicionario[pars.idioma][pars.palavra]);
})

app.post('/traduzir2', function(req, res) {
  translate(req.body.palavra, {to: req.body.idioma}).then(resultado => {
    res.json({
      "resultado": resultado.text,
      "idioma_origem": resultado.from.language.iso
    })
  }).catch(err => {
      console.error(err);
  });

});

app.post('/usuarios', function(req, res) {
  res.send("Usuário " + req.body.username +
    " cadastrado. Telefone: " +
    req.body.telefone.cod_pais +
    req.body.telefone.ddd +
    req.body.telefone.numero);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log("Running...");
  console.log("Diretório base: " + __dirname);
})
