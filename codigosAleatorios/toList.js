function toList () {
  resultado = "<"+arguments[0]+">";

  for (let i = 1;i<arguments.length;i++) {
    resultado += "<li>"+ arguments[i] +"</li>"
  }

  return resultado+"</"+arguments[0]+">"
}

let res = toList("ul", "a","b","c");
console.log(res);
