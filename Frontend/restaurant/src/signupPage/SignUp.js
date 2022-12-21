import React from "react";
import bcrypt from "bcryptjs";
import Burger from "./images/Hamburger-pana 1.png";
import pizza from "./images/Pizza maker-cuate 1.png";
import { environment } from "../environment";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export const ValidateEmail = (mail = "") =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail) || mail === "";
export const Validatepassword = (password = "") =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) || password === "";
export const ValidatePhonenumber = (number = "") =>
  /^01[0125][0-9]{8}$/gm.test(number) || number === "";
export const VaidateAdress = (address = "") =>
  /^[A-Za-z0-9-#-,- ]*$/.test(address) || address === "";
export const VaidateCity = (city = "") =>
  /^[a-zA-Z]*$/.test(city) || city === "";
export const passwordEncryption = (pass = "") =>
  bcrypt.hashSync(pass, "$2a$10$CwTycUXWue0Thq9StjUM0u");

function SignUp() {
  let nav = useNavigate();
  const [Error, setError] = React.useState(false);
  let [info, setInfo] = React.useState({
    name: "",
    mail: "",
    password: "",
    phone: "",
    city: "",
    address: "",
  });
  let [errors, setErrors] = React.useState({
    mail: false,
    password: false,
    phone: false,
    address: false,
    city: false,
  });

  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    if (e.target.name === "mail") {
      let flag = ValidateEmail(e.target.value);
      setErrors((prev) => {
        return { ...prev, mail: !flag };
      });
      console.log(errors.mail);
    } else if (e.target.name === "phone") {
      let flag = ValidatePhonenumber(e.target.value);
      setErrors((prev) => {
        return { ...prev, phone: !flag };
      });
    } else if (e.target.name === "password") {
      let flag = Validatepassword(e.target.value);
      setErrors((prev) => {
        return { ...prev, password: !flag };
      });
    } else if (e.target.name === "address") {
      let flag = VaidateAdress(e.target.value);
      setErrors((prev) => {
        return { ...prev, address: !flag };
      });
    } else if (e.target.name === "city") {
      let flag = VaidateCity(e.target.value);
      setErrors((prev) => {
        return { ...prev, city: !flag };
      });
    }
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (
      errors.mail ||
      errors.password ||
      errors.phone ||
      errors.address ||
      errors.city
    ) {
      return;
    }
    let result = await fetch(`${environment.env}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...info,
        password: passwordEncryption(info.password),
      }),
    });
    let message = await result.json();
    console.log(message);
    if (message.state === "accepted") {
      nav("/signin");
    } else {
      setError(()=>{return true;});
    }
  };
  
  return (
    <div className="sign-up">
      <div className="form-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="contain">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={info.name}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              className={errors.mail ? "error" : " "}
              type="mail"
              placeholder="Email"
              name="mail"
              required
              value={info.mail}
              onChange={handleChange}
            />
            <div className={errors.mail ? "error-message" : "hide"}>
              Invalid Email address: please enter a Valid one.
            </div>
          </div>
          <div className="contain">
            <input
              className={errors.password ? "error" : " "}
              type="password"
              placeholder="Password: at least 8 characters"
              name="password"
              required
              value={info.password}
              onChange={handleChange}
            />
            <div className={errors.password ? "error-message" : "hide"}>
              Invalid password: password should consist of at least 8 characters
              with at least 1 digit and 1 alphabetic character (all in small
              case).
            </div>
          </div>
          <div className="contain">
            <input
              className={errors.phone ? "error" : " "}
              type="text"
              placeholder="Phone Number"
              name="phone"
              required
              value={info.phone}
              onChange={handleChange}
            />
            <div className={errors.phone ? "error-message" : "hide"}>
              Invalid phone number, please enter a valid 11-digit phone number.
            </div>
          </div>
          <div className="contain">
            <input
              className={errors.city ? "error" : " "}
              type="text"
              placeholder="City"
              name="city"
              required
              value={info.city}
              onChange={handleChange}
            />
            <div className={errors.city ? "error-message" : "hide"}>
              Invalid City name: please enter a Valid one.
            </div>
          </div>
          <div className="contain">
            <input
              className={errors.address ? "error" : " "}
              type="text"
              placeholder="Address"
              name="address"
              required
              value={info.address}
              onChange={handleChange}
            />
            <div className={errors.address ? "error-message" : "hide"}>
              Invalid address: address should contain only alphabets, digits and
              the # symbol.
            </div>
          </div>
          <input
            className="btn-submit"
            type="submit"
            value="Sign Up"
            name="Sign Up"
          />
        </form>
      </div>
      <div className="img-container">
        <img className="hamburger" src={Burger} alt="burger" />
        <img className="pizza" src={pizza} alt="pizza maker" />
      </div>
      {Error &&<div className='ErrorPOP'>
        <div className='PopUP'>
          <p>This Email Is in use !!</p>
          <button onClick={()=>{setError(()=>{return false;})}}>OK</button>
        </div>
      </div> }
    </div>
  );
}

export default SignUp;
