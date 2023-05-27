module.exports = function (sequelize, DataTypes){

  var Produtor = sequelize.define('Produtor', {
    Nome: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  Produtor.associate = function (models){
    Produtor.hasOne(models.Conteudo);
  };

  return Produtor;
};
