import db from './../repository/sequalize';
import { Json } from 'sequelize/types/utils';
import { SignIn } from './../repository/SignInRepo'
import { SignUp } from './../repository/SignupRepo'

(async () => {

  console.log("Initialize database connection...");
  await db.sequelize.sync({ force: false });

})();

// const obj =new MenueRepo();
// obj.AddItem(3,20,"Giza","this meal for you");

// obj.RemoveItemByID(11);
// obj.RemoveItemByID(1);
// obj.RemoveItemByID(2);
// obj.RemoveItemByID(3);
// obj.RemoveItemByID(4);
// obj.RemoveItemByID(5);
// obj.RemoveItemByID(6);
// obj.RemoveItemByID(7);
// obj.RemoveItemByID(8);
// obj.RemoveItemByID(9);

// obj.GetAll().then((accepted) => console.log(JSON.stringify(accepted)),
//  (rejected) => console.log("Erron"+rejected)
// );

//  const obj2 =new SignIn();

// obj2.checkCorrectAdmin('mohamed@gmail.com','78***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

// obj2.checkCorrectAdmin('mohamed@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

// obj2.checkCorrectDelivery('kamis@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

// obj2.checkCorrectCustomer('suzan@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

const obj3 = new SignUp();

obj3.AddNewEmailCustomer(9, '012589', 'adel', 'adel@gmail.com', '887d8rr').then((accepted) => console.log("ddddd" + JSON.stringify(accepted)),
  (rejected) => console.log("Erron" + rejected));
