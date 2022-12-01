import { SignIn } from "../repository/SignInRepo";

export class signinservice {
    
    signin = new SignIn();
    public sign_in(req) {
        switch (req.user) {
            case "customer":
                this.customer_sign_in(req.email, req.password);
                break;
            case "delivery":
                this.delivery_sign_in(req.email, req.password);
                break;
            case "admin":
                this.admin_sign_in(req.email, req.password);
                break;
            default:
                return "error";
                break;
        }
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