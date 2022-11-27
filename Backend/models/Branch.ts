import { PrimaryKey } from 'sequelize-typescript';

module.exports = (sequelize:any, Sequelize:any) => {
  const Branch = sequelize.define("Branch", {
    branch_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  
  
  return Branch;
};