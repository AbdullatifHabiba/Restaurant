import React from "react";
import "./admin.css";
import { useNavigate, useLocation } from "react-router-dom";
function Admin() {
  let nav = useNavigate();
  const location = useLocation();
  return (
    <div className="admin-container">
      <h1 className="Logo2">Eat Nine</h1>
      <div className="side-bar">
        <div className="side-bar-link active">Dash Board</div>
        <div className="side-bar-link" onClick={() => nav("./menu-items", { state: location.state })}>Menu Items</div>
        <div className="side-bar-link" onClick={() => nav("/admin/delivery-men", { state: location.state })}>Delivery men</div>
      </div>
      <div className="admin-main">
        <div className='CHeader'>
          <p>Welcome, <span> {location.state.name}</span> </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
