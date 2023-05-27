$(document).ready(function() {
  const API = 'http://10.5.54.204:3000'

  $("#areaChat").submit(function(event){
    var obj = {
      nickname: $("#apelido").val(),
      text: $("#texto").val()
    }
    $.ajax({
      url: API +'/enviar',
      type: ""
    event.preventDeafault()
  })

  function conectar() {
		var source = new EventSource(API + '/stream')

    source.addEventListener('message', function(event) {
      var  mensagem = JSON.parse(event.data)
      $("#mensagens").append("<p>"+ mensagem.nickname + ": " + mensagem.text + "</p>")
    })
  }

  conectar()
})
