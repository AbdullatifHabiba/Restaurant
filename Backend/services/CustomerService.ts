import { ICustomerService } from "../core/service/ICustomerService";
import { customerRepo } from "../repository/CustomerRepo"


export class CustomerServices implements ICustomerService {
    customerRepo = new customerRepo();
    get_Available_Items() {
        return this.customerRepo.get_Available_Items();
    }

    make_new_order(req:any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }

    edit_order (req:any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }

    delete_order (req:any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }
}