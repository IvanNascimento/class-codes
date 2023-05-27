module.exports = function (sequelize, DataTypes){

  var musica = sequelize.define('Musica', {
    titulo: {type: DataTypes.STRING, unique: 'tituloAutor'},
    duracao: {type: DataTypes.TIME},
    autor: {type: DataTypes.STRING, unique: 'tituloAutor'},
    album: {type: DataTypes.STRING},
    genero: {type: DataTypes.ENUM('rock', 'pop', 'sertanejo', 'funk', 'mpb', 'forro')},
    ano: {type: DataTypes.INTEGER}
  });

  musica.associate = function (models){
    musica.belongsToMany(models.Playlist, {
      through: 'PlaylistMusica'
    });
  };

  return musica;
};
