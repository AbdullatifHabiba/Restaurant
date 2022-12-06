import React from "react";
import Signin, { ValidateEmail, passwordEncryption, handleSubmit } from "./Signin";
import { BrowserRouter } from "react-router-dom"
import { render, fireEvent } from "@testing-library/react"
import bcrypt from 'bcryptjs'

describe("Signin", () => {
    test("Email Validation function should pass", () => {
        const test = 'text@test.com'
        expect(ValidateEmail(test)).toBe(true);
    });
    test("Email Validation function shouldn't pass", () => {
        const test = 'text-test.com'
        expect(ValidateEmail(test)).toBe(false);
    });
    test("password encryption should be always the same", () => {
        const test = "asd175ok"
        expect(passwordEncryption(test)).toBe(bcrypt.hashSync(test, '$2a$10$CwTycUXWue0Thq9StjUM0u'))
    });
    test('There should be an input filed with an E-Mail placeholder  ', () => {
        const component = render(
            <BrowserRouter>
                <Signin />
            </BrowserRouter>);
        const element = component.getByPlaceholderText("E-Mail")
        expect(element).toBeInTheDocument();
    });
    test('There should be an input filed with an Password placeholder  ', () => {
        const component = render(
            <BrowserRouter>
                <Signin />
            </BrowserRouter>);
        const element = component.getByPlaceholderText("Password")
        expect(element).toBeInTheDocument();
    });
    test('There should be an Check boxs for customer, admin and deliveryman  ', () => {
        const component = render(
            <BrowserRouter>
                <Signin />
            </BrowserRouter>);
        const element_1 = component.getByText("Customer")
        const element_2 = component.getByText("Delivery_Man")
        const element_3 = component.getByText("Admin")
        expect(element_1 && element_2 && element_3).toBeInTheDocument();
    });
    test('email input should accept text', () => {
        const { getByPlaceholderText } = render(
            <BrowserRouter>
                <Signin />
            </BrowserRouter>);
        const emailinput = getByPlaceholderText("E-Mail")
        expect(emailinput.value).toMatch("")
        fireEvent.change(emailinput, { target: { value: "testing@test.com" } })
        expect(emailinput.value).toMatch("testing@test.com")
    });
    test("hello", () => {
        const mokfn = jest.fn();
        const { getByTitle, getByPlaceholderText, getByText } = render(
            <BrowserRouter>
                <Signin handleSubmit={mokfn} />
            </BrowserRouter>);
        const emailinput = getByPlaceholderText("E-Mail")
        fireEvent.change(emailinput, { target: { value: "testing@test.com" } })
        const passinput = getByPlaceholderText("Password")
        fireEvent.change(passinput, { target: { value: "asd145asd" } })
        const submit_but = getByText("Sign In")
        fireEvent.submit(submit_but);
        // expect(mokfn).toHaveBeenCalledTimes(1);
    });

});
