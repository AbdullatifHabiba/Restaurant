export interface ISignUpRepo {

  AddNewEmailCustomer(
    Name: String,
    Address: String,
    City: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<any>;
}