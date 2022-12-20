export interface ICustomerRepo {
    
    get_Available_Items(): Promise<any>;
    get_customer_details(customer_id:Number): Promise<any>;
}