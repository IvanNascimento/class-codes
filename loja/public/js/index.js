/**
 *
 * @param {{name: string}} event
 */
function cadastrar(values) {
  alert("Cadastrado");
}

document.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);

  console.log(formData);

  cadastrar();
});
