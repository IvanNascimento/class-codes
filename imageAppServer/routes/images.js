const express = require('express');
var models = require('../models');
var bp = require('body-parser');
var axios = require('axios');

const router = express.Router();
var request = axios.create({
  baseURL: 'https://backend-dot-webdev-ifpb.appspot.com'
});

var User = models.User;
var Image = models.Image;
var Tag = models.Tag;
var Like = models.Like;
var Comentario = models.Comentario;

router.use(bp.json());

router.post('', function(req, res) {
  Image.create({
    userId: req.body.userId,
    fileId: req.body.fileId,
    text: req.body.text
  }).then(function(image) {
    res.json(image);
  }).catch(function(error) {
    res.json(error);
  });
});

router.get('', function(req, res) {
  Image
  .all()
  .then(function(images){
    res.json(images);
  })
  .catch(function(error) {
    res.json({
      'success': false,
      'error': error
    })
  })
})

router.get('/:id', function(req, res) {
  Image
  .findById(req.params.id, { include: [ Like, {
    model: Tag,
    include: ['text']
  }]})
  .then(function(image) {
    res.json(image);
  });
});

router.post('/:id/tags', function(req, res) {
  Tag
  .findAll({
    where: {
      text: req.body.text
    }
  })
  .then(function(tags) {
    if(tags.length == 0){
      Tag
      .create({
        text: req.body.text
      })
      .then(function(tag) {
        Image
        .findById(req.params.id)
        .then(function(image) {
          image.addTag(tag);
          image.save();
        });
        res.json(tag);
      });
    }else{
      Tag.find({
        where: {
          text: req.body.text
        }
      }).then(function(tag){
        Image
        .findById(req.params.id)
        .then(function(image){
          image.addTag(tag)
          image.save();
        })
        res.json(tag);
      })
    }
  })
});

router.post('/:id/likes', function(req, res) {
  if(!req.usuario){
    res.json({
      'success': false,
      'error': "Não autorizado"
    });
  }
  else {
    User
    .find({
      where: {
        email: req.usuario.email
      }
    }).then(function(user) {
      Like
      .create({
        userId: req.usuario.id,
        imageId: req.params.id
      }).then(function(like) {
        res.send(200);
      }).catch(function(error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          Like
          .destroy({
            where: {
              userId: req.usuario.id,
              imageId: req.params.id
            }
          })
          .then(function(user) {
            res.send(200);
          }).catch(function(error) {
            res.json({
              success: false,
              result: error
            });
          });
        } else if (error.name === 'SequelizeForeignKeyConstraintError') {
          res.json({
            success: false,
            message: 'A imagem não existe'
          });
        } else {
          res.json({
            success: false,
            message: 'Erro desconhecido'
          });
        }
      });
    });
  };
});

router.post('/:id/comments', function(req, res){
  if(!req.usuario){
    res.send(403);
  }
  Comentario
  .create({
    text: req.body.text,
    author_id: req.usuario.id,
    author_name: req.usuario.firstName + " " + req.usuario.lastName
  }).then(function(comentario){
    Image
    .findById(req.params.id)
    .then(function(image) {
      image.addComentario(comentario);
      image.save();
    })
    res.send(200);
  }).catch(function(error) {
    Comentario
    .destroy({
      where: {
        author_id: req.usuario.id,
        imageId: req.params.id
      }
    })
    res.json({
      'success': false,
      'error': "erro desconhecido"
    });
  });
})

module.exports = router;
