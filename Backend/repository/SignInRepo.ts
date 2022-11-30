import db from './sequalize';

export class SignIn {
  async checkCorrectAdmin(Email: String, PassWord: String) {
    let item = await db['Admin'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      return true;
    }
    else {
      return false;
    }
  }

  async checkCorrectDelivery(Email: String, PassWord: String) {
    let item = await db['Admin'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      return true;
    }
    else {
      return false;
    }
  }

  async checkCorrectCustomer(Email: String, PassWord: String) {
    let item = await db['Admin'].findAll({
      where: {
        email: [Email],
        HPassword: [PassWord]
      }
    });
    if (JSON.stringify(item).length >= 3) {
      return true;
    }
    else {
      return false;
    }
  }
}