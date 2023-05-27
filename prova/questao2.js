function menorElemento(lista) {
  let cont = 0;
  let menor = lista[0];
  while (cont < lista.length) {
    if(lista[cont] < menor) {
      menor = lista[cont];
    }
    cont++;
  }
  return menor;
}

console.log(menorElemento([5, 4, 3, 2, 1]));
console.log(menorElemento([6.5, 1.4, 7.3, 2.2, 9.1]));
console.log(menorElemento([2, 9, 10, 22, -1, 37]));
