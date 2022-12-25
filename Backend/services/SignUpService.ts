import { ISignUpRepo } from "../core/repos/ISignUpRepo";
import { ISignUpService } from "../core/service/ISignUpService";
import { SignUp } from "../repository/SignupRepo";

export class signupservice implements ISignUpService {
  signup: ISignUpRepo = new SignUp();

  sign_up(req: any) {

    return this.signup.AddNewEmailCustomer(req.name, req.address, req.city, req.mail, req.password, req.phone);

  }
  Add_Admin(req: any) {
    return this.signup.AddNewAdmin(req.name, req.email, req.password, req.phone);
  }
  Add_Delivery(req: any) {
    return this.signup.AddNewDelivery(req.name, req.email, req.password, req.phone);
  }
}