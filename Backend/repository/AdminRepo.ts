import { MenueRepo } from "../repository/MenueRepo";
import { IAdminRepo } from '../core/repos/IAdminRepo';
import db from './sequalize';
import { IMenueRepo } from "../core/repos/IMenueRepo";

export class AdminRepo implements IAdminRepo {

  menuRepo: IMenueRepo = new MenueRepo();

  getALL() {
    return this.menuRepo.GetAllItems();
  }

  async AddNewDelivery(Name: String, Email: string, password: String, phone: String, Branch_id: Number) {
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
        await db['Deliveryman'].create({ name: Name, email: Email, HPassword: password, phone: phone, status: "free", Branch_id: Branch_id });
        const response = { state: "accepted" };
        return response;
      }

    } else {
      const response = { state: "data entered in request not completed" };
      return response;
    }
  }

  async GetAllDelivery() {
    let item = await db['Deliveryman'].findAll({});
    return item;
  }

  async RemoveDeliveryById(id: string) {
    let item =  await db['Deliveryman'].findAll({
      where: {
        deliveryman_id: [id]
      }
    });
    if (JSON.stringify(item).length < 3) {
      const response = { state: "id doesn't exist" };
      return response;
    };
    await db['Deliveryman'].destroy({
      where: {
        deliveryman_id: [id]
      }
    });
    const response = { state: "success" };
    return response;
  }
}