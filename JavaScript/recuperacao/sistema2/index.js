let express = require('express')
let bodyParser = require('body-parser')
let app = express()

var port = 3000

var Sucesso = false
var Users =[
  {User: "Ivan",Password:"progamacao"},
  {User: "Diego",Password:"tudobom"},
  {User: "Gerssicleiton",Password:"trabalhando"},
  {User: "Aluno",Password:"aluno"},
  {User: "Professor",Password:"IFPB-Informatica123"}
]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*app.get('/',function(req,res){
  res.sendfile("D:/arquivos/Progamação_Coorporativa/recuperacao/sistema2/index.html") //funciona para abrir este arquivo como padrão da porta #(localhost:port)
})*/

app.post('/login', function (req, res) {
  var user = req.body.user
  var password = req.body.password
  console.log("User: "+user+" Passaword: "+password)
  for(i = 0; i < Users.length;i++){
    if (user==""){
      Sucesso = false
      break
    }
    if(user == Users[i].User){
      if(password == Users[i].Password){
        Sucesso = true
      }
      else{
        Sucesso = false
      }}
    }
  if (Sucesso){
    res.send({
      "sucesso":true,
      "mensagem":"Você está conectado ao sistema."
    })}
  else{
    res.send({
      "sucesso":false,
      "mensagem":"Nome de usuário ou senha incorreto(s)."
    })}
    })

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})
