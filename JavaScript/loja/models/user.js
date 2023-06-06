const { Sequelize, DataTypes, Model, ModelStatic } = require("sequelize");
const bcrypt = require("bcryptjs");

const { SALT } = require("../constants/constants");

/**
 *
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accessLevel: {
        type: DataTypes.ENUM,
        values: ["1", "2", "3"], // user, manager, admin
        defaultValue: "1",
        allowNull: false,
      },
      allowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "auth_users",
      hooks: {
        beforeCreate: (user, options) => {
          const hashPassword = bcrypt.hashSync(user.password, SALT);
          user.email = user.email.toLowerCase();
          user.password = hashPassword;
        },
        beforeUpdate: (user, options) => {
          const hashPassword = bcrypt.hashSync(user.password, SALT);
          user.email = user.email.toLowerCase();
          user.password = hashPassword;
        },
        beforeBulkCreate: (users, options) => {
          for (let i = 0; i < users.length; i++) {
            let user = users[i];
            const hashPassword = bcrypt.hashSync(user.password, SALT);
            user.email = user.email.toLowerCase();
            user.password = hashPassword;
          }
        },
        beforeBulkUpdate: (users, options) => {
          for (let i = 0; i < users.length; i++) {
            let user = users[i];
            const hashPassword = bcrypt.hashSync(user.password, SALT);
            user.email = user.email.toLowerCase();
            user.password = hashPassword;
          }
        },
      },
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
      scopes: {
        auth: {
          attributes: {
            include: ["password"],
          },
        },
      },
    }
  );

  /**
   *
   * @param {Array<ModelStatic<Model>>} models
   */
  model.associate = (models) => {};

  /**
   * Create a view with all users
   * @returns the sequelize model of the view
   */
  model.view = async () => {
    const query = `SELECT DISTINCT 
    \`auth_users\`.id AS Id, \`auth_users\`.name AS Name, 
    \`auth_users\`.email AS Email, \`auth_users\`.accessLevel as \`Access Level\`, 
    \`auth_users\`.allowed AS Allowed
    FROM \`auth_users\``;

    try {
      await sequelize.query(
        `CREATE OR REPLACE VIEW ${"users_view"} AS ${query}`,
        {
          logging: false,
        }
      );
    } catch (e) {
      console.log(e);
    }
    const tableDescriptions = await sequelize
      .getQueryInterface()
      .describeTable("users_view", { logging: false });
    return sequelize.define("UsersView", tableDescriptions, {
      tableName: "users_view",
      timestamps: false,
    });
  };

  return model;
};
