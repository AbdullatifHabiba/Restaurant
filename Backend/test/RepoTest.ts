import { expect } from "chai";
import {MenueRepo} from './../repository/MenueItemRepo';
import {SignIn} from './../repository/SignInRepo'
import {SignUp} from './../repository/SignupRepo'
import{ItemRepo} from  './../repository/ItemRepo';


describe("Menu item Repo", () => {
 
    it('shoud return void',() => {
    const obj =new ItemRepo();
    expect(obj.AddItem(1,15,'Giza','this meal for me')).to.be.a('promise');
  });

  it('check added item is ok',() => {
    const obj =new ItemRepo();
    let result:any ;
    obj.AddItem(20,15,'Giza','this meal for me').then((accepted)=> expect(accepted).to.equals('item added correctly'),
      (rejected) => console.log("Erron"+rejected));
  });

  it('check added item is exist not to be added',() => {
    const obj =new ItemRepo();
    let result:any ;
    obj.AddItem(20,15,'Giza','this meal for me').then((accepted)=> expect(accepted).to.equals('item added correctly'),
      (rejected) => console.log("Erron"+rejected));
  });
});

