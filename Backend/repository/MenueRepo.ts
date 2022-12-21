import db from './sequalize';
import { IMenueRepo } from '../core/repos/IMenueRepo';

export class MenueRepo implements IMenueRepo {

  async AddItem(name: string, available: Number, location: String, description: String, price: String) {

    let item = await db['MenuItems'].findAll({
      where: {
        name: [name]
      }
    });

    if (JSON.stringify(item).length < 3) {
      await db['MenuItems'].create({ name: name, available_amount: available, image_location: location, description: description, price: price });
      return "item added correctly";
    } else {
      return "item already exist";
    }
  }

  async RemoveItemByName(name: string) {
    await db['MenuItems'].destroy({
      where: {
        name: [name]
      }
    });
  }

  async UpdateItemByName(name: string, available: Number, location: String, description: String, price: String) {
    await db['MenuItems'].update({ name: name, available_amount: available, image_location: location, description: description, price: price }, {
      where: {
        name: [name]
      }
    });
  }

  async GetItemByName(name: string) {
    let item = await db['MenuItems'].findAll({
      where: {
        name: [name]
      }
    });
    return item;
  }

  async GetAllItems() {
    let item = await db['MenuItems'].findAll({});
    return item;
  }

  async GetItemByAvailableAmount(amount: Number) {
    let item = await db['MenuItems'].findAll({
      where: {
        available_amount: [amount]
      }
    });
    return item;
  }

  async get6() {
    let item = await db['MenuItems'].findAll({
      limit: 6,
    });
    return item;
  }
  
}


