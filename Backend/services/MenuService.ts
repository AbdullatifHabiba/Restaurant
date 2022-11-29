import {MenuRepo} from "../repository/MenuRepo"

export class menuserice {
    menuRepo = new MenuRepo();

    public serve(req) {
        switch (req.service) {
            case "getAll":
                return this.menuRepo.GetAllItems();
                break;
            case "get6":
                
                break;
            default:
                return "error";
                break;
        }
    }
}