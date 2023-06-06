module.exports = function(sequelize, DataTypes) {

    var Disciplina = sequelize.define('Disciplina', {
        // Não é necessário definir id. Este já é adicionado por padrão.
        nome: { type: DataTypes.STRING, allowNull: false },
        creditos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
    })


    // Para especificar um relacionamento entre duas entidades, use associate.
    // Na entidade Turma, veja a outra parte da definição do relacionamento.
    Disciplina.associate = function(models) {
        Disciplina.belongsTo(models.Turma, {
            // onDelete especifica a ação a ser tomada após a entidade ser removida:
            // Em uma relação 1:N, se o lado 1, for removido:
            // -CASCADE: as N entidades também serão removidas
            // -NO ACTION: nada é feito
            // -SET DEFAULT: as N entidades terão a chave estrangeira definida como o valor padrão (default)
            // -SET NULL: as N entidades terão a chave estrangeira definida como null
            //
            // Em relacionamentos 1:N, a opção padrão é SET NULL.
            onDelete: "SET NULL",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Disciplina;
};