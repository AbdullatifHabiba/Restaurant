import {MenueRepo} from "../repository/MenueRepo"
import {IMenueService} from "../core/service/IMenuService"


export class menuserice implements IMenueService{
    menuRepo = new MenueRepo();

   async getAll() {
        let result:any;
        await  this.menuRepo.GetAllItems().then((accepted) => result = accepted,
            (rejected) => result="error");
        return result ;
    }

   async get6(){
        let result:any;
        await  this.menuRepo.get6().then((accepted) => result = accepted,
        (rejected) => result="error");
        return result ;
    }
}