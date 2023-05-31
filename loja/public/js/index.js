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

/**
 * @param {String} url
 */
function redirect(url) {
  // console.log(event.value);
  return window.location.replace(`/${url}`);
}
