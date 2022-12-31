import React from "react";
import './DeliveryOrder.css';
import { useLocation , useNavigate} from 'react-router-dom';
import { environment } from "../environment";

function DeliveryOrder() {
  let nav = useNavigate();
  const location = useLocation();
  let [Food, setFood] = React.useState([]);
  let [info,setinfo] = React.useState({});
  let [Order,setorder]=React.useState([]);
  let ordobj = {name:"", amount:"", price:""};
  //let [ord,setord]=React.useState([]);
  let ord=[];
  let[assigned, setassigned] =React.useState({});
  React.useEffect(()=>{

    async function getFood() {
      let result = await fetch(`${environment.env}/menu`, {
          method: "get",
          headers: {
              'Content-type': 'application/json'
          }
      });
      let res = await result.json();
      setFood(res);
  }

    async function getorderdata(){
      let result = await fetch(`${environment.env}/order-data`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            orderid:location.state.OrderID
          }
        )
      });
      let res = await result.json();
      setorder(res);
    } 
    getorderdata();

    async function getcustomerdata(){
      let result = await fetch(`${environment.env}/customerData`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            orderid:location.state.OrderID
          }
        )
      });
      let res = await result.json();
      setinfo(res);
    } 
    getcustomerdata();

    async function assignorder(){
      let result = await fetch(`${environment.env}/assignorder`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            order_id:location.state.OrderID,
            delivery_id:location.state.Id

          }
        )
      });
      let res = await result.json();
      setassigned(res);
    } 
    assignorder();
    getFood();

  },[]);


  let total_price = 0 ;
  let total_amount = 0 ;
  console.log(Order);
  console.log(Food);
        for(let j = 0; j< Order.length; j++){
            for(let i = 0; i<Food.length; i++){
              if(Food[i].item_id === Order[j].item_id){
                console.log("here", i)
                ordobj={name:Food[i].name,amount:Order[j].amount_required,price:Food[i].price};
                ord.push(ordobj);
                console.log(total_price);/////////////////////////
                total_price = total_price + Food[i].price*Order[j].amount_required 
                total_amount = total_amount + Order[j].amount_required 
              }
            }}


  let OrderHTML = ord.map((item) => {
    return (
        <div className="order_container">
          <h2 className="item">{item.name}</h2>
          <h2 className="item"> </h2>
          <h2 className="item">{item.amount}</h2>
          <h2 className="item">{item.price}</h2>
        </div>
    );
})


let on_click = async () => {
  let result = await fetch(`${environment.env}/delivered`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        deliveryid:location.state.Id,
        order_id:location.state.OrderID
      }
    )
  });
  let message = await result.json();
  if(message.state==="accepted"){
    nav("/orders")
  }
}

  return (
    <div className="Order_delivery">
      <div>
        <h2 className="logo_text_container">Eat Nine</h2>
      </div>
      <div>
      <div className="container">
        <h1 className='vertify_header'>Customer info</h1>
        <form >
          <div>
            <p >Name &nbsp; : </p>
            <p> Email &nbsp; :</p>
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
      </div>
      <div>
      <h1 className='vertify_header'>Order info</h1>
      <div className="H_order_container">
              <h2 className="item_1">Name</h2>
              <h2 className="item_1"> </h2>
              <h2 className="item_1">Amount</h2>
              <h2 className="item_1">Price</h2>
            </div>
            {OrderHTML}
            <div className="H_order_container">
              <h2 className="item_1">Total</h2>
              <h2 className="item"> </h2>
              <h2 className="item">{total_amount}</h2>
              <h2 className="item">{total_price}</h2>
            </div>
      </div>
      <div className="paym_but_container">
          <input className='btn-submit' title='button' type="submit"
           value="Order deliverd"onClick={on_click} name="Edit Profile Data" />
        </div>
      </div>
    </div>

  );

}

export default DeliveryOrder;