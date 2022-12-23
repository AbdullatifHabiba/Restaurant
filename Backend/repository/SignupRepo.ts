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
  async AddNewAdmin(Name: String, Email: string, password: String, phone: String) {
    if (Email != undefined && password != undefined) {
      let item = await db['Admin'].findAll({
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
        await db['Admin'].create({ name: Name, email: Email, HPassword: password, phone: phone });
        const response = { state: "accepted" };
        return response;
      }

    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }
  async AddNewDelivery(Name: String, Email: string, password: String, phone: String) {
    if (Email != undefined && password != undefined) {
      let item = await db['Deliveryman'].findAll({
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
        await db['Deliveryman'].create({  name:Name,email: Email, HPassword: password,phone:phone,status:"free",Branch_id:3 });
        const response = { state: "accepted" };
        return response;
      }

    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }
}
