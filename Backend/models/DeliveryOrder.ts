
module.exports = (sequelize:any, Sequelize:any) => {
  const DeliveryOrder = sequelize.define("DeliveryOrder", {
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    deliverd_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    delivered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    
  });
  const Deliveryman = require(`./../models/Deliveryman` )(sequelize, Sequelize);
  const Order = require(`./../models/Order` )(sequelize, Sequelize);


    DeliveryOrder.belongsTo(Order,{
      foreignKey:'order_id',
      onDelete:'CASCADE'
    })
    DeliveryOrder.belongsTo(Deliveryman,{
      foreignKey:'deliverd_id',
      onDelete:'CASCADE'
    })
  
  return DeliveryOrder;
};