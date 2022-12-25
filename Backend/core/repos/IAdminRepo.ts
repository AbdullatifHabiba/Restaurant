export interface IAdminRepo {
    
    getALL(): Promise<any>;
    AddNewDelivery(
        Name: String,
        Email: string,
        password: String,
        phone: String,
        Branch_id:Number
      ): Promise<any>;
}