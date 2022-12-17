import React from "react";
import "./admin.css";
import { environment } from "../environment";
import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard";
function AdminItems() {
  let nav = useNavigate();
  let food = [];
  React.useEffect(() => {
    async function getFood() {
      let result = await fetch(`${environment.env}/menu`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      food = await result.json();
    }
    getFood();
  });
  let menuItems = food.map((item)=>{
    return(
      <FoodCard
            img={item.image}
            name={item.name}
            price={item.price}
            describe={item.describe}
          />
    )
  });
  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="side-bar-link" onClick={() => nav("/admin")}>
          Dash Board
        </div>
        <div className="side-bar-link active" onClick={() => nav("/admin/menu-items")}>Menu Items</div>
        <div className="side-bar-link">Link3</div>
      </div>
      <div className="admin-main">
      <div className="add-new">
        <div onClick={()=>nav("./add-new-item")}>Add new Item</div>
        <div>Delete Item</div>
        <div>Update Item</div>
      </div>
        <div className="food-container">
          <FoodCard
            img="../images/DoubleCheeseBurger.jfif"
            name="Sand"
            price="50"
            describe="lovely sandwich tasty and healthy"
          />
          <FoodCard
            img="../images/DoubleCheeseBurger.jfif"
            name="Sand"
            price="50"
            describe="lovely sandwich tasty and healthy"
          />
          <FoodCard
            img="../images/DoubleCheeseBurger.jfif"
            name="Sand"
            price="50"
            describe="lovely sandwich tasty and healthy"
          />
          <FoodCard
            img="../images/DoubleCheeseBurger.jfif"
            name="Sand"
            price="50"
            describe="lovely sandwich tasty and healthy"
          />
          <FoodCard
            img="../images/DoubleCheeseBurger.jfif"
            name="Sand"
            price="50"
            describe="lovely sandwich tasty and healthy"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminItems;
