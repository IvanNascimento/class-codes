const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json(
  {
  Nome:{"mensagem": "olá, mundo!"},
  idade:{"nome":"Ivan"},
  num:{"Email":"ivanluis431@gmail.com"}
  }
  )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
