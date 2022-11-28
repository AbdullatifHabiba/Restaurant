module.exports = (sequelize:any, Sequelize:any) => {
  const Item = sequelize.define("Item", {
    item_id:{
      type: Sequelize.INTEGER,
      PrimaryKey:true,
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
  
  
  return Item;
};