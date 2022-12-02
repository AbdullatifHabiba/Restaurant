import {MenueRepo} from "../repository/MenueRepo"

export class menuserice implements IMenueService{
    menuRepo = new MenueRepo();

    getAll() {
        return this.menuRepo.GetAllItems();
    }

    get6(){
        // implement method in repo first
        return null;
    }
}