import db from './sequalize';
import { ISignInRepo } from '../core/repos/ISignInRepo';

export class SignIn implements ISignInRepo {
  async checkCorrectAdmin(Email: String, PassWord: String) {
    let item = await db['Admin'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response: JSON = <JSON><unknown>{
        "id": item.Admin_id,
        "name": item.name
      }
      return response;
    }
    else {
      return "error";
    }
  }

  async checkCorrectDelivery(Email: String, PassWord: String) {
    let item = await db['Deliveryman'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response: JSON = <JSON><unknown>{
        "id": item[0].deliveryman_id,
        "name": item[0].name
      }
      return response;
    }
    else {
      return "error";
    }
  }

  async checkCorrectCustomer(Email: String, PassWord: String) {
    let item = await db['Customer'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      const response: JSON = <JSON><unknown>{
        "id": item[0].customer_id,
        "name": item[0].name
      }
      return response;
    }
    else {
      return "error";
    }
  }
}