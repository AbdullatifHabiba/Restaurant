import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OrderCard from "./Components/OrderCard";
import { environment } from "../environment";
import "./order.css";
export default function OrdersDelivery() {
  const location = useLocation();
  let [Orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    async function getOrders() {
      let result = await fetch(`${environment.env}/OrdersDelivery`, {
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
        name={O.name}
        price={O.price}
        Count={O.Count}
        address={O.address}
        deliver={location.state.name}
        deliverID={location.state.id}
        OrderID={O.OrderID}
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
