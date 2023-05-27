module.exports = function(sequelize, DataTypes) {

    var aula = sequelize.define('Aula', {
        inicio: { type: DataTypes.TIME, allowNull: false },
        fim: { type: DataTypes.TIME, allowNull: false },
        local: { type: DataTypes.STRING, allowNull: false }
    });

    return aula;
}