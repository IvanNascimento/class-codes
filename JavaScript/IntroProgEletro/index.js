function soma(a, b) {
  if (typeof (a) != "number" || typeof (b) != "number") {
    return {
      status: "error",
      error: "A e B devem ser números"
    }
  }
  var result = a + b
  return { status: 'Ok', result: result }
}
function anos(nascimento) {
  if (Number.isInteger(nascimento)) {
    var thisYear = new Date().getFullYear();
    if (nascimento > thisYear) {
      return {
        status: 'error',
        error: 'Esse código não funciona com viajantes do tempo'
      }
    }
    return {
      status: 'Ok',
      result: thisYear - nascimento + 1
    }
  }
  return {
    status: 'error',
    error: 'Nascimento deve ser um número inteiro'
  }
}
function areaCirculo(r) {
  if (typeof (r) != 'number' || r < 0) {
    return {
      status: 'error',
      error: 'R deve ser um número positivo'
    }
  }
  return {
    status: 'Ok',
    result: Math.PI * r ** 2
  }
}
function areaTriangulo(b, h) {
  if (typeof (b) != 'number' || typeof (h) != 'number' || b < 0 || h < 0) {
    return {
      status: 'error',
      error: 'B e H devem ser números positivo'
    }
  }
  return {
    status: 'Ok',
    result: (b * h) / 2
  }
}
function troca(a, b) {
  console.log("A:", a, "B:", b);

  a = b + a
  b = a - b
  a = a - b

  console.log("A:", a, "B:", b);

  return {
    status: "Ok",
    result: { 'A': a, 'B': b }
  }
}
// Q1
function areaQuadrilatero(l) {
  if (typeof (l) != 'number' || l < 0) {
    return {
      status: 'error',
      error: 'L deve ser um números positivo'
    }
  }
  return {
    status: 'Ok',
    result: l * l
  }
}
// Q2
function perimetroQuadrilatero(l) {
  if (typeof (l) != 'number' || l < 0) {
    return {
      status: 'error',
      error: 'L deve ser um número positivo'
    }
  }
  return {
    status: 'Ok',
    result: l * 4
  }
}
// Q3
function perimetroQuadrilatero(l, l2) {
  if (typeof (l) != 'number' || l < 0 || typeof (l2) != 'number' || l2 < 0) {
    return {
      status: 'error',
      error: 'L e L2 devem ser números positivos'
    }
  }
  return {
    status: 'Ok',
    result: l * 2 + l2 * 2
  }
}
// Q4
function areaQuadrilatero(l, l2) {
  if (typeof (l) != 'number' || l < 0 || typeof (l2) != 'number' || l2 < 0) {
    return {
      status: 'error',
      error: 'L e L2 devem ser números positivos'
    }
  }
  return {
    status: 'Ok',
    result: l * l2
  }
}
// Q5
function quadradoOuRetangulo(l1, l2, l3, l4) {
  if (typeof (l1) != 'number' || l1 < 0 || typeof (l2) != 'number' || l2 < 0
    || typeof (l3) != 'number' || l3 < 0 || typeof (l4) != 'number' || l4 < 0) {
    return {
      status: 'error',
      error: 'Todos os lados devem ser números positivos'
    }
  }
  if (l1 == l2 && l1 == l3 && l1 == l4) {
    return {
      status: "Ok",
      result: "Quadrado"
    }
  }
  if ((l1 == l2 && l4 == l3 && l1 != l4)
    || (l1 == l3 && l4 == l2 && l1 != l4)
    || (l1 == l4 && l3 == l2 && l1 != l3)) {
    return {
      status: "Ok",
      result: "Retangulo"
    }
  }
  return {
    status: "Ok",
    result: "Não nem quadrado nem retangulo"
  }
}
// Q6
function galinhas(n) {
  if (typeof (n) != "number" || !Number.isInteger(n) || n < 0) {
    return {
      status: "error",
      error: 'N deve ser um número inteiro positivo'
    }
  }
  return {
    status: 'Ok',
    result: n * 8
  }
}
// Q7
function vacas(n) {
  if (typeof (n) != "number" || !Number.isInteger(n) || n < 0) {
    return {
      status: "error",
      error: 'N deve ser um número inteiro positivo'
    }
  }
  return {
    status: 'Ok',
    result: n * 20
  }
}
// Q8
function engarafa(n) {
  if (typeof (n) != "number" || !Number.isInteger(n) || n < 0) {
    return {
      status: "error",
      error: 'N deve ser um número inteiro positivo'
    }
  }
  var litros = vacas(n);
  return {
    status: "Ok",
    result: litros.result / 2
  }
}
// Q9 
function lucro(n) {
  if (typeof (n) != "number" || !Number.isInteger(n) || n < 0) {
    return {
      status: "error",
      error: 'N deve ser um número inteiro positivo'
    }
  }
  var garafas = engarafa(n)
  return {
    status: "Ok",
    result: `R$ ${garafas.result * 3}`
  }
}
// Q10
// N é a quantidade de vacas
// V é a quantidade comprada
function desconto(n, v) {
  if (typeof (n) != "number" || !Number.isInteger(n) || n < 0
    || typeof (v) != "number" || !Number.isInteger(v) || v < 0) {
    return {
      status: "error",
      error: 'N e V devem ser números inteiros positivos'
    }
  }
  var garafas = engarafa(n);
  if (v > 10) {
    return {
      status: 'Ok',
      result: `R$ ${(garafas.result * 3) * 0.9}`
    }
  }
  return lucro(n);
}
// Q11
function imc(p, a) {
  if (typeof (p) != "number" || p < 0
    || typeof (a) != "number" || a < 0) {
    return {
      status: "error",
      error: 'P e A devem ser números positivos'
    }
  }
  return {
    status: 'Ok',
    result: p / a ** 2
  }
}
// Q12
function imc2(p, a) {
  if (typeof (p) != "number" || p < 0
    || typeof (a) != "number" || a < 0) {
    return {
      status: "error",
      error: 'P e A devem ser números positivos'
    }
  }
  var imc = imc(p, a);
  switch (imc) {
    case imc < 17:
      return {
        status: "Ok",
        result: 'Muito abaixo do peso'
      }
    case imc < 18.5:
      return {
        status: 'Ok',
        result: "Abaixo do peso"
      }
    case imc < 25:
      return {
        status: "Ok",
        result: "Peso normal"
      }
    case imc < 30:
      return {
        status: 'Ok',
        result: "Acima do peso"
      }
    case imc < 35:
      return {
        status: 'Ok',
        result: 'Obesidade I'
      }
    case imc < 40:
      return {
        status: "Ok",
        result: 'Obesidade II (severa)'
      }
    default:
      return {
        status: "Ok",
        result: 'Obesidade III (mórbida)'
      }
  }
}

function submeter() {
  var in1 = parseInt(document.getElementById('in1').value)
  var in2 = parseInt(document.getElementById('in2').value)
  var in3 = parseInt(document.getElementById('in3').value)
  var in4 = parseInt(document.getElementById('in4').value)
  var func = document.getElementById('func').value

  switch (func) {
    // case "soma":
    //     var res = soma(in1,in2);
    //     document.getElementById("out").value = res.result
    //     console.log(res)
    //     break;
    case "area quadrado":
      var res = areaQuadrilatero(in1 || in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "area retangulo":
      var res = areaQuadrilatero(in1, in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "perimetro quadrado":
      var res = perimetroQuadrilatero(in1 || in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "perimetro retangulo":
      var res = perimetroQuadrilatero(in1, in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "he quadrado":
      var res = quadradoOuRetangulo(in1, in2, in3, in4);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "galinhas":
      var res = galinhas(in1 || in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "vacas":
      var res = desconto(in1, in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "imc":
      var res = imc(in1, in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    case "imc+":
      var res = imc2(in1, in2);
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
    default:
      var res = { status: "Ok", error: "Não foi encontrado opção compativel" };
      document.getElementById("out").value = res.result || res.error
      console.log(res)
      break;
  }
}
console.log(`Opções: 
area quadrado: lado do quadrado
area retangulo: lados do retangulo
perimetro quadrado: lado do quadrado
perimetro retangulo: lados do retangulo
he quadrado: lados do quadrilatero
galinhas: numero de galinhas
vacas: numero de vacas e quantidade de garrafas compradas
imc: peso e altura
imc+: peso e altura`)