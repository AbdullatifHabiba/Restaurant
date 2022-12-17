import React from "react";
import { environment } from "../environment";
import './Payment.css';
import Hamburger from'../signinpage/Images/Hamburger-pana 1.png'
import Pizza_Maker from '../signinpage/Images/Pizza maker-cuate 1.png'
import {useLocation} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


export const ValidatePhonenumber = (number = "") =>
  /^01[0125][0-9]{8}$/gm.test(number) || number === "";
  export const VaidateAdress = (address = "") =>
  /^[A-Za-z0-9-#-,- ]*$/.test(address) || address === "";
export const VaidateCity = (city = "") =>
  /^[a-zA-Z]*$/.test(city) || city === "";

function Payment(props) {
  
  const location = useLocation();
  console.log(location.state)
  let [pay_method, setpay_method]=React.useState({paymentmethod:""});
  let [info, setInfo] = React.useState({ name: "", phone: "", city: "",address:"" });

  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }


 let handleSubmit = async (e) => {
  e.preventDefault();
  if (!ValidatePhonenumber(info.phone)) {
    window.alert("invalid phone number");
    return;
  }
  else if (!VaidateCity(info.city)){
    window.alert("invalid city");
    return;
  }
  else if (!VaidateAdress(info.address)){
    window.alert("invalid Address");
    return;
  }
  // payment with paypal
  if(pay_method==="paypal"){
  let result = await fetch(`${environment.env}/paypal`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        ...info
      }
    )

  });
  let message = await result.json();
  if (message.state === "accepted") {
    //nav("/signin");
    window.alert("Order vertification success");
  } else {
    window.alert(message.state);
  }
}
// payment in cash 
else {
  let result = await fetch(`${environment.env}/cash`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        ...info
      }
    )

  });
  let message = await result.json();
  if (message.state === "accepted") {
    window.alert("Order vertification success");
  } else {
    window.alert(message.state);
  }
}
}

  return (
    <div className="vertify_class">
      <div className='form_container'>
        <h1 className='vertify_header'>VERTIFY ORDER</h1>
        <form onSubmit={handleSubmit}>
          <div className="price">
          <p className="price_word">Price &ensp;</p>
          <p > &ensp;$82 + $5 &ensp;(Delivery)&ensp; = </p>
          <p className="price_total"> &ensp;$87 </p>
          </div>
          <div>
          <label for="name" >Name</label>
          <input  className="name" id="name" type="name"  name="name" required value={info.name} onChange={handleChange}/>
          </div>
          <div>
          <label for="phone_number">Phone Number</label>
          <input className="phone" id="phone" type="phone" name="phone" required value={info.phone} onChange={handleChange}/>
          </div>
          <div>
          <label for="city">City</label>
          <input className="city" id="city" type="city" name="city" required value={info.city} onChange={handleChange}/>
          </div>
          <div>
          <label for="address">Address</label>
          <input className="address" id="address" type="address" name="address" required value={info.address} onChange={handleChange}/>
          </div>
          <div className="but_container">
          <input className='btn-submit' title='button' type="submit" value="Paypal" name="Paypal" onClick={() => setpay_method("paypal")}/>
          <input className='btn-submit' title='button' type="submit" value="Cash" name="Cash" onClick={() => setpay_method("cash")} />
          </div>
        </form>
      </div>
      <div className='img-container'>
        <img className='image_1' name="image_1" src={Hamburger} alt="" />
        <img className='image_1' name="image_1" src={Pizza_Maker} alt="" />
      </div>
      </div>

  );

}



export default Payment;