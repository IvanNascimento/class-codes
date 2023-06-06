// Juntar

function juntar (separador = " ", primeiro, ...conteudo) {
  for (let i of conteudo) {
    primeiro += separador+i;
  }
  return primeiro;
}

res = juntar(",", "a", "x", "y");
console.log(res);
