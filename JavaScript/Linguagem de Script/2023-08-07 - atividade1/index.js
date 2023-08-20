/**
 * Dado o comprimento da lateral, retorna a área do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Área do quadrado
 */
function Q1(lado) {
  let result = lado * lado;
  console.log(`Área: ${result}`);
  return result;
}

/**
 * Dado o comprimento da lateral, retorna o perímetro do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Perímetro do quadrado
 */
function Q2(lado) {
  let result = lado * 4;
  console.log(`Perímetro: ${result}`);
  return result;
}

/**
 * Dado o comprimento e largura, retorna o perímetro do retângulo
 * @param {number} comprimento - Comprimento do retângulo
 * @param {number} largura - Largura do retângulo
 * @returns Perímetro do retângulo
 */
function Q3(comprimento, largura) {
  let result = comprimento * 2 + largura * 2;
  console.log(`Perímetro: ${result}`);
  return result;
}

/**
 * Dado o comprimento e largura, retorna a área do retângulo
 * @param {number} comprimento - Comprimento do retângulo
 * @param {number} largura - Largura do retângulo
 * @returns Área do retângulo
 */
function Q4(comprimento, largura) {
  let result = comprimento * largura;
  console.log(`Área: ${result}`);
  return result;
}

/**
 * Dado o número de galinhas, retorna a quantidade de dedos
 * @param {number} galinhas - quantidade de galinhas
 * @returns Quantidade de dedos
 */
function Q5(galinhas) {
  let result = galinhas * 2 * 4;
  console.log(`Dedos: ${result}`);
  return result;
}

/**
 * Dado o número de vacas, retorna a quantidade de leite
 * @param {number} vacas - quantidade de galinhas
 * @returns Leite diário
 */
function Q6(vacas) {
  let result = vacas * 4 * 5;
  console.log(`Litros: ${result}`);
  return result;
}

/**
 * Troca a valor de duas variáveis
 * @param {number} x - variável X
 * @param {number} y - variável Y
 * @returns Um Json com as variáveis trocadas
 */
function Q7(x, y) {
  x += y;
  y = x - y;
  x = x - y;
  console.log(`
  \n X: ${x}
  \n Y: ${y}
  `);
  return { x: x, y: y };
}

/**
 * Dado a quantidade de vacas, retorna a quantidade de garrafas necessárias todos os dias
 * @param {number} vacas - quantidade de vacas
 * @returns Quantidade de garrafas
 */
function Q8(vacas) {
  let result = Math.ceil(Q6(vacas) / 2);
  console.log(`Garrafas: ${result}`);
  return result;
}

/**
 * Dado a quantidade de vacas, retorna a receita da venda de garrafas
 * @param {number} vacas - quantidade de vacas
 * @returns Receita obtida
 */
function Q9(vacas) {
  let result = Q8(vacas) * 3.0;
  console.log(`Receita: ${result.toFixed(2)}`);
  return result;
}

/**
 * Dado a quantidade de vacas, retorna a receita da venda de garrafas
 * Se a qunatidade de garrafas compradas for maior que 10, retorna a receita com desconto
 * @param {number} vacas - quantidade de vacas
 * @param {number} garrafas - quantidade de garrafas
 * @returns Receita obtida
 */
function Q10(vacas, garrafas) {
  let lucro = Q9(vacas);
  if (garrafas > 10) {
    console.log(`Lucro (10% off): ${lucro.toFixed(2)}`);
    return lucro * 0.9;
  }
  return lucro;
}

/**
 * Dados peso e altura, retorna o IMC do paciente
 * @param {number} peso - peso do paciente
 * @param {number} altura - altura do paciente
 * @returns IMC do paciente
 */
function Q11(peso, altura) {
  let result = peso / altura ** 2;
  console.log(`IMC: ${result.toFixed(3)}`);
  return result;
}

/**
 * Dadas as leituras de kWh, retorna os dados da conta de energia
 * @param {number} anterior - kWh da leitura anterior
 * @param {number} atual - kWh da leitura atual
 * @returns Valores da conta de luz
 */
function Q12(anterior, atual) {
  const ilu = 15.78;
  const precokwh = 0.80998;
  const vermelha = 21.52;
  const icmsper = 0.27;
  const pisper = 0.009912;
  const cofinsper = 0.045657;

  let multa = 6.52;
  let mora = 0.65;
  // const amarela = 10.25;

  let consumo = atual - anterior;
  let consumoP = consumo * precokwh;

  console.log(` Total: R$ ${(consumoP + ilu + vermelha + multa + mora).toFixed(
    2
  )}
  \n Consumo Elétrico: ${consumo} kWh
  \n Consumo: R$ ${consumoP.toFixed(2)}
  \n Bandeira Vermelha: R$ ${vermelha.toFixed(2)} 
  \n Iluminação Pública: R$ ${ilu.toFixed(2)}
  \n Juros de Mora: R$ ${mora.toFixed(2)}
  \n Multa: R$ ${multa.toFixed(2)}
  \n ===== ICMS =====
  \n Consumo: R$ ${(consumoP * icmsper).toFixed(2)}
  \n Bandeira: R$ ${(vermelha * icmsper).toFixed(2)}
  \n ===== PIS =====
  \n Consumo: R$ ${(consumoP * pisper).toFixed(2)}
  \n Bandeira: R$ ${(vermelha * pisper).toFixed(2)}
  \n ===== COFINS =====
  \n Consumo: R$ ${(consumoP * cofinsper).toFixed(2)}
  \n Bandeira: R$ ${(vermelha * cofinsper).toFixed(2)}`);

  return {
    total: (consumoP + ilu + vermelha + multa + mora).toFixed(2),
    consumo: consumo,
    consumoP: consumoP.toFixed(2),
    bandeira: vermelha.toFixed(2),
    iluminacao: ilu.toFixed(2),
    juros: mora.toFixed(2),
    multa: multa.toFixed(2),
    icms: {
      consumo: (consumoP * icmsper).toFixed(2),
      bandeira: (vermelha * icmsper).toFixed(2),
    },
    pis: {
      consumo: (consumoP * pisper).toFixed(2),
      bandeira: (vermelha * pisper).toFixed(2),
    },
    cofins: {
      consumo: (consumoP * cofinsper).toFixed(2),
      bandeira: (vermelha * cofinsper).toFixed(2),
    },
  };
}

module.exports = { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12 };
