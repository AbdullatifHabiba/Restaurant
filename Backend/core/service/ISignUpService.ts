export interface ISignUpService {

    sign_up(req: any): Promise<any>;

    Add_Admin(req: any): Promise<any>;

    Add_Delivery(req: any): Promise<any>;
}