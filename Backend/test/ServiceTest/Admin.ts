import { expect } from "chai";
import { adminsrevice } from "../../services/AdminService";

describe("Admin Service layer Tests", () => {
  const obj = new adminsrevice();

  it("shoud return void", () => {
    expect(obj.getAllItems()).to.be.a("promise");
  });

  it("check length of item returned", async () => {
    let result:any;
    await obj.getAllItems().then(
      (accepted) => result=accepted,
      (rejected) => console.log("Erron" + rejected));
      console.log(result);
      expect(result.length).to.equals(1);
    
  });
 

});