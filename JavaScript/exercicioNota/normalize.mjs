'use strict';
export function normalize(palavra) {
  let res = palavra.normalize('NFD');
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  for (let i of res) {
    i = i.toLowerCase();
    if (!alfabeto.includes(i)) {
      res = res.replace(i,"");
    }
  }
  return res;
}
