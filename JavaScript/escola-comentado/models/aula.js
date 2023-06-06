module.exports = function(sequelize, DataTypes) {

    var Aula = sequelize.define('Aula', {
        // Aqui, será necessário forçar a criação de uma chave primária
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        inicio: { type: DataTypes.TIME, allowNull: false },
        fim: { type: DataTypes.TIME, allowNull: false },
        local: { type: DataTypes.STRING, allowNull: false }
    })

    return Aula;
};
