function formatDatetime(date, showDate = true, showTime = true) {
  if(!showDate && !showTime) {
    throw new Error("Exibição inválida");
  }
  if (!showTime) {
    return date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()
  } else if (!showDate) {
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  } else {
    return date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  }
}
function pluralize(numero, singular, plural_irregular = singular+"s") {
  if(numero == 1) {
    return singular;
  }else{
    return plural_irregular;
  }
}
function normalize(palavra) {
  let res = palavra.normalize('NFD');
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  for (i of res) {
    i = i.toLowerCase();
    if (!alfabeto.includes(i)) {
      res = res.replace(i,"");
    }
  }
  return res;
}
function toObject(csv, ...names) {
  let obj = {}
  csv = csv.split(",");
  for(i in csv) {
    obj[names[i]] = csv[i];
  }
  return obj;
}

// let d = new Date();
// console.log(formatDatetime(d));
// console.log(formatDatetime(d, true, false));
// console.log(formatDatetime(d, false, true));
// console.log(formatDatetime(d, false, false));

// let f = pluralize(2, "cabo");
// console.log(f); // imprime: 2 cabos
// let f2 = pluralize(2, "feijão", "feijões");
// console.log(f2); // imprime: 2 feijões
// let f3 = pluralize(1, "pessoa");
// console.log(f3); // imprime: 1 pessoa

// f = normalize("coração");
// console.log(f); // imprime: coracao
// f2 = normalize("feijões");
// console.log(f2); // imprime: feijoes
// f3 = normalize("açaí");
// console.log(f3); // imprime: acai

// f = toObject("Antonio,Dias,11/03/88,Professor", "nome", "sobrenome", "dataNascimento", "cargo");
// f2 = toObject("123123123,Arroz,3.49,1.5", "codigo", "produto", "preco", "peso");
// console.log(f);
// console.log(f2);
