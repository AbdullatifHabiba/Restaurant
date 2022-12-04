export interface ISignUpRepo {
  
  AddNewEmailCustomer(
    Name: String,
    Address: String,
    City: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<any>;

  AddNewEmailDelivery(
    Name: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<JSON>;

  AddNewEmailAdmin(
    Name: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<JSON>;
}