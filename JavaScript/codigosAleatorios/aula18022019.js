// Quantidade, Singular, Plural
var pluralize = function (q, s , p = s+"s") {
  return (q + " " + (q > 1 ? p : s));
}

console.log(pluralize(8, "Usuario"));
