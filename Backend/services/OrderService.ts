import db from "../repository/sequalize";
import { PaymentRepo } from "../repository/PaymentRepo";
import { OrderRepo } from "../repository/OrderRepo";
import * as paypal from "../services/paypal";


export class OrderService  {
 
    paypal_repo=new PaymentRepo;
    order_repo=new OrderRepo;
     
    
async Set_paypal_order(req: any, res: any) {
            paypal
            .execute_payment(req.query.paymentId, req.query.PayerID)
            .then((accepted: any) => {
              console.log(accepted.transactions);
              res.status(200).send(accepted.state);
            })
            .catch((rejected) => {
              console.log(rejected);
              res.send(rejected);
            });
    
        }
 async Set_status_of_order(order_id: Number,delivery_id:Number ,status: boolean) {
        return await this.order_repo.set_order_status(order_id,delivery_id,status);
          
}
async order_to_deliveryman(order_id: Number,delivery_id:Number) {
    return await this.order_repo.create_order_to_delivery(order_id,delivery_id);
      
}
async change_order_deliveryman(order_id: Number,delivery_id:Number) {
    return await this.order_repo.create_order_to_delivery(order_id,delivery_id);
      
}

}

    