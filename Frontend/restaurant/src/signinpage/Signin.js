import React from 'react';
import Hamburger from './Images/Hamburger-pana 1.png'
import Pizza_Maker from './Images/Pizza maker-cuate 1.png'
import Admin from './Images/Admin-bro 1.png'
import Customer from './Images/Eating healthy food-rafiki 1.png'
import Delivery_Man from './Images/Delivery-bro (1) 1.png'
import './Signin.css';
import bcrypt from 'bcryptjs'
import { Link , useNavigate} from "react-router-dom";
function Signin() {
  
  const [User, setuser] = React.useState("customer");
  let [info,setInfo] = React.useState({mail:"",password:"",user:""});
  let nav = useNavigate();
  let handleChange =  (e)=>{
    setInfo((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  let handleSubmit = async (e)=>{
    info.password = bcrypt.hashSync(info.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
    e.preventDefault();
    if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(info.mail))){
      window.alert("invalid email address");
      return;
    }

    let result = await fetch('../signin', {
      method: "get",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    let message = result.json();
    console.log(message.status);
    if(message.status === 200){
      //route to Main page
      nav("/Page");
      console.log("signed in successfully!")
    }else {
      window.alert("Email or Password not correct")
    }
  }
  return (
    <div className='sign-in'>
        <div className='form-container'>
            <h1 className='sign-in-header'>Sign Into Eat Nine</h1>
            <form onSubmit={handleSubmit}>
                <input type="mail" placeholder="E-Mail" name="mail" required value={info.mail} onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" required value={info.password} onChange={handleChange}/>
                <div className='check-boxs'>
                <div >
                <img className="image_2" name="image_2" src = {Customer} alt="" />
                <input className="checkbox" type="checkbox" checked={User === "customer"} onChange={() => setuser("customer")} /> Customer</div>
                <div>
                <img className='image_2' name="image_2" src = {Delivery_Man} alt="" />
                <input className="checkbox" type="checkbox" checked={User === "deliveryman"} onChange={() => setuser("deliveryman")} /> Delivery_Man</div>
                <div>
                <img className='image_2' name="image_2" src = {Admin} alt="" />
                <input className="checkbox" type="checkbox" checked={User === "admin"} onChange={() => setuser("admin")} /> Admin </div>
                </div>
                <input className='btn-submit' type="submit" value="Sign In" name="Sign In" />
                <div className='signup'>
                <p>You don't have Acount?</p> 
                <Link to="./SignUp"> Sign up </Link>
                </div>
            </form>  
          
        </div>
        <div className='img-container'>
                <img className='image_1' name="image_1" src = {Hamburger} alt="" />
                <img className='image_1' name="image_1" src = {Pizza_Maker} alt="" />
        </div>    
    </div>
  )
}

export default Signin