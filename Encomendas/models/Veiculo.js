module.exports = function(sequelize, DataTypes){
  
  var Veiculo = sequelize.define('Veiculo', {
    Tipo: { type: DataTypes.ENUM(
              'Carro',
              'Caminhão',
              'Avião',
              'Navio',
              'Trem',
              'Outro...'
      )}
  });
  Veiculo.associate = function(models){
    Veiculo.belongsTo(models.Posicao);
    Veiculo.hasOne(models.Funcionario);
  };
  
  return Veiculo;
};