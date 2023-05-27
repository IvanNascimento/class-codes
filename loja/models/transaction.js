const { Sequelize, DataTypes, Model, ModelStatic } = require("sequelize")

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Transaction', {
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }, status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['1', '2', '3', '4', '5'],
      defaultValue: '1',
      comment: '1 - Pending, 2 - Paid, 3 - Canceled, 4 - Authorized, 5 - Expired'
    }, method: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['1', '2', '3'], // 1 = Pix, 2 = Boleto
      comment: '1 - Pix, 2 - Boleto, 3 - Cartão',
      defaultValue: '1'
    }
  }, {
    tableName: 'transactions'
  })

  /**
   * 
   * @param {{ [key: string] : ModelStatic<Model}} models
   */
  model.associate = (models) => {
    model.belongsTo(models['User'], {
      foreignKey: {
        name: 'UserId',
        allowNull: false
      }
    })
    model.belongsToMany(models['Product'], {
      through: 'transactions_products',
      foreignKey: {
        allowNull: false,
        field: 'TransactionId'
      }
    })
  }

  /**
   * Create a view with all users
   * @returns the sequelize model of the view
   */
  model.view = async () => {
  }

  return model
}