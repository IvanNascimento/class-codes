module.exports = function(sequelize, DataTypes) {

  var Funcionario = sequelize.define('Funcionario', {
    Nome: { type: DataTypes.STRING, allowNull: false},
    Sobrenome: { type: DataTypes.STRING, allowNull: false},
    CPF: { type: DataTypes.STRING, allowNull: false},
    Telefone: { type: DataTypes.STRING, allowNull: false},
    Email: { type: DataTypes.STRING, allowNull: false},
    Sexo: { type: DataTypes.STRING, allowNull: false},
    Estado: { type: DataTypes.STRING, allowNull: false},
    CEP: { type: DataTypes.STRING, allowNull: false},
    Cidade: {type: DataTypes.STRING, allowNull: false},
    Bairro: {type: DataTypes.STRING, allowNull: false},
    Complemento: {type: DataTypes.STRING, allowNull: true},
    NumeroResidencia: {type: DataTypes.STRING, allowNull: false}
  });

 Funcionario.associate = function(models) {
    Funcionario.belongsTo(models.Veiculo);
  };

  return Funcionario;
};
