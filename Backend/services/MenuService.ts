import { IMenueRepo } from "../core/repos/IMenueRepo";
import { IMenueService } from "../core/service/IMenuService";
import { MenueRepo } from "../repository/MenueRepo"

export class menuserice implements IMenueService {

    menuRepo: IMenueRepo = new MenueRepo();

    getAll() {
        return this.menuRepo.GetAllItems();
    }

    get6() {
        return this.menuRepo.get6();
    }
    
}