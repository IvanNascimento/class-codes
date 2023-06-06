module.exports = function(sequelize, DataTypes) {

    var Turma = sequelize.define('Turma', {
        // Não é necessário definir id. Este já é adicionado por padrão.
        ano: { type: DataTypes.INTEGER, allowNull: false },
        semestre: { type: DataTypes.INTEGER, allowNull: false },
        curso: { type: DataTypes.STRING, allowNull: false }
    });

    // Para especificar um relacionamento entre duas entidades, use associate.
    // Na entidade Aluno, veja a outra parte da definição do relacionamento.
    Turma.associate = function(models) {
        // Define que uma Turma possui muitos Alunos
        Turma.hasMany(models.Aluno);
        Turma.hasMany(models.Disciplina);
        Turma.belongsToMany(models.Professor, {
            through: models.Aula
        });
    };

    return Turma;
};
