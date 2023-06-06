angular
  .module("segredin", ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'login.html',
        controller: 'LoginCtrl as c'
      })
      .when('/cadastro',{
        templateUrl: 'cadastro.html',
        controller: 'CadastroCtrl as c'
      })
      .when('/perfil',{
        templateUrl: 'perfil.html',
        controller: 'PerfilCtrl as c'
      })
      .when('/error',{
        templateUrl: 'error.html'
      })
      .otherwise('/error')
  });
