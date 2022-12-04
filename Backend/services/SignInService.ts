import { SignIn } from "../repository/SignInRepo";
import { ISignInService } from "../core/service/ISignInService";
import { ISignInRepo } from "../core/repos/ISignInRepo";

export class signinservice implements ISignInService {

    signin: ISignInRepo = new SignIn();

    public sign_in(req:any) {
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
                res = this.signin.wrongtype();
                break;
        }
        return res;
    }

    customer_sign_in(email: string, password: string) {
        return this.signin.checkCorrectCustomer(email, password);
    }

    delivery_sign_in(email: string, password: string) {
        return this.signin.checkCorrectDelivery(email, password);
    }

    admin_sign_in(email: string, password: string) {
        return this.signin.checkCorrectAdmin(email, password);
    }
}