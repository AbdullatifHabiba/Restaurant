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
        "name": item.name,
        'state':'accepted'
      }
      return response;
    }
    else {
      const response: JSON = <JSON><unknown>{
        "state":"error" 
      }
      return response;
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
        "name": item[0].name,
        'state':'accepted'
      }
      return response;
    }
    else {
      const response: JSON = <JSON><unknown>{
        "state":"error" 
      }
      return response;
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
        "name": item[0].name,
        'state':'accepted'
      }
      return response;
    }
    else {
      const response: JSON = <JSON><unknown>{
        "state":"error" 
      }
      return response;
    }
  }
}