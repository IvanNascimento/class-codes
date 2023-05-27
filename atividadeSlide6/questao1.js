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

function copiar(arq, ext) {
  ler(arq+ext)
    .then(function (res) {
      escrever(arq+" - Copia"+ext, res);
      console.log("Ok");
    })
    .catch(function (erro) {
      console.log(erro);
    })
}

copiar("Teste",".json");
