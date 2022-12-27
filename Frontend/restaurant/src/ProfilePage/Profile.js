import React from "react";
import './Profile.css';
import { useLocation} from 'react-router-dom';
import { environment } from "../environment";


function Profile() {
  const location = useLocation();
  let [info,setinfo] = React.useState({});
  React.useEffect(()=>{
    async function getdata(){
      let result = await fetch(`${environment.env}/customer_data`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            id:location.state

          }
        )
      });
      let res = await result.json();
      setinfo(res);
    } 
    getdata();

  },[]);

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
            <p className="data" id="name" type="name" name="name" >{info.name}</p>
            <p className="data" id="email" type="email" name="email" >{info.email}</p>
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