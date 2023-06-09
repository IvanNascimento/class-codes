const express = require('express');
const router = express.Router();

var models = require('../models');
var bp = require('body-parser');
var axios = require('axios');
var request = axios.create({
  baseURL: 'https://backend-dot-webdev-ifpb.appspot.com'
});

// Imagem cachorro
// 37ed2053-93eb-43a7-8efc-17dc1cf929a7
// daae1291-1044-48d3-af66-fd1bcb336de4
// 5715f727-3bf4-461e-ad44-492c174c9ba0

var User = models.User;
var Image = models.Image;
var Tag = models.Tag;
var Like = models.Like;

router.use(bp.json());

router.post('', function(req, res) {
  if (!req.usuario) {
    res.send(403);
    return;
  }

  Image.create({
    userId: req.usuario.id,
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
  console.log(req.usuario);

  if (!req.usuario) {
    res.send(403);
    return;
  }

  Image
    .findById(req.params.id, { include: [
      Like,
      {
        model: Tag,
        attributes: ['text']
      }]
    })
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
      if (tags.length == 0) {
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
      } else {
        Tag.find({
          where: {
            text: req.body.text
          }
        }).then(function(tag) {
          Image
            .findById(req.params.id)
            .then(function(image) {
              image.addTag(tag);
              image.save();
            });
          res.json(tag);
        })
      }
    });
});

router.post('/:id/likes', function(req, res) {
  // begin - requisição para obter perfil
  if (!req.usuario) {
    res.send(403);
  }

  // begin - requisição para encontrar usuário
  User.find({
    where: {
      email: req.usuario.email
    }
  }).then(function(user) {

    // begin - requisição para criar Like
    Like.create({
      userId: user.id,
      imageId: req.params.id
    }).then(function(like) {
      res.send(200);
    }).catch(function(error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // begin - requisição para remover Like
        Like
          .destroy({
            where: {
              userId: user.id,
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
          // end - requisição para remover Like
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
    // end - requisição para criar Like
  });
  // end - requisição para encontrar usuário
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
