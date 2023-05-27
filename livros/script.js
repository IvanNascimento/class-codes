angular
  .module('livros', [])
  .controller('MainController', MainController);

function MainController() {
  this.alert = false;
  this.livros = [];

  this.adicionar = function() {
    if (!this.livro || this.livro.titulo === "" || this.livro.autor === "" ||
      this.livro.foto === "") {
        this.alert = true;
    } else {
      this.livros.push(this.livro);
      this.alert = false;
    }
  }
}
