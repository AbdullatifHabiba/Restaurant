import React from "react";
import { useLocation } from "react-router-dom";
import OrderCard from "./Components/OrderCard";
import { environment } from "../environment";
import "./order.css";
export default function OrdersDelivery() {
  const location = useLocation();
  let [Orders, setOrders] = React.useState([]);
  /*
      {
      payment: "Order1",
      price: 47,
      address: "15 tahreer street, cairo",
      order_id: "11111111",
    },
  */

  React.useEffect(() => {
    async function getOrders() {
      let result = await fetch(`${environment.env}/orders`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      let res = await result.json();
      setOrders(res);
    }
  }, []);

  let OrdersHTML = Orders.map((O) => {
    return (
      <OrderCard
        name={O.payment}
        price={O.price}
        address={O.address}
        deliver={location.state.name}
        deliverID={location.state.id}
        OrderID={O.order_id}
      />
    );
  });

  return (
    <div className="Main">
      <div className="Explore">
        <div className="CHeader">
          <p>
            Welcome, <span> {location.state.name}</span>
          </p>
        </div>
        <div className="Title">
          <h2>Choose Order To Deliver</h2>
          <p>
            Choose The order that you will deliver, just one order and can't
            cancel it.
          </p>
        </div>
        <div className="OrdersDelivery">{OrdersHTML}</div>
      </div>
    </div>
  );
}
