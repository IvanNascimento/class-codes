var express = require('express');
var app = express();
var models = require('../models');
var Musica = models.Musica;
var Playlist = models.Playlist;
var bp = require('body-parser');
var modulos = require('../modules/modulos');

app.use(bp.json());

//todas as playlists
app.get("/playlist", function (req, res){
  Playlist
    .findAll({
      include: Musica
    })
    .then(function (objs){
      modulos.respostaPadrao(res, true, 'Ok', objs);
      modulos.registraAcao('Foram listadas todas as playlists');
    });
});

//playlist de id n
app.get("/playlist/:id", function (req, res){
  Playlist
    .findOne({
      where: {
        id: req.params.id
      },
      include: Musica
    })
    .then(function (obj){
      modulos.respostaPadrao(res, true, 'Ok', obj);
      modulos.registraAcao('requisitada playlist de id ' + req.params.id);
    });
});

//Criar playlist
app.post("/playlist", function (req, res){
  Playlist
    .create(req.body)
    .then(function (obj){
      modulos.respostaPadrao(res, true, 'Playlist Criada com sucesso', obj);
      modulos.registraAcao('Foi criada uma playlist');
    }, function (erro){
      modulos.respostaPadrao(res, false, 'Erro ao criar a playlist', erro);
      modulos.registraAcao('Erro ao tentar criar uma playlist');
    });
});

//add musica em playlist
app.post('/playlist/:IdPlaylist/Song/:IdSong', function (req, res){
  var idPlaylist = req.params.IdPlaylist;
  var idSong = req.params.IdSong;

  Playlist
    .findById(idPlaylist)
    .then(function (playlist){
      playlist
        .addMusicas([idSong])
        .then(function (obj){
          modulos.respostaPadrao(res, true, 'Musica adicionada com éxito', obj);
          modulos.registraAcao('Musica de id ' + idSong + ' adicionada com éxito a playlist de id ' + idPlaylist);
        });
    }, function (erro){
      modulos.respostaPadrao(res, false, 'Erro ao adicionar musica', erro);
      modulos.registraAcao('Erro ao adicionar musica de id ' + idSong + ' na playlist de id ' + idPlaylist);
    });
});

//remove musica de playlist
app.delete('/playlist/:idPlaylist/Song/:idSong', function (req, res){
  var idPlaylist = req.params.idPlaylist;
  var idSong = req.params.idSong;

  Playlist
    .findById(Playlist)
    .then(function (playlist){
      playlist
        .removeMusica([idSong])
        .then(function (){
          modulos.respostaPadrao(res, true, 'Musica removida da playlist', undefined);
          modulos.registraAcao('Musica de id ' + idSong + ' removida da playlist de id ' + idPlaylist);
        });
    }, function (erro){
      modulos.respostaPadrao(res, false, 'Erro ao retirar musica da playlist', erro);
      modulos.registraAcao('Erro ao retirar musica da playlist de id ' + idPlaylist);
    });
});

//deletar playlist
app.delete("/playlist", function (req, res){
  Playlist
    .destroy({
      where: {
        id: req.body.id
      }
    })
    .then(function (){
      modulos.respostaPadrao(res, true, 'playlist deletada com sucesso', undefined);
      modulos.registraAcao('playlist id ' + req.body.id + ' deletada');
    });
});

module.exports = app;