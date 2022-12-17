export interface ICustomerService {

    get_Available_Items(): Promise<any>;

    make_new_order(req: any): Promise<any>;

    edit_order(req: any): Promise<any>;
}