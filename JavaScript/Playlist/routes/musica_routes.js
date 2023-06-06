var express = require('express');
var app = express();
var models = require('../models');
var Musica = models.Musica;
var bp = require('body-parser');
var modulos = require('../modules/modulos');

app.use(bp.json());

//todas as musicas
app.get('/musica', function (req, res){
  Musica
    .findAll()
    .then(function (objs){
      modulos.respostaPadrao(res, true, 'Ok', objs);
      modulos.registraAcao('Todas as musicas listadas');
    });
});

//musica de id n
app.get('/musica/:id', function (req, res){
  Musica
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (obj){
      modulos.respostaPadrao(res, true, 'Ok', obj);
      modulos.registraAcao('musica de id ' + req.params.id + ' requisitada');
    });
});

//add musica
app.post('/musica', function (req, res){
  Musica
    .create(req.body)
    .then(function (obj){
      modulos.respostaPadrao(res, true, 'musica adicionada com sucesso', obj);
      modulos.registraAcao('Musica criada');
    }, function (erro){
      modulos.respostaPadrao(res, false, 'Erro ao criar musica', erro);
      modulos.registraAcao('Erro ao criar musica');
    });
});

//atualizar
app.put('/musica', function (req, res){
  Musica
    .findById(req.body.id)
    .then(function (obj){
      obj.titulo = req.body.titulo || obj.titulo;
      obj.duracao = req.body.duracao || obj.duracao;
      obj.autor = req.body.autor || obj.autor;
      obj.album = req.body.album || obj.album;
      obj.ano = req.body.ano || obj.ano;

      obj
        .save()
        .then(function (obj){
          modulos.respostaPadrao(res, true, 'Musica atualizada', obj);
          modulos.registraAcao('Musica de id ' + req.body.id + ' atualizada');
        });
    }, function (erro){
      modulos.respostaPadrao(res, false, 'Erro ao atualizar a musica', erro);
      modulos.registraAcao('Erro ao atualizar musica de id ' + req.body.id);
    });
});

//deletar
app.delete('/musica', function (req, res){
  Musica
    .destroy({
      where: {
        id: req.body.id
      }
    })
    .then(function (){
      modulos.respostaPadrao(res, true, 'Musica removida', undefined);
      modulos.registraAcao('musica de id ' + req.body.id + ' deletada');
    });
});

module.exports = app;