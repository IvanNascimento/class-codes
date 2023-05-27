angular
  .module('intro', [])
  .controller('AppController', AppController);

function AppController($scope) {
  $scope.valor = '';
  $scope.editando = false;
  $scope.valorEdicao = '';
  $scope.emEdicao = 0;

  this.editar = function(indice) {
    $scope.editando = true;
    $scope.emEdicao = indice;
    $scope.valorEdicao = this.animais[indice];
  }

  this.confirmarEdicao = function(indice){
    $scope.editando = false;
    this.animais[indice] = $scope.valorEdicao;
  }

  this.adicionar = function() {
    this.animais.push($scope.valor);
    $scope.valor = "";
  }

  this.remover = function(indice) {
    this.animais.splice(indice, 1);
  }

  this.animais = [
    "Cão", "Gato", "Peixe", "Tubarão"
  ];
}
