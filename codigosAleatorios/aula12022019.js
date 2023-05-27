var pessoa = {
  idade: 18,
  nome: "João",
  peso: 80,
  fazerAniversario: function() {
    this.idade += 1;
  },
  emagrecer: function (kg) {
    this.peso -= kg;
  },
  engordar: function (kg) {
    this.peso += kg;
  }
}

console.log("==============");
console.log("Nome");
console.log(pessoa.nome);
console.log("==============");
console.log("Idade");
console.log(pessoa.idade);
pessoa.fazerAniversario();
console.log(pessoa.idade);
console.log("==============");
console.log("Peso, Emagrecer 5 Kg");
console.log(pessoa.peso);
pessoa.emagrecer(5);
console.log(pessoa.peso);
console.log("==============");
console.log("Peso, Engordar 10 Kg");
console.log(pessoa.peso);
pessoa.engordar(10);
console.log(pessoa.peso);
console.log("==============");
