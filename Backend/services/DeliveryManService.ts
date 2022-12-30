import { OrderRepo } from "../repository/OrderRepo"

export class deliverymanservice {

    order_repo = new OrderRepo();

    get_available_orders() {
        return this.order_repo.get_All_orders_not_in_deliveryorder();
    }

    get_customer_details_by_order_id(req: any) {
        return this.order_repo.get_customer_by_order(req.orderid);
    }

    assign_order(req) {
        return this.order_repo.assign_order_to_delivery(req.order_id, req.delivery_id);
    }

    deliver_order(req) {
        return this.order_repo.set_order_status(req.order_id, req.delivery_id, "free");
    }
}