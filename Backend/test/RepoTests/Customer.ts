import { expect } from "chai";
import { customerRepo } from "../../repository/CustomerRepo";

describe("Customer Repo Tests", () => {
  const obj = new customerRepo();

  it("shoud return void", () => {
    expect(obj.get_Available_Items()).to.be.a("promise");
  });

  it("check length of item returned", async () => {
    let result: any;
    await obj.get_Available_Items().then(
      (accepted) => result = accepted,
      (rejected) => console.log("Erron" + rejected));
    console.log(result);
    expect(result.length).to.equals(1);
  });
  it("check customer availabe",
  async () => {
    let result:any;
    await obj.get_customer_details(1).then(
      (accepted) => result=accepted,
      (rejected) => console.log("Erron" + rejected));
      console.log(result);
      expect(result.name).to.equals("Abdullatif khalid");
  });
  it("check customer not found availabe",
  async () => {
    let result:any;
    await obj.get_customer_details(10).then(
      (accepted) => result=accepted,
      (rejected) => result= rejected);
      console.log(result);
      expect(result.state).to.equals("not found this customer");
  });
 

});