import React from "react";
import { environment } from "../environment";
import './Payment.css';
import Hamburger from'../signinpage/Images/Hamburger-pana 1.png'
import Pizza_Maker from '../signinpage/Images/Pizza maker-cuate 1.png'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export const ValidatePhonenumber = (number = "") =>
  /^01[0125][0-9]{8}$/gm.test(number) || number === "";
  export const VaidateAdress = (address = "") =>
  /^[A-Za-z0-9-#-,- ]*$/.test(address) || address === "";
export const VaidateCity = (city = "") =>
  /^[a-zA-Z]*$/.test(city) || city === "";

function Payment() {
  let [data, setdata]=({}) ;
  React.useEffect(()=>{
    async function getdata(){
      let result = await fetch(`${environment.env}/customer_data`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            id:location.state[location.state.length-1].Count
          }
        )
      });
      let res = await result.json();
      setdata(res);
    } 
    getdata();
  });
    //const data ={name:"ayman mohamed", phone:"01145481793",city:"alex", address:"alexandria egypt"};
  let nav = useNavigate();
  const location = useLocation();
  const price = location.state[location.state.length-2].Count;
  const [Error, setError] = React.useState(false);
  let [pay_method, setpay_method]=React.useState({paymentmethod:""});

  let [info, setInfo] = React.useState({ name: data.name, phone: data.phone, city: data.city,address:data.address });
  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

 let handleSubmit = async (e) => {
  e.preventDefault();
  if (!ValidatePhonenumber(info.phone)) {
    setError(()=>{return true;})
    return;
  }
  else if (!VaidateCity(info.city)){
    setError(()=>{return true;})
    return;
  }
  else if (!VaidateAdress(info.address)){
    setError(()=>{return true;})
    return;
  }
  let UserState={name:location.state[location.state.length-1].Name,
                 id:location.state[location.state.length-1].Count};
  // payment with paypal
  if(pay_method==="paypal"){
    
  let result = await fetch(`${environment.env}/paypal`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        arr:location.state, 
        info:info
      }
    )
  });
  let message = await result.json();
    if (message.state === "accepted") {
      nav("/CustomerMenu",{state:UserState});
    } else {
      setError(()=>{return true;})
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
        arr:location.state,
        info
      }
    )

  });
  let message = await result.json();
  if (message.state === "accepted") {
    nav("/CustomerMenu",{state:UserState});
  } else {
    setError(()=>{return true;})
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
          <p > &ensp;${price} + $5 &ensp;(Delivery)&ensp; = </p>
          <p className="price_total"> &ensp;${price+5} </p>
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
          <div className="paym_but_container">
          <input className='btn-submit' title='button' type="submit" value="Paypal" name="Paypal" onClick={() => setpay_method("paypal")}/>
          <input className='btn-submit' title='button' type="submit" value="Cash" name="Cash" onClick={() => setpay_method("cash")} />
          </div>
        </form>
      </div>
      <div className='img-container'>
        <img className='image_1' name="image_1" src={Hamburger} alt="" />
        <img className='image_1' name="image_1" src={Pizza_Maker} alt="" />
      </div>
      {Error &&<div className='ErrorPOP'>
        <div className='PopUP'>
          <p>Enterd data is not correct !!</p>
          <button onClick={()=>{setError(()=>{return false;})}}>OK</button>
        </div>
      </div> }
      </div>

  );

}



export default Payment;