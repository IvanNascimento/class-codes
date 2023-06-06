angular
  .module('intro', [])
  .controller('AppController', AppController);

function AppController($scope){
  $scope.valor = '';
  this.animais = [
    "Cão", "Gato", "Peixe", "Tubarão", "vaca"
  ];

  this.adicionar = function(){
    this.animais.push($scope.valor);
  }

  this.nomes = {
    123: "Ivan",
    234: "Antonio",
    345: "Pedro"
  };

}
