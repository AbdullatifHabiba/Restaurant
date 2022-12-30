import { OrderRepo } from "../repository/OrderRepo"

export class deliverymanservice {

    order_repo = new OrderRepo();

    get_all_orders() {
        return this.order_repo.get_All_orders_not_in_deliveryorder();
    }

}