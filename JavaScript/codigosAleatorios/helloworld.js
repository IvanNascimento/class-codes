function helloWorld (code = "pt") {
  switch(code) {
    case "us":
      return "Hello, World!";
    case "es":
      return "hola Mundo!";
    case "fr":
      return "bonjour le monde";
    case "jv":
      return "Kon'nichiwa sekai";
    case "pt":
      return "Olá, Mundo!!";
  }
}

let res = helloWorld("us");
console.log(res);
res = helloWorld("es");
console.log(res);
res = helloWorld("fr");
console.log(res);
res = helloWorld("jv");
console.log(res);
res = helloWorld("pt");
console.log(res);
