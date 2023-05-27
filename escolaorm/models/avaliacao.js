module.exports = function(sequelize, DataTypes) {

    var Avaliacao = sequelize.define('Avaliacao', {
      nota: {type: DataTypes.REAL, allowNull: false}
    });

    Avaliacao.associate = function(models) {
      Avaliacao.belongsTo(models.Aluno);
      Avaliacao.belongsTo(models.Disciplinas);
    };

    return professor;
};
