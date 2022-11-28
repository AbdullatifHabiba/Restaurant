
module.exports = (sequelize:any, Sequelize:any) => {
  const Order = sequelize.define("Order", {
    item_id:{
      type: Sequelize.INTEGER,
    
      allowNull: false,
    },
    customer_id:{
      type: Sequelize.INTEGER,
    
      allowNull: false,
    },
    totsl_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
   
  });
  
  
  return Order;
};