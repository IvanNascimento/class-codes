let express = require('express')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/clima/:cidade', function (req, res) {
  var cidade = req.params.cidade
  var situacoes = ["sun", "rain", "snow"]
  var mensagens = ["O clima está ótimo", "Está chovendo", "Está nevando"]

  var indice = Math.floor(Math.random() * situacoes.length)

  res.json({
    mensagem: mensagens[indice],
    cidade: cidade,
    situacao: situacoes[indice]
  })
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!')
})
