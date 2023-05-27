module.exports = function(sequelize, DataTypes) {

    var turma = sequelize.define('Turma', {
        ano: { type: DataTypes.INTEGER, allowNull: false },
        semestre: { type: DataTypes.INTEGER, allowNull: false },
        curso: { type: DataTypes.STRING, allowNull: false }
    });

    turma.associate = function(models) {
        // Define que uma Turma possui muitos Alunos
        turma.hasMany(models.Aluno);
        turma.belongsToMany(models.Professor, {
            through: models.Aula
        });
    };

    return turma;
}