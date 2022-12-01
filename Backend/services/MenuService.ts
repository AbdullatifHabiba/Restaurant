import {MenueRepo} from "../repository/MenueRepo"

export class menuserice implements IMenueService{
    menuRepo = new MenueRepo();

    getAll() {
        throw new Error("Method not implemented.");
    }

    get6(){
        // implement method in repo first
        return;
    }
}