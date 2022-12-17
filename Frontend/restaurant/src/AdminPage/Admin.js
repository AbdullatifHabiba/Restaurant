import React from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";
function Admin() {
    let nav = useNavigate();
  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="side-bar-link active">Dash Board</div>
        <div className="side-bar-link" onClick={()=>nav("./menu-items")}>Menu Items</div>
        <div className="side-bar-link" onClick={()=>nav("./delivery")}>Delivery men</div>
      </div>
      <div className="admin-main">
        <div className="welcome-div">
          <h1 className="welcome-header">Welcome Admin</h1>
        </div>
      </div>
    </div>
  );
}

export default Admin;
