import { SignUp } from "../repository/SignupRepo";


export class signupservice {
    signup = new SignUp();

    sign_up(req) {
        return this.signup.AddNewEmailCustomer(req.id, req.phone, req.name, req.mail, req.password);
    }
}