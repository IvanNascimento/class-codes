var div = document.getElementById("umaDiv");
var h1 = document.createElement("h1");
var p1 = document.createElement("p");
var p2 = document.createElement("p");

h1.textContent = "Título 1";
p1.textContent = "Parágrafo 1";
p2.textContent = "Parágrafo 2";

div.appendChild(h1);
div.appendChild(p1);
div.appendChild(p2);
