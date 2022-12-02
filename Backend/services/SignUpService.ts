import { SignUp } from "../repository/SignupRepo";
import {ISignUpService} from '../core/service/ISignUpService'

export class signupservice implements ISignUpService {
    signup = new SignUp();

  sign_up(req) {
    return this.signup.AddNewEmailCustomer(req.phone, req.name, req.mail, req.password);
    }
}