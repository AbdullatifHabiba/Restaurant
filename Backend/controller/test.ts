import db from './../repository/sequalize';
import { Json } from 'sequelize/types/utils';
import { SignIn } from './../repository/SignInRepo'
import { SignUp } from './../repository/SignupRepo'
import { MenueRepo } from './../repository/MenueRepo'
import {signupservice} from './../services/SignUpService'
(async () => {

  console.log("Initialize database connection...");
  await db.sequelize.sync({ force: false });

})();

// const obj = new MenueRepo();
// // obj.AddItem('meal1', 20, "Giza", "this meal for you", '15').then((accepted) => console.log("yyyyyoooooiiii" + accepted),
// //   (rejected) => console.log("Erron" + rejected));

//   obj.get6().then((accepted) => console.log("mmmmmmmmmmmmmmmmmmoooooiiii" + JSON.stringify(accepted)),
//   (rejected) => console.log("Erron" + rejected));

// obj.GetAllItems().then((accepted) => console.log("mmmmmmmmmmmmmmmmmmwwwww" + JSON.stringify(accepted)),
//   (rejected) => console.log("Erron" + rejected)
// );


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



///////////////////////////////////////////////////////
// const obj2 = new SignIn();

// obj2.checkCorrectAdmin('mohamed@gmail.com', '785***').then((accepted) => console.log("ffffffffffqqqq" + JSON.stringify(accepted)),
//   (rejected) => console.log("Erron" + rejected));

///////////////////////////////////////

// obj2.checkCorrectAdmin('mohamed@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

// obj2.checkCorrectDelivery('kamis@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

// obj2.checkCorrectCustomer('suzan@gmail.com','785***').then((accepted) => console.log("ddddd"+JSON.stringify(accepted)),
// (rejected) => console.log("Erron"+rejected));

const obj3 = new signupservice();

console.log(obj3.sign_up( <JSON><unknown>{
  "phone":'012587989', "name":'ibrahim', "mail":'ibrahim@gmail.com', "password":'ppp887d8rr'
}));
