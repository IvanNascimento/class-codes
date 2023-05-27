'use strict';
export function adicionar(a, b) {
  return a+b;
}
export function subtrair(a, b) {
  return a-b;
}
export function multiplicar(a, b) {
  return a*b;
}
export function dividir(a, b) {
  return a/b;
}
export const PI = 3.14;
function soma(a, ...valores) {
  for (v of valores) {
    a += v;
  }
  return a;
}
function fatorial(a) {
  let resultado = a;
  for(let i=a-1;i>0;i--) {
    resultado*=i;
  }
  return resultado;
}
