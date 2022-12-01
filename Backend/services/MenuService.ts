import {MenueRepo} from "../repository/MenueRepo"

export class menuserice {
    menuRepo = new MenueRepo();

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