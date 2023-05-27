angular
  .module("App",[])
  .controller("AppController", AppController);

function AppController($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.serie = "";

  this.dados = [];

  this.Adicionar = function(){
    var b = {
      Nome: $scope.nome,
      Matricula: $scope.matricula,
      Serie: $scope.serie
    }
    this.dados.push(b);
  }
}
