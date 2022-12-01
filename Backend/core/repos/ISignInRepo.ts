export interface ISignInRepo {
  checkCorrectCustomer(Email: String, Password: String): Promise<Boolean>;
  checkCorrectDelivery(Email: String, Password: String): Promise<Boolean>;
  checkCorrectAdmin(Email: String, Password: String): Promise<Boolean>;
}
