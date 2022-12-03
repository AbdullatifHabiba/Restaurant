import { expect } from "chai";
import { signupservice } from "../../services/SignUpService";
import { signinservice } from "../../services/SignInService";

describe("SignIn Repo", () => {
    const obj = new signinservice();

    it('shoud return void', () => {
        expect(obj.sign_in("a")).to.be.a('promise');
    });

    it('check email is not exist ', async () => {
        let result: any
        await obj.sign_in("a").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result).to.equal('error');
    });

    it('check email is exist', async () => {
        let result: any
        await obj.sign_in("mohamed@gmail.com").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(JSON.stringify(result)).to.equal('[{"Admin_id":1,"phone":"0125878","name":"ahmed","email":"mohamed@gmail.com","HPassword":"785***","createdAt":"2022-11-29T07:39:35.000Z","updatedAt":"2022-11-29T07:39:35.000Z"}]');
    });

    it('check email is not correctly exist', async () => {
        let result;
        await obj.sign_in("a1").then((accepted) => (result = accepted),
            (rejected) => console.log("Erron" + rejected));
        expect(result).to.equal('error');
    });

    it('shoud return void', () => {
        expect(obj.sign_in('mohamed')).to.be.a('promise');
    });

    it('check added item is ok', () => {
        obj.sign_in('mohamed').then((accepted) => expect(accepted).to.equals('item added correctly'),
            (rejected) => console.log("Erron" + rejected));
    });

    it('check added item is exist not to be added', () => {
        obj.sign_in('mohamed').then((accepted) => expect(accepted).to.equals('item added correctly'),
            (rejected) => console.log("Erron" + rejected));
    });
});

describe("SignUp service", () => {
    const obj = new signupservice();
    it("shoud return void", () => {
        const request: JSON = <JSON><unknown>{
            "password": "khalid",
            "name":"",
            "phone":"",
            "mail":""
        };
        expect(obj.sign_up("123")).to.be.a("promise");
    });

    it("check added email is ok", async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "password": "",
            "name":"",
            "phone":"",
            "mail":""
        };
        await obj.sign_up("123").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("");
    });

    it('check added email is exist not to be added', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "password": "",
            "name":"",
            "phone":"",
            "mail":""
        };
        await obj.sign_up('123').then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("");
    });

    it('shoud return void', () => {
        const request: JSON = <JSON><unknown>{
            "password": "",
            "name":"",
            "phone":"",
            "mail":""
        };
        expect(obj.sign_up("123")).to.be.a("promise");
    });

    it('check added email is ok', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "password": "",
            "name":"",
            "phone":"",
            "mail":""
        };
        await obj.sign_up("123").then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("");
    });

    it('check added email is exist not to be added', async () => {
        let result: any;
        const request: JSON = <JSON><unknown>{
            "password": "",
            "name":"",
            "phone":"",
            "mail":""
        };
        await obj.sign_up(request).then((accepted) => result = accepted,
            (rejected) => console.log("Erron" + rejected));
        expect(result.state).to.equal("");
    });
});