import db from './sequalize';
import { ISignUpRepo } from '../core/repos/ISignUpRepo';

export class SignUp implements ISignUpRepo {
  async AddNewEmailCustomer(Name: String, Address: String, City: String, Email: string, password: String, phone: String) {
    if (Email != undefined && password != undefined) {
      let item = await db['Customer'].findAll({
        where: {
          email: [Email]
        }
      });
      // check if string more than '[]'
      if (JSON.stringify(item).length >= 3) {
        const response = { state: "Email already exist" };
        return response;
      }
      else {
        await db['Customer'].create({ phone: phone, address: Address, city: City, name: Name, email: Email, HPassword: password });
        const response = { state: "accepted" };
        return response;
      }

    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }
}
