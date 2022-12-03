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

    it("check added item is ok", async () => {
        let result: any;
        await obj.checkCorrectCustomer("mohamed@", "123").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it("check added item is exist not to be added", async () => {
        let result: any;
        await obj.checkCorrectCustomer("mohamedKalid", "123").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });
});

describe("SignUp Repo", () => {
    const obj = new SignUp();
    it("shoud return void", () => {
        expect(obj.AddNewEmailCustomer("khalid", "mohamed@", "567", "01023567")).to.be.a("promise");
    });

    it("check added email is ok", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("adel", "mohamedrr@gmail.com", "mohamed@WppwW.com", "123785").then((accepted) => result = accepted,
            (rejected) => console.log("Erron database" + rejected));
        expect(result.state).to.equals("accepted");
    });

    it("check added email is exist not to be added", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("ahmed", "mohamedrr@gmail.com", "mohamed@", "015898723").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("Email already exist");
    });

    it("shoud return void", () => {
        expect(obj.AddNewEmailCustomer("essam", "a@a", "a", "a")).to.be.a('promise');
    });

    it("check added email is ok", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("anwar", "aa", "aao", "a158").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("accepted");
    });

    it("check added email is exist not to be added", async () => {
        let result: any;
        await obj.AddNewEmailCustomer("anwer", "aa", "aaoom", "a158").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equals("Email already exist");
    });
});