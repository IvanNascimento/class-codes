module.exports = function (sequelize, DataTypes){

  var playlist = sequelize.define('Playlist', {
    titulo: {type: DataTypes.STRING},
    autor: {type: DataTypes.STRING}
  });

  playlist.associate = function (models){
    playlist.belongsToMany(models.Musica, {
      through: 'PlaylistMusica'
    });
  };

  return playlist;
};
