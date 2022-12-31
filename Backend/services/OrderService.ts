import db from "../repository/sequalize";
import { PaymentRepo } from "../repository/PaymentRepo";
import { OrderRepo } from "../repository/OrderRepo";
import * as paypal from "../services/paypal";
import { OrderItem } from "../repository/OrderItemRepo";

export class OrderService {

  paypal_repo = new PaymentRepo;
  order_repo = new OrderRepo;
  item_repo = new OrderItem;

  async Set_paypal_order(req: any, res: any) {
    paypal.execute_payment(req.query.paymentId, req.query.PayerID)
      .then((accepted: any) => {
        res.status(200).send(accepted.state);
      })
      .catch((rejected) => {
        res.send(rejected);
      });
  }

  async Set_status_of_order(req: any, res: any) {
    const order_id = req.body.order_id;
    const delivery_id = req.body.delivery_id;
    const status = req.body.status;
    await this.order_repo.set_order_status(order_id, delivery_id, status).then((accepted) => {
      res.status(200).send(accepted);
    }).catch((rejected) => {
      res.status(404).send(rejected);
    });
  }

  async order_to_deliveryman(req: any, res: any) {
    const order_id = req.body.order_id;
    const delivery_id = req.body.delivery_id;
    await this.order_repo.add_order_to_delivery(order_id, delivery_id).then((accepted) => {
      res.status(200).send(accepted);
    }).catch((rejected) => {
      res.status(404).send(rejected);
    });
  }

  async change_order_deliveryman(req: any, res: any) {
    const order_id = req.body.order_id;
    const delivery_id = req.body.delivery_id;
    return await this.order_repo.assign_order_to_delivery(order_id, delivery_id).then((accepted) => {
      res.status(200).send(accepted);
    }).catch((rejected) => {
      res.status(404).send(rejected);
    });
  }

  get_order_details(req: any) {
    
    console.log(req.orderid);
    return this.item_repo.get_items(req.orderid);
  }
}