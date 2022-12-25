import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderCard(props) {
  //Use Navigate
  const NAV = useNavigate();
  function Deliver() {
    let NewOrder = [];
    NewOrder.push({
      Name: props.deliver,
      Id: props.deliverID,
      OrderID: props.OrderID,
    });
    NAV("/CustomerMenu/Payment", { state: NewOrder });
  }

  return (
    <div className="Container">
      <h1> {props.name}</h1>
      <div className="info">
        <p>{props.Count} Items</p>
        <p>{props.price} $ </p>
      </div>
      <p>{props.address}</p>
      <button onClick={Deliver}>Deliver This Order</button>
    </div>
  );
}
