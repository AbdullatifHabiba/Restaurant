import React from "react";
import './Profile.css';
import { useLocation} from 'react-router-dom';

function Profile() {
  const location = useLocation();
  let [data,setdata] = React.useState({});
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

  },[]);
  //const data ={name:"ayman mohamed",email:"ayman2001@gmail.com", phone:"01145481793",city:"alex", address:"alexandria egypt"};
  let [info]
   = React.useState({ name: data.name,email:data.email, phone: data.phone, city: data.city,address:data.address });

  return (
    <div className="profile_class">
      <div>
        <h1 className="logo">Eat Nine</h1>
      </div>
      <div className="container">
      <h1 className='vertify_header'>Profile Page</h1>
        <form >
        <div>
          <p >Name &nbsp; : </p>
          <p> Emai &nbsp; :</p>
          <p>Phone Number &nbsp;:</p>
          <p >City&nbsp; :</p>
          <p >Address&nbsp; :</p>
          </div>
          <div className="contain">
          <p className="data" id="name" type="name"  name="name" >{info.name}</p>
          <p className="data" id="email" type="email"  name="email" >{info.email}</p>
          <p className="data" id="phone" type="phone" name="phone" >{info.phone}</p>
          <p className="data" id="city" type="city" name="city"  >{info.city}</p>
          <p className="data" id="address" type="address" name="address" >{info.address}</p>
          </div>
        </form>
        <div className="paym_but_container">
          <input className='btn-submit' title='button' type="submit" value="Edit Profile Data" name="Edit Profile Data" />
          </div>
          </div>
      </div>

  );

}



export default Profile;