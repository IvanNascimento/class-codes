function tratamento(string) {
  var letras = string.match(/^[a-zA-Z]+$/);
  var numeros = string.match(/^[0-9]+$/);
  var letrasNumeros = string.match(/^[a-zA-Z0-9]+$/);
  var letrasNumerosCaracteres = string.match(/^[0-9a-zA-Z#$%?!@]+$/);

  if(letras || numeros) {
    return "Fraca"
  }
  if(letrasNumeros) {
    return "Media"
  }
  if(letrasNumerosCaracteres) {
    return "Forte"
  }
}

console.log(tratamento("asdasd"))
console.log(tratamento("asdasd1235#$@"))
console.log(tratamento("asdasd1235"))
