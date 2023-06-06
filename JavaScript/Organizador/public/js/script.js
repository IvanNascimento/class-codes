var mudar,
  atualizar,
  mostrarObjeto,
  mostrarGenerico,
  mostraLista,
  limpar,
  ObjetoMandar,
  GenericoMandar,
  aberta,
  mandar;

var Fechadas = {
  "allObject": true,
  "allSeries": true,
  "allGeneros": true,
  "allTipos": true,
  "allProdutores": true,
  "newObject": true,
  "newGenre": true,
  "newType": true,
  "newProducer": true,
  "newSeries": true
};

$(document).ready(function (){
  var ID = '192.168.1.100';
limpar = function (Id){
    $("#" + Id).html("");
  };

  mudar = function (id){
    if(id !== aberta){
      $('#' + aberta).hide();
      Fechadas[aberta] = true;
    }
    if(Fechadas[id] === true){
      $('#' + id).show();
      Fechadas[id] = false;
      aberta = id;
    }
    else{
      $('#' + id).hide();
      Fechadas[id] = true;
    }
  };

  mostraLista = function (Id, Id2, Nome){
    var div = `<option value="` + Id2 + `"> ` + Nome + ` </option>`;
    $("#" + Id).append(div);
  };

  mostrarObjeto = function (Id, Id2, idO, idO2, Nome, Produtor, Serie, Generos, Avaliacao, Descricao){
    var div = `
      <ul class="li">
        <li data-toggle="collapse" data-target="#` + idO + `" class="collapsed active selected">
          <a><i class="fa fa-bars" aria-hidden="true"></i>` + Nome + `<span class="arrow"></span></a>
        </li>
        <ul class="sub-menu collapse" id="` + idO + `">
          <li>Nome: ` + Nome + `</li>
          <li>Avaliação: ` + Avaliacao + `</li>
          <li>Descrição: ` + Descricao + `</li>
          <li>Produtor: ` + Produtor + `</li>
          <li>Serie: ` + Serie + `</li>
          <li data-toggle="collapse" data-target="#-` + idO2 + `" class="micro-menu active selected collapsed">
            <a>Generos<span class="arrow"></span></a>
          </li>
          <ul class="sub-menu collapse" id="-` + idO2 + `">`;
    for(i in Generos){
      var i = Generos[i];
      div += `<li>` + i["Nome"] + `</li>`;
    }
    ;
    if(Generos.length === 0){
      div += `<li> Generos não especificados </li>`;
    }
    div += `
          </ul>
        </ul>
      </ul>
      `;
    $("#" + Id).append(div);
  };

  mostrarGenerico = function (Id, Id2, Nome){
    var div = `
      <ul>
        <ul class="sub-menu li">
        <li>` + Nome + `</li>
      </ul>
      `;
    $("#" + Id).append(div);
  };

  atualizar = function (id, id2, forma, extencao){
    limpar(id);
    if(forma === "ObterObjeto"){
      $.ajax({
        method: 'get',
        url: 'http://' + ID + ':9000/object/all',
        data: undefined,
        success: function (result){
          if(result["success"] === true){
            for(i in result["result"]){
              var i = result["result"][i];
              mostrarObjeto(id, id2, i["id"], i["id"], i["Nome"], i["Produtor"]["Nome"], i["Serie"]["Nome"], i["Generos"], i["Avaliacao"], i["Descricao"]);
            }
          }
        },
        error: function (error){
          console.log(error);
        }
      });
    }
    else if(forma === "ObterGenerico"){
      $.ajax({
        method: 'get',
        url: 'http://' + ID + ':9000/' + extencao + '/all',
        data: undefined,
        success: function (result){
          if(result["success"] === true){
            for(i in result["result"]){
              var i = result["result"][i];
              mostrarGenerico(id, id2, i["Nome"]);
            }
          }
        },
        error: function (error){
          console.log(error);
        }
      });
    }
    else if(forma === "Listar"){
      $.ajax({
        method: 'get',
        url: 'http://' + ID + ':9000/' + extencao + '/all',
        data: undefined,
        success: function (result){
          if(result["success"] === true){
            for(i in result["result"]){
              var i = result["result"][i];
              mostraLista(id, i["id"], i["Nome"]);
            }
            $('#' + id).multipleSelect('refresh');
          }
        },
        error: function (error){
          console.log(error);
        }
      });
    }
  };

  ObjetoMandar = function (){
    var nome = $('#name').val(),
      descricao = $('#descricao').val(),
      avaliacao = $('#avaliacao').val(),
      produtor = $('#produtor').val(),
      serie = $('#serie').val(),
      tipo = $('#serie').val(),
      generos = $('#generos').val();
    $('#name').val("");
    $('#descricao').val("");
    $('#avaliacao').val("");
    $('#VA').val("5");
    $('#produtor').val("");
    $('#serie').val("");
    $('#tipo').val("");
    $('#generos').val("");
    var objeto = {
      "Nome": nome,
      "Descricao": descricao,
      "Avaliacao": avaliacao,
      "ProdutorId": produtor,
      "SerieId": serie,
      "TipoId": tipo
    };
    $.ajax({
      method: 'post',
      url: 'http://' + ID + ':9000/object/add',
      data: objeto,
      dataType: 'json',
      success: function (result){
        console.log(result);
      },
      error: function (error){
        console.log(error);
      }
    });
  };

  GenericoMandar = function (extencao, method){
    var nome = $('#name' + extencao).val();
    $('#name' + extencao).val("");
    $.ajax({
      method: 'post',
      url: 'http://' + ID + ':9000/' + method + '/add',
      data: {
        Nome: nome
      },
      dataType: 'json',
      success: function (result){
        console.log(result);
      },
      error: function (error){
        console.log(error);
      }
    });
  };

  $('#AObject').click(function (){
    atualizar('TodosObject', 'allObject', 'ObterObjeto', '');
    mudar('allObject');
  });
  $('#AGenero').click(function (){
    atualizar('TodosGeneros', 'allGeneros', 'ObterGenerico', 'genre');
    mudar('allGeneros');
  });
  $('#ATipo').click(function (){
    atualizar("TodosTipos", "allTipos", "ObterGenerico", "type");
    mudar('allTipos');
  });
  $('#AProdutora').click(function (){
    atualizar("TodosProdutores", "allProdutores", "ObterGenerico", "producer");
    mudar('allProdutores');
  });
  $('#ASerie').click(function (){
    atualizar("TodosSeries", "allSeries", "ObterGenerico", "series");
    mudar('allSeries');
  });
  $('#AddObject').click(function (){
    mudar('newObject');
    atualizar('generos', '', 'Listar', 'genre');
    atualizar('serie', '', 'Listar', 'series');
    atualizar('produtor', '', 'Listar', 'producer');
    atualizar('tipo', '', 'Listar', 'type');
  });
  $('#Ok').click(function (){
    ObjetoMandar();
  });
  $('#avaliacao').change(function (){
    $('#VA').html($('#avaliacao').val());
  });
  $('#AddGenero').click(function (){
    mudar('newGenre');
  });
  $('#OkG').click(function (){
    GenericoMandar('G', 'genre');
  });
  $('#AddTipo').click(function (){
    mudar('newType');
  });
  $('#OkT').click(function (){
    GenericoMandar('T', 'type');
  });
  $('#AddProdutora').click(function (){
    mudar('newProducer');
  });
  $('#OkP').click(function (){
    GenericoMandar('P', 'producer');
  });
  $('#AddSerie').click(function (){
    mudar('newSeries');
  });
  $('#OkS').click(function (){
    GenericoMandar('S', 'series');
  });

  $("#generos").multipleSelect({
    filter: true,
    width: '100%',
    position: 'top',
    maxHeight: 100,
    placeholder: 'Selecione os Generos',
    multiple: true
  });
  $("#serie").multipleSelect({
    filter: true,
    width: '100%',
    position: 'top',
    maxHeight: 100,
    single: true,
    placeholder: 'Selecione a serie'
  });
  $("#produtor").multipleSelect({
    filter: true,
    width: '100%',
    position: 'top',
    maxHeight: 100,
    single: true,
    placeholder: 'Selecione o produtor'
  });
  $("#tipo").multipleSelect({
    filter: true,
    width: '100%',
    position: 'top',
    maxHeight: 100,
    single: true,
    placeholder: 'Selecione o Tipo'
  });
});
