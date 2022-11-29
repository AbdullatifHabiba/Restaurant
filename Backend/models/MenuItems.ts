module.exports = (sequelize:any, Sequelize:any) => {
  const MenuItems = sequelize.define("MenuItems", {
    item_id:{
      type: Sequelize.INTEGER,
    
      allowNull: false,
    },
    available_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image_location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
   
  });
  
  const Item = require(`./../models/Item` )(sequelize, Sequelize);
    MenuItems.hasMany(Item,{
      foreignKey:'item_id',
      onDelete:'CASCADE'
    })
  
  return MenuItems;
};