import React from "react";
import "../admin.css";
import "./admindelivery.css";
import { environment } from "../../environment";
import { useNavigate, useLocation } from "react-router-dom";
import DeliveryCard from "./DeliveryCard";
function AdminDeliveryMen() {
  let nav = useNavigate();
  const location = useLocation();
  let [delivery, setDelivery] = React.useState([]);
  React.useEffect(() => {
    async function getFood() {
      let result = await fetch(`${environment.env}/getAllDelivery`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      let res = await result.json();
      setDelivery(res);
    }
    getFood();
    console.log("in effect")
  }, []);
  let Delivery = delivery.map((item) => {
    return (
      <DeliveryCard
        name={item.name}
        email={item.email}
        phone={item.phone}
        branch={item.branch}
        id={item.id}
      />
    );
  });
  return (
    <div className="admin-container">
      <h1 className="Logo2">Eat Nine</h1>
      <div className="side-bar">
        <div
          className="side-bar-link"
          onClick={() => nav("/admin", { state: location.state })}
        >
          Dash Board
        </div>
        <div
          className="side-bar-link"
          onClick={() => nav("/admin/menu-items", { state: location.state })}
        >
          Menu Items
        </div>
        <div
          className="side-bar-link active"
          onClick={() => nav("/admin/delivery-men", { state: location.state })}
        >
          Delivery men
        </div>
      </div>
      <div className="admin-main">
        <div className="add-new">
          <div className="font"
            onClick={() => nav("./add-new-delivery", { state: location.state })}
          > Add New Delivery
          </div>
        </div>
        <div className="del-container">{Delivery}</div>
      </div>
    </div>
  );
}

export default AdminDeliveryMen;
