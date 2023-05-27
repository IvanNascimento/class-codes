function Conta(proprietario) {
  this.proprietario = proprietario,
  this.saldo = 0,
  this.getProprietario = function() {
    return this.proprietario;
  },
  this.depositar = function(quant) {
    this.saldo += quant;
  },
  this.sacar = function(quant) {
    this.saldo -= quant;
  },
  this.getSaldo = function() {
    return this.saldo;
  }
}

// Instancie pessoa na variável pessoa abaixo:
var conta = new Conta("Antonio");

// Não modifique o código abaixo:
console.assert(conta.getProprietario() === "Antonio", "getProprietario() deveria retornar \"Antonio\"");
console.assert(conta instanceof Conta, "Instanciação falhou");

// Obtendo o saldo de conta
console.assert(conta.getSaldo() === 0, "getSaldo() deveria retornar 0");

conta.depositar(10.50);

// Obtendo o saldo de conta
console.assert(conta.getSaldo() === 10.5, "getSaldo() deveria retornar 10.50");

conta.sacar(2.50);

// Obtendo o saldo de conta
console.assert(conta.getSaldo() === 8, "getSaldo() deveria retornar 10.50");
