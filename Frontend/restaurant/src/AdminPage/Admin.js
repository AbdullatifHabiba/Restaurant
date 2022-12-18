import React from "react";
import "./admin.css";
import { useNavigate,useLocation } from "react-router-dom";
function Admin() {
    let nav = useNavigate();
    const location = useLocation();
  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="side-bar-link active">Dash Board</div>
        <div className="side-bar-link" onClick={()=>nav("./menu-items",{state:location.state})}>Menu Items</div>
        <div className="side-bar-link" onClick={()=>nav("./delivery", {state:location.state})}>Delivery men</div>
      </div>
      <div className="admin-main">
        <div className="welcome-div">
          <h1 className="welcome-header">Welcome {location.state.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Admin;
