export interface IAdminService {

    getAllItems(): Promise<any>;
    
    AddItem_toDB_and_s3(file: any, body: any, memo: any): Promise<any>;
    
    Add_Delivery(req: any): Promise<any>;

    Remove_Delivery(req: any): Promise<any>;
    
    getAllDelivery(): Promise<any>;
}