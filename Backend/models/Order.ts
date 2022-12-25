module.exports = (sequelize: any, Sequelize: any) => {
  const Order = sequelize.define("Order", {
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // totol_price: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // }
  });
  const customer = require(`./../models/Customer`)(sequelize, Sequelize);
  Order.belongsTo(customer, {
    foreignKey: 'customer_id',
    onDelete: 'CASCADE'
  })
  return Order;
};