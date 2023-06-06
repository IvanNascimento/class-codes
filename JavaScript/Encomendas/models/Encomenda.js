module.exports = function(sequelize, DataTypes){
  
  var Encomenda = sequelize.define('Encomenda', {
    CodigoRastreio: {type: DataTypes.STRING, allowNUll: false}
  });
  
  Encomenda.associate = function(models){
    Encomenda.hasOne(models.Cliente);
    Encomenda.hasMany(models.Produto);
    Encomenda.hasMany(models.Posicao);
  };
  
  return Encomenda;
  
};
