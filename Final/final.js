angular
.module("final", [])
.controller("finalController", function() {
  this.mostrar = true;
  this.esconder = function () {
    if (this.mostrar === true) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }
});
