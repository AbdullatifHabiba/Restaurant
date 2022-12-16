import { ICustomerService } from "../core/service/ICustomerService";
import { customerRepo } from "../repository/CustomerRepo"


export class CustomerServices implements ICustomerService {
    adminR_Obj =new customerRepo();
    get_Available_Items()
    {
        return this.adminR_Obj.get_Available_Items();
    }
}