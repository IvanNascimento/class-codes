module.exports = function (sequelize, DataTypes){

  var Serie = sequelize.define('Serie', {
    Nome: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  Serie.associate = function (models){
    Serie.hasOne(models.Conteudo);
  };

  return Serie;
};
