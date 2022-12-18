export interface IAdminService {
    getAllItems():Promise<any>;
    AddItem_toDB_and_s3(file:any,body:any,memo:any):Promise<any>;
}