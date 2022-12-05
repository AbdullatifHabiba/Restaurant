import { expect } from "chai";
import { signupservice } from "../../services/SignUpService";
import { signinservice } from "../../services/SignInService";

describe("SignIn Service", () => {
    const obj = new signinservice();

    it("shoud return void", () => {
        const request: JSON = <JSON><unknown>{
            "mail": "a",
            "password": "a",
            "user": "admin"
        };
        expect(obj.sign_in(request)).to.be.a("promise");
    });

    it("check email is not exist ", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "mail": "a15",
            "password": "a87",
            "user": "admin"
        };
        await obj.sign_in(request).then((accepted) => (result = accepted),
            (rejected) => console.log("Error database" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });

    it("check email is exist ", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "mail": "mohamed@gmail.com",
            "password": "785***",
            "user": "admin"
        };
        await obj.sign_in(request).then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it('check email is not correctly exist', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "mail": "yy",
            "password": "yy",
            "user": "customer"
        };
        await obj.sign_in(request).then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });

    it("shoud return void", () => {
        const request: JSON = <JSON><unknown>{
            "mail": "mohamed",
            "password": "123",
            "user": "customer"
        };
        expect(obj.sign_in(request)).to.be.a("promise");
    });

    it("check valid customer email", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "mail": "suzan@gmail.com",
            "password": '785***',
            "user": "customer"
        };
        await obj.sign_in(request).then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it("check added item is exist not to be added", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "mail": "mohamedKalid",
            "password": "123",
            "user": "customer"
        };
        await obj.sign_in(request).then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Wrong E-mail or password");
    });
});

describe("SignUp service", () => {
    const obj = new signupservice();
    it("shoud return void", () => {
        const request: JSON = <JSON><unknown>{
            "name": "khalid",
            "mail": "mohamed@essam.com",
            "password": "567",
            "phone": "01023567"
        };
        expect(obj.sign_up(request)).to.be.a("promise");
    });

    it("check added email is ok", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "name": "adel",
            "mail": "mohamedrrgreatly@gmail.com",
            "password": "mohamed@WppwW.com",
            "phone": "123785"
        };
        await obj.sign_up(request).then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal('accepted');
    });

    it("check added email is exist not to be added", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "name": "ahmed",
            "mail": "mohamedrrgreatly@gmail.com",
            "password": "mohamed@",
            "phone": "015898723"
        };
        await obj.sign_up(request).then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Email already exist");
    });

    it("shoud return void", () => {
        const request: JSON = <JSON><unknown>{
            "name": "essam",
            "mail": "a@a",
            "password": "a",
            "phone": "a"
        };
        expect(obj.sign_up(request)).to.be.a("promise");
    });

    it('check added email is ok', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "name": "anwar",
            "mail": "aaqqq@13.com",
            "password": "aao",
            "phone": "a158"
        };
        await obj.sign_up(request).then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("accepted");
    });

    it('check added email is exist not to be added', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "name": "anwer",
            "mail": "aaqqq@13.com",
            "password": "aaoom",
            "phone": "a158"
        };
        await obj.sign_up(request).then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("Email already exist");
    });
});