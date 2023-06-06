angular.module("segredin").controller("CadastroCtrl", function ($scope, $http) {
  var vm = this;

  this.usuario = {};
  $scope.cadastrar = function () {
    if (vm.password === vm.password2) {
      // Cadastro completo
      vm.usuario.password = vm.password;
      console.log(vm.usuario);
      $http
        .post("https://api.com/api/users", vm.usuario)
        .then(function (response) {
          if (response.data.success) {
            alert("Usuário criado com sucesso!");
          } else {
            // Ajeitar o alert, pois não esta representando corretamente os erros
            alert("Usuário já cadastrado!");
          }
        });
    } else {
      alert("Senhas não correspondentes!!");
    }
  };
});
