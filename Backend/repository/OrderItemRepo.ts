import db from './sequalize';

export class OrderItem {

  async create_orderItem(order_id: Number, item_id: Number, amount: Number, price: Number) {

    let item = await db['OrderItems'].findAll({
      where: {
        order_id: [order_id],
        item_id: [item_id]
      }
    });

    if (JSON.stringify(item).length < 3) {
      await db['OrderItems'].create({ order_id: order_id, item_id: item_id, amount: amount, price: price });
      return "item added correctly";
    } else {
      return "item already exist";
    }
  }
  
}
