$(document).ready(function(){
  var user,password;
  $("#Enviado").click(function(){
    user=$("#user").val();
    password=$("#password").val();
    $.post("http://localhost:3000/login",{user: user,password: password}, function(data){
      document.getElementById("Resultado1").innerHTML = "<b>"+data.sucesso+"</b>"
      document.getElementById("Resultado2").innerHTML = "<b>"+data.mensagem+"</b>"
    });
  });
});
