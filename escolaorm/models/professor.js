module.exports = function(sequelize, DataTypes) {

    var professor = sequelize.define('Professor', {
        nome: { type: DataTypes.STRING, allowNull: false },
        matricula: { type: DataTypes.STRING, allowNull: false, unique: true }
    });

    professor.associate = function(models) {
        professor.belongsToMany(models.Turma, {
            through: models.Aula
        });
        professor.hasMany(models.Disciplinas);
    };

    return professor;
};
