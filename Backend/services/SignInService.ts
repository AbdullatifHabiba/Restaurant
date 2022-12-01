import { SignIn } from "../repository/SignInRepo";

export class signinservice {
    
    signin = new SignIn();
    public sign_in(req) {
        let res:any;
        switch (req.user) {

            case "customer":
              res=  this.customer_sign_in(req.email, req.password);
                break;
            case "delivery":
                res=this.delivery_sign_in(req.email, req.password);
                break;
            case "admin":
                res=this.admin_sign_in(req.email, req.password);
                break;
            default:
                return "error";
                
        }
        return res;
    }

    customer_sign_in(email : string, password :string) {
        return this.signin.checkCorrectCustomer(email, password);
    }

    delivery_sign_in(email : string, password :string) {
        return this.signin.checkCorrectDelivery(email, password);
    }

    admin_sign_in(email : string, password :string) {
        return this.signin.checkCorrectAdmin(email, password);
    }
}