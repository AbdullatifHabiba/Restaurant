import db from './sequalize';

export class SignUp {

  async AddNewEmailCustomer(id: number, phone: String, Name: String, Email: string, password: String) {
    let item = await db['Customer'].findAll({
      where: {
        email: [Email]
      }
    });
    // check if string more than '[]'
    if (JSON.stringify(item).length >= 3) {
      return false;
    }
    else {
      await db['Customer'].create({ customer_id: id, phone: phone, name: Name, email: Email, HPassword: password });
      return true;
    }
  }
}