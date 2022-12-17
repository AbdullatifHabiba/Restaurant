import { MenueRepo } from "../repository/MenueRepo";
import { ICustomerRepo } from '../core/repos/ICustomerRepo';

export class customerRepo implements ICustomerRepo {

    menuRepo = new MenueRepo();

    async get_Available_Items() {
        return this.menuRepo.GetAllItems();
    }

    

}