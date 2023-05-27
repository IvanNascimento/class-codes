module.exports = function (sequelize, DataTypes){

  var Conteudo = sequelize.define('Conteudo', {
    Nome: {type: DataTypes.STRING, allowNull: false, unique: true},
    Avaliacao: {type: DataTypes.REAL, allowNull: true},
    Descricao: {type: DataTypes.STRING, allowNull: true}
  });

  Conteudo.associate = function (models){
    Conteudo.belongsTo(models.Tipo);
    Conteudo.belongsTo(models.Serie);
    Conteudo.belongsTo(models.Produtor);
    Conteudo.belongsToMany(models.Genero, {
      through: 'ContuedoGenero'
    });
  };

  return Conteudo;
};
