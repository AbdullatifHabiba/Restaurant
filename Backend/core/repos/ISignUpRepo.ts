export interface ISignUpRepo {
  AddNewEmailCustomer(
    Name: String,
    Address: String,
    City: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<any>;
  AddNewAdmin(
    Name: String,
    Email: string,
    password: String,
    phone: String
  ): Promise<any>;
  AddNewDelivery(
    Name: String,
    Email: string,
    password: String,
    phone: String
  ): Promise<any>;
}
