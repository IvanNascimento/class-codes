angular
  .module("segredin")
  .controller("LoginCtrl", function ($scope, $location, $http) {
    // Para testes
    // Usuario: joaosilva
    // Senha: senha123
    var vm = this;

    this.usuario = {};

    $scope.login = function () {
      $http
        .post("https://api.com/api/authenticate", vm.usuario)
        .then(function (response) {
          if (response.data.success) {
            console.log("Usuario Logado");
            localStorage["token"] = response.data.token; // save token
            $location.path("/perfil");
          } else {
            console.log("Usuario incorreto");
          }
        });
    };
  });
