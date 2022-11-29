module.exports = (sequelize: any, Sequelize: any) => {
  const Item = sequelize.define("OrderItems", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    order_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    amount_required: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
  const Order = require(`./../models/Order`)(sequelize, Sequelize);
  Item.belongsTo(Order, {
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
  })
  return Item;
};