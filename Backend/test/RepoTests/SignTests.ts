
import { expect } from "chai";
import { SignIn } from "../../repository/SignInRepo";
import { SignUp } from "../../repository/SignupRepo";

describe("SignIn Repo", () => {
    const obj =new SignIn();

  it('shoud return void',() => {
    expect(obj.checkCorrectAdmin("a","a")).to.be.a('promise');
  });

  it('check added item is ok',() => {
    obj.checkCorrectAdmin("a","a").then((accepted)=> expect(accepted).to.equals('item added correctly'),
      (rejected) => console.log("Erron"+rejected));
  });

  it('check added item is exist not to be added',() => {
    obj.checkCorrectCustomer("a","a").then((accepted)=> expect(accepted).to.equals('item added correctly'),
      (rejected) => console.log("Erron"+rejected));
  });
    it('shoud return void',() => {
      expect(obj.checkCorrectCustomer('mohamed','123')).to.be.a('promise');
    });
  
    it('check added item is ok',() => {
      obj.checkCorrectDelivery('mohamed','123').then((accepted)=> expect(accepted).to.equals('item added correctly'),
        (rejected) => console.log("Erron"+rejected));
    });
  
    it('check added item is exist not to be added',() => {
      obj.checkCorrectDelivery('mohamed','123').then((accepted)=> expect(accepted).to.equals('item added correctly'),
        (rejected) => console.log("Erron"+rejected));
    });
  });
  describe("SignUp Repo", () => {
    const obj =new SignUp();
    it('shoud return void',() => {
      expect(obj.AddNewEmailCustomer(1,'123','mohamed','mohamed@','123')).to.be.a('promise');
    });
  
    it('check added item is ok',() => {
      obj.AddNewEmailCustomer(1,'123','mohamed','mohamed@','123').then((accepted)=> expect(accepted).to.equals('item added correctly'),
        (rejected) => console.log("Erron"+rejected));
    });
  
    it('check added item is exist not to be added',() => {
      let result:any ;
      obj.AddNewEmailCustomer(1,'123','mohamed','mohamed@','123').then((accepted)=> expect(accepted).to.equals('item added correctly'),
      (rejected) => console.log("Erron"+rejected));
    });
    it('shoud return void',() => {
        expect(obj.AddNewEmailCustomer(1,"123","a","a","a")).to.be.a('promise');
      });
    
      it('check added item is ok',() => {
        obj.AddNewEmailCustomer(1,"123","a","a","a").then((accepted)=> expect(accepted).to.equals('item added correctly'),
          (rejected) => console.log("Erron"+rejected));
      });
      describe

    
});