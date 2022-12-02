// import { expect } from "chai";
// import { SignIn } from "../../repository/SignInRepo";
// import { SignUp } from "../../repository/SignupRepo";

// describe("SignIn Repo", () => {
//   const obj = new SignIn();

//   it('shoud return void', () => {
//     expect(obj.checkCorrectAdmin("a", "a")).to.be.a('promise');
//   });

//   it('check email is not exist ', async () => {
//     let result: any
//     await obj.checkCorrectAdmin("a", "a").then((accepted) => (result = accepted),
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.equal('error');
//   });

//   it('check email is exist', async () => {
//     let result: any
//     await obj.checkCorrectAdmin("mohamed@gmail.com", "785***").then((accepted) => (result = accepted),
//       (rejected) => console.log("Erron" + rejected));
//     expect(JSON.stringify(result)).to.equal('[{"Admin_id":1,"phone":"0125878","name":"ahmed","email":"mohamed@gmail.com","HPassword":"785***","createdAt":"2022-11-29T07:39:35.000Z","updatedAt":"2022-11-29T07:39:35.000Z"}]');
//   });

//   it('check email is not correctly exist', async () => {
//     let result;
//     await obj.checkCorrectCustomer("a1", "a").then((accepted) => (result = accepted),
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.equal('error');
//   });

//   it('shoud return void', () => {
//     expect(obj.checkCorrectCustomer('mohamed', '123')).to.be.a('promise');
//   });

//   it('check added item is ok', () => {
//     obj.checkCorrectDelivery('mohamed', '123').then((accepted) => expect(accepted).to.equals('item added correctly'),
//       (rejected) => console.log("Erron" + rejected));
//   });

//   it('check added item is exist not to be added', () => {
//     obj.checkCorrectDelivery('mohamed', '123').then((accepted) => expect(accepted).to.equals('item added correctly'),
//       (rejected) => console.log("Erron" + rejected));
//   });
// });

// describe("SignUp Repo", () => {
//   const obj = new SignUp();
//   it('shoud return void', () => {
//     expect(obj.AddNewEmailCustomer('123', 'mohamed', 'mohamed@', '123')).to.be.a('promise');
//   });

//   it('check added email is ok', async () => {
//     let result: any;
//     await obj.AddNewEmailCustomer('123', 'mohamed', 'mohamed@RRR', '123').then((accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.be.true
//   });

//   it('check added email is exist not to be added', async () => {
//     let result: any;
//     await obj.AddNewEmailCustomer('123', 'mohamed', 'mohamed@', '123').then((accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.be.false
//   });

//   it('shoud return void', () => {
//     expect(obj.AddNewEmailCustomer("123", "a", "a", "a")).to.be.a('promise');
//   });

//   it('check added email is ok', async () => {
//     let result: any;
//     await obj.AddNewEmailCustomer("123", "a", "aaaa", "a").then((accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.be.true;
//   });

//   it('check added email is exist not to be added', async () => {
//     let result: any;
//     await obj.AddNewEmailCustomer('123', 'a', 'a', 'a').then((accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.be.false
//   });
// });