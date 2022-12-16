
import * as AWS from '../services/aws';

import { IAdminService } from "../core/service/IAdminService";
import { AdminRepo } from "../repository/AdminRepo"

export class adminsrevice implements IAdminService{
  

AddItem_toDB_and_s3(file:any,body:any) {

    const fileBuffer =file.buffer;
    AWS.upload_images(body.name,fileBuffer).then((accepted) => {
     console.log("successfully sand at " + accepted);
   }).catch((rejected) => {
     console.log("rejected");
   });
   
}
    
    adminR_Obj =new AdminRepo();
    getAllItems()
    {
        return this.adminR_Obj.getALL();
    }
}