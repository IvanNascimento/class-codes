/**
 * Dado o comprimento da lateral retorna a área do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Área do quadrado
 */
function Q1(lado) {
  let result = lado * lado;
  console.log(`Área: ${result}`);
  return result;
}

/**
 * Dado o comprimento da lateral retorna o perímetro do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Perímetro do quadrado
 */
function Q2(lado) {
  let result = lado * 4;
  console.log(`Perímetro: ${result}`);
  return result;
}

/**
 * Dado o comprimento e largura retorna o perímetro do retângulo
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
 * Dado o comprimento e largura retorna a área do retângulo
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
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} galinhas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q5(galinhas) {
  let result = galinhas * 2 * 4;
  console.log(`Dedos: ${result}`);
  return result;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q6(vacas) {
  let result = vacas * 4 * 5;
  console.log(`Litros: ${result}`);
  return result;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} x - quantidade de galinhas
 * @param {number} y - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q7(x, y) {
  console.log(`
  \n ===== Entrada =====
  \n X: ${x}
  \n Y: ${y}
  `);
  x += y;
  y = x - y;
  x = x - y;
  console.log(`
  \n ===== Saída =====
  \n X: ${x}
  \n Y: ${y}
  `);
  return { x: x, y: y };
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q8(vacas) {
  let result = Math.ceil(Q6(vacas) / 2);
  console.log(`Garrafas: ${result}`);
  return result;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q9(vacas) {
  let result = Q8(vacas) * 3.0;
  console.log(`Lucro: ${result.toFixed(2)}`);
  return result;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @param {number} garrafas - quantidade de galinhas
 * @returns Área do retângulo
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
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} peso - quantidade de galinhas
 * @param {number} altura - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q11(peso, altura) {
  let result = peso / altura ** 2;
  console.log(`IMC: ${result}`);
  return result;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} anterior - quantidade de galinhas
 * @param {number} atual - quantidade de galinhas
 * @returns Área do retângulo
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

  console.log(`
  \n Total: R$ ${(consumoP + ilu + vermelha + multa + mora).toFixed(2)}
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
    consumo: consumoP.toFixed(2),
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
