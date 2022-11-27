import { CustomerServices } from "../services/CustomerService";

export class config {
    static sign_in(user_name : string, password : string) {
        return CustomerServices.check_password(user_name, password)
    }

    static sign_up () {
        
    }
}