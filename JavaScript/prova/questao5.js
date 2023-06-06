function soma(...numeros) {
  for (let i = 1; i < numeros.length; i++) {
    numeros[0] += numeros[i];
  }
  return numeros[0];
}

console.log(soma(5, 4, 3, 2, 1)); // Imprime 15
console.log(soma(6.5, 1.4)); // Imprime 7.9
console.log(soma(2)); // Imprime 2
console.log(soma(2, 2, 2, 2, 2, 2, 2)); // Imprime 14
console.log(soma(0, 1, 0, 1)); // Imprime 2
