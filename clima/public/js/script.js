$(document).ready(function() {
    $.get("http://localhost:3000/clima/Picuí", function(data) {
      console.log("Dados brutos (clique na setinha para abrir):")
      console.log(data)
      console.log("=============")
      console.log("Atributos:")
      console.log("Situação: " + data.situacao)
      console.log("Mensagem: " + data.mensagem)
      console.log("Cidade: " + data.cidade)
    });
    $("#ok").click(function() {
        var conteudo = $("#i1").val()
        $('#p1').html(conteudo)
    })
})
