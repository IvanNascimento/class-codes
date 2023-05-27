var fs = require('fs');

function ler(arq) {
  return new Promise((res, rej) => {
    fs.readFile(arq, {
      encoding: 'utf8'
    }, (erro, conteudo) => {
      if (erro) {
        rej(erro);
        return;
      }
      res(conteudo);
    });
  });
}

function escrever(arq, conteudo) {
  fs.writeFile(arq, conteudo, (erro) => {
    if (erro)
      throw erro;
  })
  return true;
}

function unir(arq, arq2) {
  ler(arq)
    .then(function (cont) {
      ler(arq2)
        .then(function (cont2) {
          escrever("junção.txt", cont+"\n"+cont2)
        })
    })
    .catch(function (erro) {
      console.log(erro);
    })
}

unir("par.txt", "impar.txt")
