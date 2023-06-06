module.exports = function(sequelize, DataTypes){
  
  var Posicao = sequelize.define('Posicao',{
    PosicaoDestino: { type: DataTypes.STRING, allowNull: false},
    PosicaoAtual: {type: DataTypes.STRING, allowNull: false}
    //Data e Hora já vem por padrão ao criar
  });
  
  Posicao.associate = function(models){
    Posicao.hasOne(models.Veiculo);
    Posicao.belongsTo(models.Encomenda);
  };
  
  return Posicao;
};

