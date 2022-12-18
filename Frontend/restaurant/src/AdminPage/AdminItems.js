import React from "react";
import "./admin.css";
import { environment } from "../environment";
import { useNavigate, useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";
function AdminItems() {
  let nav = useNavigate();
  const location = useLocation();
  let [food,setFood] = React.useState([]);
  React.useEffect(() => {
    async function getFood() {
      let result = await fetch(`${environment.env}/menu`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      let res = await result.json();
      setFood(res);
    }
    getFood();
  },[]);
  let menuItems = food.map((item)=>{
    return(
      <FoodCard
            img={item.image_location}
            name={item.name}
            price={item.price}
            quantity={item.available}
            describe={item.describe}
          />
    )
  });
  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="side-bar-link" onClick={() => nav("/admin",{state:location.state})}>
          Dash Board
        </div>
        <div className="side-bar-link active" onClick={() => nav("/admin/menu-items",{state:location.state})}>Menu Items</div>
        <div className="side-bar-link">Delivery men</div>
      </div>
      <div className="admin-main">
      <div className="add-new">
        <div onClick={()=>nav("./add-new-item",{state:location.state})}>Add new Item</div>
        <div>Delete Item</div>
        <div>Update Item</div>
      </div>
        <div className="food-container">
          {menuItems}
        </div>
      </div>
    </div>
  );
}

export default AdminItems;
