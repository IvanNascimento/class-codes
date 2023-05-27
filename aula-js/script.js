var f  = document.getElementById("form");
var i = document.getElementById("input");
var l = document.getElementById("lista")
var limpar = document.getElementById("limpar")
var setText = function(texto){
  i.value = texto;
}

var getText = function(){
  return i.value;
}

limpar.onclick = function(){
  setText(" ");
}

f.onsubmit = function(e){
  if(getText.trim() !== ""){
    var div = document.createElement("div");
    div.className = "list-group-item";
    div.textContent = getText();
    setText("");
    l.append(div);
  }setText("");
  e.preventDefault();
}
