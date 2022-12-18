
import * as AWS from '../services/aws';

import { IAdminService } from "../core/service/IAdminService";
import { AdminRepo } from "../repository/AdminRepo";
import { MenueRepo } from '../repository/MenueRepo';


export class adminsrevice implements IAdminService{
  
  menuo_repo=new MenueRepo();
async AddItem_toDB_and_s3(file:any,body:any) {

    const fileBuffer =file;
    let location:string;

   await AWS.upload_images(body.name,fileBuffer).then((accepted) => {
     console.log("successfully sand at " + accepted);
      location=accepted.Location;
      console.log(location)
   }).catch((rejected) => {
     console.log("rejected");
   });
   return this.menuo_repo.AddItem(body.name,body.available,location,body.description,body.price); 
}
    
    adminR_Obj =new AdminRepo();
    getAllItems()
    {
        return this.adminR_Obj.getALL();
    }
}