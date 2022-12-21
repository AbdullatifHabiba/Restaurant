import { MenueRepo } from "../repository/MenueRepo";
import { IAdminRepo } from '../core/repos/IAdminRepo';

export class AdminRepo implements IAdminRepo {

    menuRepo = new MenueRepo();

    getALL() {
        return this.menuRepo.GetAllItems();
    }

}