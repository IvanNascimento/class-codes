function *alfabet() {
  for (let i = 65; i < 91;i++) {
    yield String.fromCharCode(i);
  }
}

var alfabet = alfabet();

for (var i = 0; i < 27; i++) {
  console.log(alfabet.next());
}

var letras = ["a","b","c","d","e"];

for (let [k, v] of letras.entries()) {
  console.log(k,v);
}
