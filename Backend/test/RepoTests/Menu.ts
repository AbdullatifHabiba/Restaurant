// import { expect } from "chai";
// import { MenueRepo } from "../../repository/MenueRepo";

// describe("Menu item Repo", () => {
//   const obj = new MenueRepo();

//   it("shoud return void", () => {
//     expect(obj.AddItem("fish", 15, "fish.png", "this meal for me", '10')).to.be.a("promise");
//   });

//   it("check added item is ok", async () => {
//     let result;
//     await obj.AddItem("meatMeal15", 5, "meat.png", "this meal for me", '25').then(
//       (accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.equals("item added correctly");
//   });

//   it("check added item is exist not to be added", async () => {
//     let result: any;
//     await obj.AddItem("riceMeal189", 45, "rice.png", "this meal for me", '5').then(
//       (accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.equals("item added correctly");
//   });

//   it("check added item is exist and should not  be added", async () => {
//     let result: any;
//     await obj.AddItem("rice", 45, "rice.png", "this meal for me", '5').then(
//       (accepted) => result = accepted,
//       (rejected) => console.log("Erron" + rejected));
//     expect(result).to.equals("item already exist");
//   });
// });

