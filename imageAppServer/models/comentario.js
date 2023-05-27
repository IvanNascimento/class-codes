'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
    text: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    author_name: DataTypes.STRING
  }, {});
  Comentario.associate = function(models) {
    Comentario.belongsTo(models.Image,{
      foreignKey: 'imageId',
      onDelete: 'CASCADE'
    })
  };
  return Comentario;
};
