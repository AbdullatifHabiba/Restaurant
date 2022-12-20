import { MenueRepo } from "../repository/MenueRepo";
import { ICustomerRepo } from '../core/repos/ICustomerRepo';
import db from "./sequalize";

export class customerRepo implements ICustomerRepo {

    menuRepo = new MenueRepo();

    async get_Available_Items() {
        return this.menuRepo.GetAllItems();
    }

    
async get_customer_details(customer_id:Number){
    let customer = await db['Customer'].findAll({
        
        where:{
            id:[customer_id]
        }

    })
    if (JSON.stringify(customer).length >= 3) {
        const response = {
          name: customer.name,
          phone: customer.phone,
         city: customer.city,
         address: customer.address
        };

        return response;
      }
      else {
        const response = { state: "not found this customer" };
        return response;
      }
     

}
}