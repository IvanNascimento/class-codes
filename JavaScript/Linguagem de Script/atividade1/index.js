/**
 * Dado o comprimento da lateral retorna a área do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Área do quadrado
 */
function Q1(lado) {
  return lado * lado;
}

/**
 * Dado o comprimento da lateral retorna o perímetro do quadrado
 * @param {number} lado - Comprimento da lateral
 * @returns Perímetro do quadrado
 */
function Q2(lado) {
  return lado * 4;
}

/**
 * Dado o comprimento e largura retorna o perímetro do retângulo
 * @param {number} comprimento - Comprimento do retângulo
 * @param {number} largura - Largura do retângulo
 * @returns Perímetro do retângulo
 */
function Q3(comprimento, largura) {
  return comprimento * 2 + largura * 2;
}

/**
 * Dado o comprimento e largura retorna a área do retângulo
 * @param {number} comprimento - Comprimento do retângulo
 * @param {number} largura - Largura do retângulo
 * @returns Área do retângulo
 */
function Q4(comprimento, largura) {
  return comprimento * largura;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} galinhas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q5(galinhas) {
  return galinhas * 2 * 4;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q6(vacas) {
  return vacas * 4 * 5;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} x - quantidade de galinhas
 * @param {number} y - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q7(x, y) {
  x += y;
  y = x - y;
  x = x - y;
  return { x: x, y: y };
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q8(vacas) {
  return Math.ceil(Q6(vacas) / 2);
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} vacas - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q9(vacas) {
  return Q8(vacas) * 3.0;
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
  return peso / altura ** 2;
}

/**
 * TODO att descrição
 * Dado o número retorna a área do retângulo
 * @param {number} anterior - quantidade de galinhas
 * @param {number} atual - quantidade de galinhas
 * @returns Área do retângulo
 */
function Q12(anterior, atual) {
  let consumo = atual - anterior;
  const ilu = 15.78;
  var banver = 21.52;
}
