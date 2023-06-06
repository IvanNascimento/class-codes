angular
  .module("segredin")
  .controller("PerfilCtrl", function ($scope, $location, $http) {
    var vm = this;

    this.usuario = {};
    this.usuarios = {};
    this.mensagem = {};
    this.mensagens = {};
    this.enviadas = {};

    if (localStorage["token"]) {
      $http
        .get("https://api.com/api/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage["token"],
          },
        })
        .then(function (response) {
          if (response.success === false) {
            $location.path("/");
          } else {
            console.log(response.data);
            vm.usuario = response.data.user;
            vm.mensagens = response.data.messages;
            vm.enviadas = response.data.sent;
          }
        });
    } else {
      $location.path("/");
    }

    $scope.getUsers = function () {
      $http
        .get("https://api.com/api/users", {
          headers: {
            Authorization: "Bearer " + localStorage["token"],
          },
        })
        .then(function (response) {
          vm.usuarios = response.data.docs;
        });
    };

    $scope.enviarMsg = function () {
      console.log(vm.mensagem);
    };
  });
