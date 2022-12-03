export interface ISignUpRepo {
  
  AddNewEmailCustomer(
    Name: String,
    Email: String,
    Password: String,
    Phone: String
  ): Promise<JSON>;

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