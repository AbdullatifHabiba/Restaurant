import { MenueRepo } from "../repository/MenueRepo";
import { IAdminRepo } from '../core/repos/IAdminRepo';
import db from './sequalize';

export class AdminRepo implements IAdminRepo {

    menuRepo = new MenueRepo();

    getALL() {
        return this.menuRepo.GetAllItems();
    }

    async AddNewDelivery(Name: String, Email: string, password: String, phone: String ,Branch_id:Number) {
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
            await db['Deliveryman'].create({  name:Name,email: Email, HPassword: password,phone:phone,status:"free",Branch_id:Branch_id });
            const response = { state: "accepted" };
            return response;
          }
    
        } else {
          const response = { state: "data entered in request not completed" };
          return response;
        }
      }

}