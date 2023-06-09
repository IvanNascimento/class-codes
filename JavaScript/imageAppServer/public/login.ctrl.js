angular
.module('imageApp')
.controller('LoginCtrl', function($http) {
  var self = this;
  this.login = function() {
    login(function(resultado) {
      localStorage['token'] = resultado.token;
      console.log(resultado.token);
      self.myLogin(resultado.token);
    });
  }
  this.myLogin = function(token) {
    $http
    .post('http://localhost:8082/users/login', { token })
    .then(function(res) {
      self.perfil = res.data;
    });
  }

  this.like = function(id) {
    var token = localStorage['token'];
    $http
    .post(`http://localhost:8082/images/${id}/likes`, {},
      {
        headers: {
          authorization: "Beaders "+token
        }
      })
    }

  });
