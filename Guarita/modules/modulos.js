exports.registraAcao = function (mensagem){
  console.log(mensagem);
};

exports.respostaPadrao = function (res, sucesso, mensagem, objeto){
  res.json({
    success: sucesso,
    message: mensagem,
    result: objeto
  });
};