import { expect } from "chai";
import { SignIn } from "../../repository/SignInRepo";
import { SignUp } from "../../repository/SignupRepo";

describe("SignIn Repo", () => {
    const obj = new SignIn();

    it("shoud return void", () => {
        expect(obj.checkCorrectAdmin("a", "a")).to.be.a("promise");
    });

    it("check email is not exist ", async () => {
        let result: any
        await obj.checkCorrectAdmin("a15", "a87").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron database " + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });

    it("check email is exist", async () => {
        let result: any
        await obj.checkCorrectAdmin("mohamed@gmail.com", "785***").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it("check email is not correctly exist", async () => {
        let result: any;
        await obj.checkCorrectCustomer("yy", "yy").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });

    it("shoud return void", () => {
        expect(obj.checkCorrectCustomer("mohamed", "123")).to.be.a("promise");
    });

    it("check email is valid", async () => {
        let result: any;
        await obj.checkCorrectCustomer('suzan@gmail.com','785***').then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it("check email is not valid", async () => {
        let result: any;
        await obj.checkCorrectCustomer("mohamedKalid", "123").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });
});

describe("SignUp Repo", () => {
    const obj = new SignUp();
    it("shoud return void", () => {
        expect(obj.AddNewEmailCustomer("khalid","street5","cairo", "mohamed@essam.com", "567", "01023567")).to.be.a("promise");
    });

    it("check added email is ok", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("adel","street4","cairo", "mohamedrr@gmail.com", "mohamed@WppwW.com", "123785").then((accepted) => result = accepted,
            (rejected) => console.log("Erron database" + rejected));
        expect(result.state).to.equals("accepted");
    });

    it("check added email is exist not to be added", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("adel", "street4","cairo","mohamedrr@gmail.com", "mohamed@WppwW.com", "123785").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("Email already exist");
    });

    it("shoud return void", () => {
        expect(obj.AddNewEmailCustomer("essam","street2","alex" ,"a@a.com", "a", "a")).to.be.a('promise');
    });

    it("check added email is ok", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("anwar", "street5","giza","aa@122.com", "aao", "a158").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("accepted");
    });

    it("check added email is exist not to be added", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("anwer","street5","giza" ,"aa@122.com", "aaoom", "a158").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("Email already exist");
    });
});