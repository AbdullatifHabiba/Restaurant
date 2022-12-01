export interface ISignUpRepo {
  AddNewEmailCustomer(
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    Address: String,
    Phone: String
  ): Promise<Boolean>;
  
  AddNewEmailDelivery(
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    Address: String,
    Phone: String
  ): Promise<Boolean>;
  
  AddNewEmailAdmin(
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    Address: String,
    Phone: String
  ): Promise<Boolean>;
}
