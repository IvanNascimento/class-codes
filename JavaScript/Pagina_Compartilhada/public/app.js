$(document).ready(function() {
  const API = 'http://localhost:3000'

  function conectar() {
		var source = new EventSource(API + '/stream')

    source.addEventListener('message', function(event) {
      console.log(event)
      update(event.data);
    })
  }

  function update(dados){
    var data = JSON.parse(dados);
    $("#CaixaDeTexto").append(data.nickname+": "+data.text+"\n");
  }

  $("#Enviar").click(function(){
    var obj = {
      "nickname": $("#UserName").val(),
      "text":$("#texto").val()
    }
    $.ajax({
      url: API+'/enviar',
      type: 'post',
      data: obj,
      dataType:'json',
      success: function(data){
        //console.log(data);
      }
    })
  })

  conectar()
})
