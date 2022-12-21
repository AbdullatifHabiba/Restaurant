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
      expect(result.length).to.equals(6);
    
  });
  const fs =require('fs');
  it("check  adding picture to s3 and item into database",async()=>{
    const imageURL = 'G:/Fifth Term/Software Engineering/Project/Frontend/restaurant/public/Images/Bignine.jfif'
    const fileStream = fs.createReadStream(imageURL);
    const o={
      "name":"mopm4",
      "available":47,
      "price":"2",
      "description":"look fine"
    }
    let result:any;
    await obj.AddItem_toDB_and_s3(fileStream,o).then(
      (accepted) => result=accepted,
      (rejected) => console.log("Erron" + rejected));
      console.log(result);
      expect(result).to.equals("item already exist");

    });
 
 

  it("check  adding picture to s3 and item into database",async()=>{
    const imageURL = 'G:/Fifth Term/Software Engineering/Project/Frontend/restaurant/public/Images/Bignine.jfif'
    const fileStream = fs.createReadStream(imageURL);
    const o={
      "name":"humborg",
      "available":7,
      "price":"25",
      "description":"delicios"
    }
    let result:any;
    await obj.AddItem_toDB_and_s3(fileStream,o).then(
      (accepted) => result=accepted,
      (rejected) => console.log("Erron" + rejected));
      console.log(result);
      expect(result).to.equals("item added correctly");

    });


  });
 