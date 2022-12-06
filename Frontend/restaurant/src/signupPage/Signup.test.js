import React from "react";
import Signup, { ValidateEmail, Validatepassword, ValidatePhonenumber, passwordEncryption } from "./SignUp";
import { BrowserRouter } from "react-router-dom"
import { render, fireEvent } from "@testing-library/react"
import bcrypt from 'bcryptjs'
describe("Signup", () => {
    test("Email Validation function should pass", () => {
        const test = 'text@test.com'
        expect(ValidateEmail(test)).toBe(true);
    });
    test("Email Validation function shouldn't pass", () => {
        const test = 'text-test.com'
        expect(ValidateEmail(test)).toBe(false);
    });
    test("Password Validation function should pass", () => {
        const test = 'ay0ay1ay8ay'
        expect(Validatepassword(test)).toBe(true);
    });
    test("password Validation function shouldn't pass", () => {
        const test = 'ayayayay'
        expect(Validatepassword(test)).toBe(false);
    });
    test("Phone Number Validation function should pass", () => {
        const test = '01145481735'
        expect(ValidatePhonenumber(test)).toBe(true);
    });
    test("Phone Number Validation function shouldn't pass", () => {
        const test = '00145'
        expect(ValidatePhonenumber(test)).toBe(false);
    });

    test("password encryption should be always the same", () => {
        const test = "asd175ok"
        expect(passwordEncryption(test)).toBe(bcrypt.hashSync(test, '$2a$10$CwTycUXWue0Thq9StjUM0u'))
    });

    test('There should be  all fildes of the form  ', () => {
        const component = render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>);
        const element_1 = component.getByPlaceholderText("Name")
        expect(element_1).toBeInTheDocument();
        const element_2 = component.getByPlaceholderText("Password: at least 8 characters")
        expect(element_2).toBeInTheDocument();
        const element_3 = component.getByPlaceholderText("Email")
        expect(element_3).toBeInTheDocument();
        const element_4 = component.getByPlaceholderText("Phone Number")
        expect(element_4).toBeInTheDocument();
        const element_5 = component.getByPlaceholderText("City")
        expect(element_5).toBeInTheDocument();
        const element_6 = component.getByPlaceholderText("Address")
        expect(element_6).toBeInTheDocument();
    });

    test('name, email, city, address input should accept text', () => {
        const { getByPlaceholderText } = render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>);
        const nameinput = getByPlaceholderText("Name")
        expect(nameinput.value).toMatch("")
        fireEvent.change(nameinput, { target: { value: "Ahmed mohamed" } })
        expect(nameinput.value).toMatch("Ahmed mohamed")
        const emailinput = getByPlaceholderText("Email")
        fireEvent.change(emailinput, { target: { value: "testing@test.com" } })
        expect(emailinput.value).toMatch("testing@test.com")
        const cityinput = getByPlaceholderText("City")
        fireEvent.change(cityinput, { target: { value: "Alexandria" } })
        expect(cityinput.value).toMatch("Alexandria")
        const addressinput = getByPlaceholderText("Address")
        fireEvent.change(addressinput, { target: { value: "Egypt-Alexandria" } })
        expect(addressinput.value).toMatch("Egypt-Alexandria")
    })
});
