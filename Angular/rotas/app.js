angular
  .module("rotas", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "login.html",
        controller: "LoginCtrl as c",
      })
      .when("/home", {
        templateUrl: "home.html",
        controller: "PrincipalCtrl as c",
      })
      .when("/teste/:par", {
        templateUrl: "teste.html",
      });
  })
  .controller("LoginCtrl", function ($scope, $http, $routeParams) {
    var vm = this;

    $scope.texto = "Estou no login controller";

    this.logar = function () {
      $http
        .post("https://api.com/api/authenticate", this.user)
        .then(function (result) {
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  })
  .controller("PrincipalCtrl", function ($scope, $location, $routeParams) {
    var vm = this;

    $scope.texto = "Estou no principal controller";

    this.inicializar = function () {
      $scope.valor = $routeParams.par;
      $scope.nome = localStorage["nome"];

      $scope.isLogged = true;

      if ($scope.isLogged) {
        console.log("está logado...");
      } else {
        console.log("não está logado...");
        $location.path("/");
      }
    };
  });
