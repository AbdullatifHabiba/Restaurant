import db from './sequalize';
import { ISignInRepo } from '../core/repos/ISignInRepo';

export class SignIn implements ISignInRepo {
  
  async checkCorrectAdmin(Email: String, PassWord: String) {
    if (Email != undefined && PassWord != undefined) {
      let item = await db['Admin'].findAll({
        where: {
          email: [Email],
          HPassword: [PassWord]
        }
      });
      if (JSON.stringify(item).length >= 3) {
        const response = {
          id: item[0].Admin_id,
          name: item[0].name,
          state: "accepted"
        };
        return response;
      }
      else {
        const response = { state: "Wrong E-mail or password" };
        return response;
      }
    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }

  async checkCorrectDelivery(Email: String, PassWord: String) {
    if (Email != undefined && PassWord != undefined) {
      let item = await db['Deliveryman'].findAll({
        where: {
          email: [Email],
          HPassword: [PassWord]
        }
      });
      if (JSON.stringify(item).length >= 3) {
        const response = {
          id: item[0].deliveryman_id,
          name: item[0].name,
          state: "accepted"
        };
        return response;
      }
      else {
        const response = { state: "Wrong E-mail or password" };
        return response;
      }
    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }

  async checkCorrectCustomer(Email: String, PassWord: String) {
    if (Email != undefined && PassWord != undefined) {
      let item = await db['Customer'].findAll({
        where: {
          email: [Email],
          HPassword: [PassWord]
        }
      });
      if (JSON.stringify(item).length >= 3) {
        const response = {
          id: item[0].customer_id,
          name: item[0].name,
          state: "accepted"
        };
        return response;
      }
      else {
        const response = { state: "Wrong E-mail or password" };
        return response;
      }
    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }

  async wrongtype() {
    const response = { state: "Undifined user type" };
    return response;
  }
}