$(document).ready(function(){
  $("#ok").click(function(){
      $("#div1").html($("#input").val());
  });
  $("#color").click(function(){
    $("#div1").css("color",$("#input").val());
  });
});
