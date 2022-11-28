
import { DataTypes } from 'sequelize';
import {Sequelize} from 'sequelize-typescript';
import {config} from './config';
const db:any ={}

  let sequelize = new Sequelize({
    'username':config.username,
    'password': config.password,
    'database': config.database,
    'host':config.host,
    'dialect':'mysql',
    'storage':":memory:"
});


 let ad=require("./../models/Admin")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/Branch")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/Customer")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/DeliveryMan")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/DeliveryOrder")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/Item")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/MenuItems")(sequelize,Sequelize)
   db[ad.name]=ad
   ad=require("./../models/Order")(sequelize,Sequelize)
   db[ad.name]=ad
   
   db.sequelize=sequelize
   db.Sequelize=Sequelize
 
 export default db;





