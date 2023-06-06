module.exports = function (sequelize, DataTypes){

  var Genero = sequelize.define('Genero', {
    Nome: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  Genero.associate = function (models){
    Genero.belongsToMany(models.Conteudo, {
      through: 'ContuedoGenero'
    });
  };

  return Genero;
};
