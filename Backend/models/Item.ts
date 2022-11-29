module.exports = (sequelize:any, Sequelize:any) => {
  const Item = sequelize.define("Item", {
    item_id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    amount_required: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
  const Order = require(`./../models/Order` )(sequelize, Sequelize);
    Item.belongsTo(Order,{
      foreignKey:'order_id',
      onDelete:'CASCADE'
    })
  

  return Item;
};