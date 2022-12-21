export interface ICustomerService {

    get_Available_Items(): Promise<any>;

    make_new_order(req: any): Promise<any>;

    edit_order(req: any): Promise<any>;
    
    get_customer_details(req: any): Promise<any>;
    
    paypal_payment(req: any,res:any): Promise<any>;
    
    cash_payment(req: any,res:any): Promise<any>;
}