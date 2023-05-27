var func = {
  *fibonacci() {
    let a = 0,b = 1, c;
    yield a;
    yield b;
    while(true) {
      c = a+b;a = b;b = c;
      // [a,b] = [b, a + b]
      yield c;
    }
  },
  *pares() {
    let d = 0;
    yield 0;
    while(true) {
      yield d+=2;
    }
  }
}

let j = 106;
console.log("Pares");
let res = func.pares();
for (let i = 0;i < j+1;i++) {
  console.log(res.next());
}
// console.log("Fibonacci");
// res = func.fibonacci(j);
// for (let i = 0;i < j+1;i++) {
//   console.log(res.next());
// }
