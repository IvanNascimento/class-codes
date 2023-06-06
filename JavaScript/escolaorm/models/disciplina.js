module.exports = function(sequelize, DataTypes) {
    var Disciplinas = sequelize.define('Disciplinas', {
        nome: { type: DataTypes.STRING, allowNull: false }
    })

    Disciplinas.associate = function(models){
      Disciplinas.belongsTo(models.professor);
      Disciplinas.hasMany(models.Avaliacao);
    }

    return Aluno;
};
