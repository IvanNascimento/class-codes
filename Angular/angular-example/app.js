angular
.module("images", [])
.controller("MainCtrl", function($http) {
  var self = this;
  self.editando = false;
  self.idEdit = -1;
  self.valor;
  self.iniciar = function() {
    $http
      .get('profile.json')
      .then(function(result) {
        self.profile = result.data;
      });
  }

  self.like = function (img) {
    var index = img.likes.indexOf(self.profile.email);
    if (index >= 0) {
      img.likes.splice(index,1);
    }else {
      img.likes.push(self.profile.email);
    }
  }

  self.ImgLikes = function (img) {
    var index = img.likes.indexOf(self.profile.email);
    if(index >= 0) {
      var nome = img.likes[0];
      img.likes[0] = img.likes[index];
      img.likes[index] = nome;
    }
    var first = (img.likes[0] === self.profile.email) ? "Você" : img.likes[0];
    if(img.likes.length === 0){
      return "Está foto ainda não foi curtida.";
    }else if(img.likes.length === 1) {
      return first +" Curtiu essa img."
    }else if(img.likes.length === 2) {
      return first +" e "+img.likes[1]+" curtiram essa foto."
    }else if(img.likes.length > 2) {
      return first +" e mais "+(img.likes.length-1)+" pessoas curtiram essa foto."
    }
  }

  self.editar = function (img, i) {
    var aux = self.idEdit;
    self.editando = (!self.editando) ? true : (self.idEdit === i) ? false : true;
    // (condição) ? valor verdadeiro : valor falso
    self.idEdit = (self.editando) ? i : -1;
    if(self.editando && self.idEdit === i) {
      self.valor = img.tags.join(", ");
    } else {
      if (i === aux && !self.editando) {
        img.tags = self.valor.split(", ");
      }
    }
  }

  self.iniciar();
});
