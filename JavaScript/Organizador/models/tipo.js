module.exports = function (sequelize, DataTypes){

  var Tipo = sequelize.define('Tipo', {
    Nome: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  Tipo.associate = function (models){
    Tipo.hasOne(models.Conteudo);
  };

  return Tipo;
};
