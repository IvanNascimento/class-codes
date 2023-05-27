$(document).ready( function(){
  const API = 'http://localhost:3000'

  $('#text').each(function(){
    autosize(this);
    console.log('Autorized');
  })

  $("#botao").click(function(){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/enviar',
      data: {
        text: $('#mensagem').value
      }, dataType: 'JSON'
    })
  })

  function conectar() {
    var source = new EventSource(API + '/stream')
    source.addEventListener('message', function(event) {
      console.log(event)
    })
  }

  conectar();
})
