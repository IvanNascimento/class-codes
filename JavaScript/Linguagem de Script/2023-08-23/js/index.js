function log(string) {
  document.getElementById("saida").textContent += `${string}\n`;
}

function chamei() {
  /**
   * @type String
   */
  let cpf = document.getElementById("cpf").value; // -> 11144477705

  if (cpf.length != 11) {
    log("Informe um CPF válido.");
    return 0;
  }

  let base = cpf.slice(0, 9);

  let soma1 = 0,
    soma2 = 0,
    dig1,
    dig2,
    resto;

  for (let i = 0; i < 9; i++) {
    soma1 += parseInt(cpf[i]) * (10 - i);
  }

  resto = soma1 % 11;
  dig1 = resto < 2 ? 0 : 11 - resto;
  base += dig1;

  for (let i = 0; i < 10; i++) {
    soma2 += parseInt(base[i]) * (11 - i);
  }

  resto = soma2 % 11;
  dig2 = resto < 2 ? 0 : 11 - resto;
  base += dig2;

  out = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  if (base == cpf) {
    log(`O CPF "${out}" é válido.`);
  } else {
    log(`O CPF "${out}" é inválido.`);
  }
}
