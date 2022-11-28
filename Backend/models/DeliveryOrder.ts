
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
  
  
  return DeliveryOrder;
};