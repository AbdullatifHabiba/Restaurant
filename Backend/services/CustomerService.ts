import { ICustomerService } from "../core/service/ICustomerService";
import { customerRepo } from "../repository/CustomerRepo"
import { OrderRepo } from "../repository/OrderRepo";


export class CustomerServices implements ICustomerService {
    customerRepo = new customerRepo();
    order_repo = new OrderRepo();
    get_Available_Items() {
        return this.customerRepo.get_Available_Items();
    }

    async make_new_order(req: any) {
        let create = this.order_repo.create_order(req.customer_id, req.price);
        create.then((accepted) => {
            if (accepted.state === "accepted") {
                let id: number = accepted.id;
                for (let i = 0; i < req.items.length; i++) {
                    this.order_repo.order_item_repo.create_orderItem(id, req.items[i].id, req.items[i].count, req.items[i].price);
                }
                const response = {
                    id: id,
                    state: "accepted"
                };
                return response;
            } else {
                const response = {
                    state: "can't create order"
                };
                return response;
            }
        }).catch((rejected) => { return rejected });
    }

    edit_order(req: any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }

    delete_order(req: any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }
    async get_customer_details(req: any) {
        return this.customerRepo.get_customer_details(req.customer_id);
    }
}