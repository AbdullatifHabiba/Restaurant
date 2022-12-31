import { ISignUpRepo } from "../core/repos/ISignUpRepo";
import { ISignUpService } from "../core/service/ISignUpService";
import { SignUp } from "../repository/SignupRepo";
import bcrypt from "bcrypt";

export class signupservice implements ISignUpService {
  signup: ISignUpRepo = new SignUp();

  sign_up(req: any) {
    return this.signup.AddNewEmailCustomer(req.name, req.address, req.city, req.mail, req.password, req.phone);
  }
  
  passwordEncryption = (pass = "") => bcrypt.hashSync(pass, "$2a$10$CwTycUXWue0Thq9StjUM0u");
  Add_Admin(req: any) {
    let password = this.passwordEncryption(req.password);

    return this.signup.AddNewAdmin(req.name, req.email, password, req.phone);
  }
}