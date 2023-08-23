function log(string) {
  document.getElementById("saida").textContent = string;
}

function chamei() {
  let cpf = document.getElementById("cpf");

  log("Informe um CPF válido");
}
