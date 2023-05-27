var fs = require('fs');

function ler(arq) {
  return new Promise((res, rej) => {
    fs.readFile(arq, {
      encoding: 'utf8'
    }, (erro, conteudo) => {
      if(erro) {
        rej(erro);
        return;
      }
      res(conteudo);
    });
  });
}

ler("numeros.txt")
  .then(function (conteudo) {
    let par = [];
    let impar = [];
    let nums = (conteudo.split('\r\n'));
    for (let i of nums) {
      if (parseInt(i)%2 == 0){
        par.push(i);
      } else {
        impar.push(i);
      }
    }

    let sPar = par.join("\n")
    let sImpar = impar.join("\n")

    fs.writeFile("par.txt", sPar, (erro) => {
      if (erro) throw erro;
    });
    fs.writeFile("impar.txt", sImpar, (erro) => {
      if (erro) throw erro;
    });
  })
