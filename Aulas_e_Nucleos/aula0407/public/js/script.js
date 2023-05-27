$(document).ready(function(){
  $.get("http://localhost:3000/cidades/Picuí",function(data){
    var clima = data.Previsao
    for(var i of clima){
      $(".resultado").append("<h1>"+i.temp+"</h1>")
      $(".resultado").append("<h1>"+i.ventoVel+"</h1>")
      $(".resultado").append("<h1>"+i.ventoDir+"</h1>")
      $(".resultado").append("<h1>"+i.sencacao+"</h1>")
    }
  })
});
