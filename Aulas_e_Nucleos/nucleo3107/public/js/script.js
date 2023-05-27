$(document).ready(function(){
  function SetDefaul(){
    document.getElementById('Unidade').value="#";
    $("#Unidade").html("<option value=\"#\">Selecione uma unidade</option>")
  }
  function SelecionaUnidades(Medida){
    if (Medida == "Temperatura"){
      $("#Unidade").append("<option value=\"C\">C (Celsius)</option>")
      $("#Unidade").append("<option value=\"F\">F (Fahrenheit)</option>")
      $("#Unidade").append("<option value=\"K\">K (Kelvin)</option>")
    }
    else if (Medida == "Massa"){
      $("#Unidade").append("<option value=\"mg\">mg (Miligrama)</option>")
      $("#Unidade").append("<option value=\"g\">g (Grama)</option>")
      $("#Unidade").append("<option value=\"kg\">kg (Quilograma)</option>")
      $("#Unidade").append("<option value=\"lb\">lb (Libra)</option>")
      $("#Unidade").append("<option value=\"oz\">oz (Onça)</option>")
    }
    else if (Medida == "Comprimento"){
      $("#Unidade").append("<option value=\"cm\">cm (Centímetro)</option>")
      $("#Unidade").append("<option value=\"pol\">pol (Polegada)</option>")
      $("#Unidade").append("<option value=\"m\">m (Metro)</option>")
      $("#Unidade").append("<option value=\"km\">km (Quilômetro)</option>")
      $("#Unidade").append("<option value=\"mi\">mi (Milha)</option>")
    }
    else if (Medida == "Volume"){
      $("#Unidade").append("<option value=\"ml\">ml (Mililitro)</option>")
      $("#Unidade").append("<option value=\"l\">l (Litro)</option>")
      $("#Unidade").append("<option value=\"gal\">gal (Galão)</option>")
    }
    else if (Medida == "InformacaoDigital"){
      $("#Unidade").append("<option value=\"bit\">bit (Bit)</option>")
      $("#Unidade").append("<option value=\"b\">b (Byte)</option>")
      $("#Unidade").append("<option value=\"kb\">kb (Kilobyte)</option>")
      $("#Unidade").append("<option value=\"mb\">mb (Megabyte)</option>")
      $("#Unidade").append("<option value=\"gb\">gb (Gigabyte)</option>")
    }
  }
  $("#Medida").change(function(){
    SetDefaul()
    SelecionaUnidades($("#Medida").val())
  })
  $("#Enviar").click(function(){
    $("#resultado").html("")
    if ($("#Unidade").val() != "#"){
      if ($("#Valor").val() != ""){
        var url = "http://10.5.54.204:3000/conversor/t/"+$("#Unidade").val()+"/"+$("#Valor").val()
        $.get(url,function(database){
            for(i in database){
              if($("#Valor").val() != 0){
                $("#resultado").append(i+" : "+database[i]+"<br>")
              }
            }
        })
    }else{
      $("#resultado").html("Insira um valor")
    }
  }else {
    $("#resultado").html("Selecione uma unidade")
  }
  })
})
