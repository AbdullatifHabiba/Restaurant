module.exports = (sequelize: any, Sequelize: any) => {
    const Payment = sequelize.define("Payment", {
      payment_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
     
    });
    const customer = require(`./../models/Customer`)(sequelize, Sequelize);
    Payment.belongsTo(customer, {
      foreignKey: 'customer_id',
      onDelete: 'CASCADE'
    })
    return Payment;
  };