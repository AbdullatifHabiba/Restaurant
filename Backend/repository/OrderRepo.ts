
import db from './sequalize';

export class OrderRepo {


  async create_order(customer_id: Number, address: String,payment:String): Promise<any> {
    let item = await db['Order'].findAll({
      where: {
        customer_id: [customer_id],

      }
    });

    let response: any;
    await db['Order'].create({ customer_id: customer_id ,address:address,payment:payment}).then(async (ress: any) => {
      item = JSON.parse(JSON.stringify(ress));
      response = {
        id: item.order_id,
        state: "accepted"
      };
    }).catch((err: any) => {
      response = { state: "can't create order because" + err };
    });
    console.log(response);
    return response;
   
  }

  async get_order(order_id: Number) {
    let item = await db['Order'].findAll({
      where: {
        order_id: [order_id],
      }
    });

    if (JSON.stringify(item).length >= 3) {
      const response = {
        id: item[0].order_id,
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't get order"
      };
      return response;
    }
  }

  async get_order_by_customer(customer_id: Number) {
    let item = await db['Order'].findAll({
      where: {
        customer_id: [customer_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response = {
        id: item,
        state: "accepted"
      };
      return response;
    }
    else {
      const response = {
        state: "can't get order by customer"
      };
      return response;
    }
  }
  async delete_order(order_id: Number) {
    let item = await db['Order'].findAll({
      where: {
        order_id: [order_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      await db['Order'].destroy({
        where: {
          order_id: [order_id],
        }
      });
      const response = {
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't delete order"
      };
      return response;
    }
  }
  async create_order_to_delivery(order_id: Number, delivery_id: Number){
   
      await db['DeliveryOrder'].create({ order_id: order_id, delivery_id: delivery_id ,delivered:false});
      const response = {
        state: "accepted order to delivery"
      };
      return response;
    
    
    
  }
  async assign_order_to_delivery(order_id: Number, delivery_id: Number) {
    let item = await db['DeliveryOrder'].findAll({
      where: {
        order_id: [order_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      await db['DeliveryOrder'].update({ delivery_id: delivery_id }, {
        where: {
          order_id: [order_id],
        }
      });
      await db['Deliveryman'].update({ status: "busy" }, {
        where: {
          delivery_id: [delivery_id],
        }
      });
      const response = {
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't assign order to delivery"
      };
      return response;
    }
  }
  async set_order_status(order_id: Number, delivery_id:Number,status: boolean) {
    let item = await db['DeliveryOrder'].findAll({
      where: {
        order_id: [order_id],
        deliverd_id: [delivery_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      await db['DeliveryOrder'].update({ delivered: status }, {
        where: {
          order_id: [order_id],
        }
      });
      const response = {
        state: "order status set"
      };
      return response;
    } else {
      const response = {
        state: "can't set order status"
      };
      return response;
    }
  }
  async get_order_by_delivery(delivery_id: Number) {
    let item = await db['DeliveryOrder'].findAll({
      where: {
        delivery_id: [delivery_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response = {
        order_id: item[0].order_id,
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't get order by delivery"
      };
      return response;
    }
  }
  async get_delievry_by_order(order_id: Number) {
    let item = await db['DeliveryOrder'].findAll({
      where: {
        order_id: [order_id],
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response = {
        delivery_id: item[0].delivery_id,
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't get delivery by order"
      };
      return response;
    }
  }
  async get_All_orders_not_in_deliveryorder(){
    let item = await db['Order'].findAll(
         {
          include:[{
            model:db['DeliveryOrder'],
            where:{delivery_id:null},
            required:false
          }]
        }
      );
    if (JSON.stringify(item).length >= 3) {
      const response = {
        orders: item,
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't get not assigned orders"
      };
      return response;
    }
  }

  
}