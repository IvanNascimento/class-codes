const express = require('express');
const app = express();

app.get('/clima/:cidade', function (req, res) {
  var cidade = req.params.cidade;
  if (cidade == "Carnaúba"){
  res.send('Hoje está um dia otimo em Carnaúba.<\p>Otimo para um passeio no Orto Florestal.');}
  else if(cidade == "Picuí"){
    res.send('Hoje está mais um dia de sol em Picuí.<\p>Nem se preocupe em levar garda-chuva, ah não ser que queira um garda-sol.');}
  else if(cidade == "Nova Floresta"){
    res.send('O clima de Nova Floresta está otimo hoje.');}
  else if(cidade == "Cubati"){
    res.send('Grande possibilidade de chuva em Cubati.<\p>Melhor levar um garda-chuva.');}
  else if(cidade == "Barra de Santa Rosa"){
    res.send('Hoje está um dia nublado em Barra de Santa Rosa.<\p>É bom ter um casaco é garda-chuca em maos.')}
  else{
    res.send('Hoje está um dia otimo em ' + cidade + '.<\p>Mas é sempre bom ter um garda-chuva.');}
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
