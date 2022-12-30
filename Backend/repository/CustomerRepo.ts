import { MenueRepo } from "../repository/MenueRepo";
import { ICustomerRepo } from '../core/repos/ICustomerRepo';
import db from "./sequalize";
import { IMenueRepo } from "../core/repos/IMenueRepo";

export class customerRepo implements ICustomerRepo {

    menuRepo: IMenueRepo = new MenueRepo();

    async get_Available_Items() {
        return this.menuRepo.GetAllItems();
    }

    async get_customer_details(customer_id: Number) {
        let customer = await db['Customer'].findAll({
            where: {
                customer_id: [customer_id],
            }
        })
        if (JSON.stringify(customer).length >= 3) {
            const response = {
                name: customer[0].name,
                phone: customer[0].phone,
                city: customer[0].city,
                address: customer[0].address,
                email: customer[0].email
            };
            return response;
        }
        else {
            const response = { state: "not found this customer" };
            return response;
        }
    }
}