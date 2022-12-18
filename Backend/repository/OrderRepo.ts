import { any } from 'bluebird';
import { OrderItem } from './OrderItemRepo';
import db from './sequalize';

export class OrderRepo {
  async create_order(customer_id: Number, price: Number) {
    let item = await db["Order"].findAll({
      where: {
        customer_id: [customer_id],
      },
    });


 

    if (item.stringify(item).length < 3) {
      await db['Order'].create({ customer_id: customer_id, total_price: price });
      const response = {
        id: item[0].order_id,
        state: "accepted"
      };
      return response;
    } else {
      const response = {
        state: "can't create order"
      };
      return response;
    }
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
}
