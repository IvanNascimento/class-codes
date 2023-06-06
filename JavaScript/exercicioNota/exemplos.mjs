import { formatDatetime } from "./formatDatetime.mjs";
import { toObject } from "./toObject.mjs";
import { normalize } from "./normalize.mjs";
import { pluralize } from "./pluralize.mjs";

let d1 = new Date(); // hora atual
let f = formatDatetime(d1);
console.log(f); // imprime: 07/05/2019 09:17:32

let f2 = formatDatetime(d1, true, false);
console.log(f2); // imprime: 07/05/2019

let f3 = formatDatetime(d1, false, true);
console.log(f3); // imprime: 09:17:32

// let f4 = formatDatetime(d1, false, false); // deve lançar erro: Exibição inválida.

f = pluralize(2, "cabo");
console.log(f); // imprime: 2 cabos

f2 = pluralize(2, "feijão", "feijões");
console.log(f2); // imprime: 2 feijões

f3 = pluralize(1, "pessoa");
console.log(f3); // imprime: 1 pessoa

f = normalize("coração");
console.log(f); // imprime: coracao

f2 = normalize("feijões");
console.log(f2); // imprime: feijoes

f3 = normalize("açaí");
console.log(f3); // imprime: acai

f = toObject("Antonio,Dias,11/03/88,Professor", "nome", "sobrenome", "dataNascimento", "cargo");
console.log(f);
/* Retorna o objeto:
  {
    nome: "Antonio",
    sobrenome: "Dias",
    dataNascimento: "11/03/1988",
    cargo: "Professor"
  }
*/

f2 = toObject("123123123,Arroz,3.49,1.5", "codigo", "produto", "preco", "peso");
console.log(f2);
/* Retorna o objeto:
  {
    codigo: "123123123",
    produto: "Arroz",
    preco: "3.49",
    peso: "1.5"
  }
*/
