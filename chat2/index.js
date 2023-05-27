var express   = require('express')
var sse       = require('./sse')
var app       = express()
var bp        = require('body-parser')
var listeners = []

app.use(sse)
app.use(bp.json())
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))

app.get('/stream', function(req, res) {
  res.sseSetup()

  listeners.push(res)
})

app.post('/enviar', function(req, res) {
  var mensagem = {
    nickname: req.body.nickname,
    text: req.body.text
  }

  for (var l of listeners) {
    l.sseSend(mensagem)
  }

  res.json(true)
})

app.listen(3000, '0.0.0.0')
