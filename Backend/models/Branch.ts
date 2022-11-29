
module.exports = (sequelize:any, Sequelize:any) => {
  const Branch = sequelize.define("Branch", {
    Branch_id: {
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
    Admin_id: {
      type: Sequelize.INTEGER
    }
  });
  const Admin = require(`./../models/Admin` )(sequelize, Sequelize);

  Branch .belongsTo(Admin,{
    foreignKey:'Admin_id',
    onDelete:'CASCADE'
  })
  
  
  return Branch;
};