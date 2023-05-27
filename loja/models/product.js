const currencies = require('../config/currencies.json')

let currencyList = Object.keys(currencies)

const { Sequelize, DataTypes, Model, ModelStatic } = require("sequelize")

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING, // Forno a lenha
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT, // R$ 9,99
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(3), // BRL, US
      validate: {
        isIn: [currencyList]
      },
      allowNull: false,
      defaultValue: "BRL"
    },
    description: {
      type: DataTypes.STRING, // super hyper mega blaster
      allowNull: false
    },
    img: {
      type: DataTypes.BLOB // file
    },
    imgUrl: {
      type: DataTypes.STRING, // url
      validate: {
        isUrl: true
      }
    },
    tags: {
      type: DataTypes.STRING, // Eletronico;Smart;Fogão;
      allowNull: false
    }
  }, {
    tableName: 'products'
  })

  /**
   * 
   * @param {{[key: string] : ModelStatic<Model>}} models
   */
  model.associate = (models) => {
    model.belongsToMany(models['Transaction'], {
      through: 'transactions_products',
      foreignKey: {
        allowNull: false,
        name: 'ProductId',
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