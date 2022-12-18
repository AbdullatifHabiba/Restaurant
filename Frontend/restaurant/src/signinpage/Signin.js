import React from 'react';
import Hamburger from './Images/Hamburger-pana 1.png'
import Pizza_Maker from './Images/Pizza maker-cuate 1.png'
import Admin from './Images/Admin-bro 1.png'
import Customer from './Images/Eating healthy food-rafiki 1.png'
import Delivery_Man from './Images/Delivery-bro (1) 1.png'
import './Signin.css';
import bcrypt from 'bcryptjs'
import { Link, useNavigate } from "react-router-dom";
import { environment } from '../environment';

export const ValidateEmail = (mail = "") => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail));
export const passwordEncryption = (pass = "") => bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u');

function Signin() {

  const [User, setuser] = React.useState("customer");
  const [Error, setError] = React.useState(false);

  let [info, setInfo] = React.useState({ mail: "", password: "", user: "" });
  let nav = useNavigate();
  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  info.user = User;
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(info.mail)) {
      setError(()=>{return true;})
      return;
    }

    let result = await fetch(`${environment.env}/signin`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          ...info,
          password: passwordEncryption(info.password)
        }
      )

    });
    let message = await result.json();
    if (message.state === "accepted") {
      //route to Main page
      let UserState={name:message.name,id:message.id};
      if(User==="customer"){
        nav("/CustomerMenu",{state:UserState});
      }
      else if(User==="admin"){
        nav("/admin",{state:UserState});
      }
    } else {
      setError(()=>{return true;})
    }
  }
  return (
    <div className='sign-in'>
      <div className='form-container'>
        <h1 className='sign-in-header'>Sign Into Eat Nine</h1>
        <form onSubmit={handleSubmit}>
          <input type="mail" placeholder="E-Mail" name="mail" required value={info.mail} onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" required value={info.password} onChange={handleChange} />
          <div className='check-boxs'>
            <div >
              <img className="image_2" name="image_2" src={Customer} alt="" />
              <input className="checkbox" type="checkbox" checked={User === "customer"} onChange={() => setuser("customer")} /> Customer</div>
            <div>
              <img className='image_2' name="image_2" src={Delivery_Man} alt="" />
              <input className="checkbox" type="checkbox" checked={User === "deliveryman"} onChange={() => setuser("deliveryman")} /> Delivery_Man</div>
            <div>
              <img className='image_2' name="image_2" src={Admin} alt="" />
              <input className="checkbox" type="checkbox" checked={User === "admin"} onChange={() => setuser("admin")} /> Admin </div>
          </div>
          <input className='btn-submit' title='button' type="submit" value="Sign In" name="Sign In" />
          <div className='signup'>
            <p>You don't have Acount?</p>
            <Link to="/signUp"> Sign up </Link>
          </div>
        </form>

      </div>
      <div className='img-container'>
        <img className='image_1' name="image_1" src={Hamburger} alt="" />
        <img className='image_1' name="image_1" src={Pizza_Maker} alt="" />
      </div>
      {Error &&<div className='ErrorPOP'>
        <div className='PopUP'>
          <p>Email or Password are not correct !!</p>
          <button onClick={()=>{setError(()=>{return false;})}}>OK</button>
        </div>
      </div> }
      

    </div>
  )
}

export default Signin