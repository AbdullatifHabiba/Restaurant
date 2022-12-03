import { Sequelize } from 'sequelize-typescript';
import { config } from './config';
const db: any = {}

let sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
   'database': config.database,
  'host': config.host,
  'dialect': 'mysql',
  'storage': ":memory:"
});

const fs = require('fs')
const directory = fs.opendirSync('./models')
let file
while ((file = directory.readSync()) !== null) {
  if (file.name.endsWith('.ts')) {
    const model = require(`./../models` + '/' + file.name)(sequelize, Sequelize)
    db[model.name] = model
  }
}

directory.closeSync()
db.sequelize = sequelize
db.Sequelize = Sequelize
export default db;