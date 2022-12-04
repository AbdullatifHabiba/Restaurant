export interface ISignInService {
    
    sign_in(req: any): Promise<any>;
    customer_sign_in(email: string, password: string): Promise<any>;
    delivery_sign_in(email: string, password: string): Promise<any>;
    admin_sign_in(email: string, password: string): Promise<any>;
}