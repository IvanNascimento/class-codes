'use strict';
export function formatDatetime(date, showDate = true, showTime = true) {
  let resultado = "";
  if(showDate) {
    let d = date.getDate();
    d = d < 10 ? `0${d}`:d;
    let m = date.getMonth();
    m = m < 9 ? `0${m+1}`:m;
    let a = date.getFullYear();
    resultado += `${d}/${m}/${a} `;
  } if (showTime) {
    let h = date.getHours();
    h = h < 10 ? `0${h}`:h;
    let m = date.getMinutes();
    m = m < 10 ? `0${m}`:m;
    let s = date.getSeconds();
    s = s < 10 ? `0${s}`:s;
    resultado += `${h}:${m}:${s}`
  }
  if(!showDate && !showTime) {
    throw new Error("Exibição inválida");
  }
  return resultado;
}
