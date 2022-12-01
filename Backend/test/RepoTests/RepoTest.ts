import { expect } from "chai";
import { MenueRepo } from "../../repository/MenueRepo";

describe("Menu item Repo", () => {
  const obj = new MenueRepo();

  it("shoud return void", () => {
    expect(obj.AddItem("fish", 15, "fish.png", "this meal for me", 10)).to.be.a(
      "promise"
    );
  });

  it("check added item is ok", () => {
    obj.AddItem("meat", 5, "meat.png", "this meal for me", 25).then(
      (accepted) => expect(accepted).to.equals("item added correctly"),
      (rejected) => console.log("Erron" + rejected)
    );
  });

  it("check added item is exist not to be added", () => {
    let result: any;
    obj.AddItem("rice", 45, "rice.png", "this meal for me", 5).then(
      (accepted) => expect(accepted).to.equals("item added correctly"),
      (rejected) => console.log("Erron" + rejected)
    );
  });
});
