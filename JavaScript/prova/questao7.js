// A
function getResultado() {
  return new Promise((res, rej) => {
    setTimeout(res("ok"), 500);
  })
}
// B
function getFalha() {
  return new Promise((res, rej) => {
    setTimeout(rej("ok"), 500);
  })
}
// C
  // Then
  getResultado()
    .then(console.log);
  getFalha()
    .catch(console.log);
  // async e await
  (async function() {
    var resultado = await getResultado();
    console.log("Resultado", resultado);
    try {
      var falha = await getFalha();
    }catch(e) {
      console.log("Falha",e);
    }
  })()
