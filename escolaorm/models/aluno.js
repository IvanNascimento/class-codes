module.exports = function(sequelize, DataTypes) {
    var Aluno = sequelize.define('Aluno', {
        matricula: { type: DataTypes.STRING, allowNull: false },
        nome: { type: DataTypes.STRING, allowNull: false }
    })

  Aluno.associate = function(models) {
    Aluno.belongsTo(models.Turma, {
      // Implícito:
      // onDelete: "SET NULL",
      foreignKey: {
        allowNull: false
      }
    });
    Aluno.hasOne(models.Avaliacao)
  };

    return Aluno;
};
