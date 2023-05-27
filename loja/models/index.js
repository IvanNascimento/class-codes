'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/db.config.json')[env];

const basename = path.basename(__filename);
let sequelize = new Sequelize({ dialect: config.dialect });

const models = sequelize.models
const views = {}

if (config.dialect == "sqlite") {
  try {
    fs.readFileSync(`./db/${env}.sqlite`)
  } catch (e) {
    try {
      fs.mkdirSync('./db')
      fs.writeFileSync(`./db/${env}.sqlite`, '')
    } catch (er) {
      console.log(er);
    }
  }
}

async function ReadDirectory(durl) {
  fs.readdirSync(`${durl}`, { withFileTypes: true })
    .forEach(async file => {
      if (file.isDirectory()) {
        await ReadDirectory(`${durl}/${file.name}`)
      } else if ((file.name.indexOf('.') !== 0) && (file.name !== basename) && (file.name.slice(-3) === '.js')) {
        const model = require(path.join(durl, file.name))(sequelize, DataTypes);
        models[model.name] = model;
      }
    })
  return 'Ok'
}

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
  .readdirSync(__dirname, { withFileTypes: true })
  .forEach(async path_url => {
    if (path_url.isDirectory()) {
      await ReadDirectory(`${__dirname}/${path_url.name}`)
    } else if ((path_url.name.indexOf('.') !== 0) && (path_url.name !== basename) && (path_url.name.slice(-3) === '.js')) {
      const model = require(path.join(__dirname, path_url.name))(sequelize, DataTypes)
      models[model.name] = model;
    }
  })

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

/**
 * Generate generically views, like all the Users
 *
 * *Needs* db sync to work properly
 * @returns Json with View models
 */
async function GenViews() {
  for (let i of Object.keys(models)) {
    if (models[i].view) {
      await models[i].view()
        .then(view => {
          if (view !== 'Ok') {
            views[view.name] = view
          }
        })
    }
  }
  return views
}

module.exports = { db: sequelize, models, GenViews };