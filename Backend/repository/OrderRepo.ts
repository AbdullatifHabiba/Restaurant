
import { OrderItem } from './OrderItemRepo';
import db from './sequalize';

export class OrderRepo {

  order_item_repo: OrderItem;

  async create_order(customer_id: Number, price: Number): Promise<any> {
    let item = await db['Order'].findAll({
      where: {
        customer_id: [customer_id],

      }
    });

    //if (JSON.stringify(item).length < 3) {
      let response:any;
      
      await db['Order'].create({ customer_id: customer_id }).then(async (ress:any) => {
         item=JSON.parse( JSON.stringify(ress));
          response = {
          id: item.order_id,
          state: "accepted"
        };
      }).catch((err:any)=>{
        response = {state: "can't create order because"+err  };
      });
      console.log(response);
      return response;
    // } else {
    //   const response = {
    //     state: "can't create order"
    //   };
    //   return response;
    // }
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
  }
}