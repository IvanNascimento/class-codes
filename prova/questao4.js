var conta = {
  "saldo": 0,
  depositar: function(valor) {
    this.saldo+=valor;
  },
  sacar: function(valor) {
    this.saldo-=valor;
  }
}
console.assert(Object.getOwnPropertyNames(conta).indexOf('saldo') >= 0, "Cadê a propriedade saldo?");
console.assert(Object.getOwnPropertyNames(conta).indexOf('depositar') >= 0, "Cadê o método depositar?");
console.assert(Object.getOwnPropertyNames(conta).indexOf('sacar') >= 0, "Cadê o método sacar?");
console.assert(conta.saldo === 0, "Saldo deveria iniciar igual a 0");
conta.depositar(50);
console.assert(conta.saldo === 50, "Saldo deveria ser igual a 50");
conta.sacar(25);
console.assert(conta.saldo === 25, "Saldo deveria ser igual a 25");
