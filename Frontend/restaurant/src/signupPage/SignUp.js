import React from "react";
import bcrypt from 'bcryptjs'
import Burger from "./images/Hamburger-pana 1.png";
import pizza from "./images/Pizza maker-cuate 1.png";
import { useNavigate } from "react-router-dom";
import "./signup.css";
function SignUp() {
  let nav = useNavigate();
  let [info, setInfo] = React.useState({
    name: "",
    mail: "",
    password: "",
    phone: "",
    city: "",
    address: "",
  });
  let validateInfo = (data)=>{
    //email regex
    if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.mail))){
      window.alert("invalid Email address!");
      return false;
    }
    //password regex
    if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password))){
      window.alert("Invalid password: at least 8 characters with at least 1 digit and 1 letter");
      return false;
    }
    //phone number regex
    if(!(/^01[0-2]\d{1,8}$/.test(data.phone))){
      window.alert("invalid phone number!");
      return false;
    }
    return true;
  }
  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateInfo(info)){
      return;
    }
    let result = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...info,
        password: bcrypt.hashSync(info.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
      }),
    });
    let message = result.json();
    console.log(message.m);
    if (message === "accepted") {
      console.log("signed up successfully!");
      nav("/Signin");
    } else {
      window.alert(`${message}`);
    }
  };
  return (
    <div className="sign-up">
      <div className="form-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="mail"
            placeholder="Email"
            name="mail"
            required
            value={info.mail}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password: at least 8 characters"
            name="password"
            required
            value={info.password}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            required
            value={info.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            required
            value={info.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            required
            value={info.address}
            onChange={handleChange}
          />
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
    </div>
  );
}

export default SignUp;
