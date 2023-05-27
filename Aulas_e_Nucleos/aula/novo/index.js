let express = require('express')
let bodyParser = require("body-parser")
let app = express()


app.use(bodyParser.json())

app.get('/clima/:cidade', function(req,res){
  var cidade = req.params.cidade
  var situacao = ["Sun","Rain","Snow"]
  var mensagens = ["O clima está ótimo","Está chovendo","Está nevando"]

  var indice = Math.round(Math.random() * (situacao.length - 1))

  res.json({
    mensagem: mensagens[indice],
    cidade: cidade,
    situação: situacao[indice]
  })
})

app.get('/pessoas/:id', function(req,res){
  var id = req.params.id
  var pessoas = ["Maria","Pedro","Ivan","Diego","Carol","Anderson","Joan","Gerssicleiton"]
  var estado = ["Está com raiva","Está triste","Está alegre","Está dormindo","Está Deprimido"]

  var indice = Math.round(Math.random() * (estado.length - 1))
  var idade = Math.round(Math.random() * 30)


  res.json({
    pessoa:pessoas[id],
    idade: idade,
    estado: estado[indice],

  })
})

app.use(express.static(__dirname + '/public'));

app.listen(3000,"0.0.0.0",function(){
  console.log("Example app listening on port 3000!")
  //console.log('o diretorio da aplicação é: ')
  //console.log(__dirname)
})
