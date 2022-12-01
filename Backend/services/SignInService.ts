import { SignIn } from "../repository/SignInRepo";

export class signinservice implements ISignInService{
    
    signin = new SignIn();
    public sign_in(req) {
        let res;
        switch (req.user) {
            case "customer":
                res = this.customer_sign_in(req.mail, req.password);
                break;
            case "delivery":
                res = this.delivery_sign_in(req.mail, req.password);
                break;
            case "admin":
                res = this.admin_sign_in(req.mail, req.password);
                break;
            default:
                return "wrong user type";
                break;
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