import { expect } from "chai";
import { AdminRepo } from "../../repository/AdminRepo";

describe("Admin Repo Tests", () => {
  const obj = new AdminRepo();

  it("shoud return void", () => {
    expect(obj.getALL()).to.be.a("promise");
  });

  it("check length of item returned", async () => {
    let result:any;
    await obj.getALL().then(
      (accepted) => result=accepted,
      (rejected) => console.log("Erron" + rejected));
      console.log(result.length);
      expect(result.length).to.equals(1);
    
  });
 

});