export interface ISignInRepo {
  checkCorrectCustomer(Email: String, Password: String): Promise<any>;
  checkCorrectDelivery(Email: String, Password: String): Promise<any>;
  checkCorrectAdmin(Email: String, Password: String): Promise<any>;
}
