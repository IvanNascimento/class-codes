const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

app.get("/cidades/:cidade",function(req,res){
  var cidade = req.params.cidade
  var previsao = [
    {"temp" :32,"ventoVel":40,"sencacao":29,"ventoDir":"N"},
    {"temp" :29,"ventoVel":50,"sencacao":28,"ventoDir":"NE"},
    {"temp" :30,"ventoVel":30,"sencacao":30,"ventoDir":"SE"},
    {"temp" :31,"ventoVel":25,"sencacao":27,"ventoDir":"O"}
  ]

  res.json({
    "Cidade":cidade,
    "Previsao": previsao
  })
})

app.listen(3000,"0.0.0.0",function(){
  console.log("Rodando")
})
