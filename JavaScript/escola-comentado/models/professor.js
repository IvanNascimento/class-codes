module.exports = function(sequelize, DataTypes) {

    var Professor = sequelize.define('Professor', {
        // Não é necessário definir id. Este já é adicionado por padrão.
        matricula: { type: DataTypes.STRING, allowNull: false },
        nome: { type: DataTypes.STRING, allowNull: false }
    })


    // Para especificar um relacionamento entre duas entidades, use associate.
    // Na entidade Turma, veja a outra parte da definição do relacionamento.
    Professor.associate = function(models) {
        Professor.belongsToMany(models.Turma, {
            through: models.Aula
        });
    }

    return Professor;
};
