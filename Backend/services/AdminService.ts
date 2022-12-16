import { IAdminService } from "../core/service/IAdminService";
import { AdminRepo } from "../repository/AdminRepo"

export class adminsrevice implements IAdminService{
    
    adminR_Obj =new AdminRepo();
    getAllItems()
    {
        return this.adminR_Obj.getALL();
    }
}