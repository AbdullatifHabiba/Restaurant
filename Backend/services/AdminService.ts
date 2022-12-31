import * as AWS from '../services/aws';

import { IAdminService } from "../core/service/IAdminService";
import { AdminRepo } from "../repository/AdminRepo";
import { MenueRepo } from '../repository/MenueRepo';
import { IAdminRepo } from '../core/repos/IAdminRepo';
import { IMenueRepo } from '../core/repos/IMenueRepo';

export class adminsrevice implements IAdminService {

  menuo_repo:IMenueRepo = new MenueRepo();

  async AddItem_toDB_and_s3(file: any, body: any, memotype: any) {
    const fileBuffer = file;
    let location: string;
    console.log(memotype)
    await AWS.upload_images(body.name, fileBuffer, memotype).then((accepted) => {
      console.log("successfully sand at " + accepted);
      location = accepted.Location
      console.log(location)
    }).catch((rejected) => {
      console.log("rejected");
    });
    
    return this.menuo_repo.AddItem(body.name, body.available, location, body.describe, body.price);
  }

  adminR_Obj: IAdminRepo = new AdminRepo();

  getAllItems() {
    return this.adminR_Obj.getALL();
  }

  Add_Delivery(req: any) {
    return this.adminR_Obj.AddNewDelivery(req.name, req.email, req.password, req.phone, req.Branch_id);
  }

  Remove_Delivery(req: string) {
    return this.adminR_Obj.RemoveDeliveryById(req);
  }

  getAllDelivery() {
    return this.adminR_Obj.GetAllDelivery();
  }

  removeItem(req: string) {
    return this.menuo_repo.RemoveItemByName(req);
  }
}