module.exports = function(sequelize , DataTypes){
  
  var Produto = sequelize.define('Produto', {
    Nome: {type: DataTypes.STRING, allowNull: false},
    CodigoBarra: {type: DataTypes.STRING, allowNull: false},
    Valor: {type: DataTypes.REAL, allowNull: false},
    CodigoRastreio: {type: DataTypes.STRING, allowNull: false}
  });
  
  Produto.associate = function(models){
    Produto.belongsTo(models.Encomenda);
  };
  
  return Produto;
  
};