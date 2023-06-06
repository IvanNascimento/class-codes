function * getPares(n) {
  for (var i = 0; i < n; i++) {
    yield i*2;
  }
}

var pares = getPares(10);

do{
  var resultado = pares.next();
  console.log(resultado.value);
}while(!resultado.done);
