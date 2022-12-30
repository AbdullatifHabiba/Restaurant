import React from 'react'
import "../admin.css";
import bcrypt from "bcryptjs";
import { environment } from "../../environment";
import { useNavigate, useLocation } from "react-router-dom";
function AddDeliveryman() {
    let nav = useNavigate();
    const location = useLocation();
    let [data, setdata] = React.useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      Branch_id:""
    });
    let [error, setError] = React.useState(false);
    let [succ, setSucc] = React.useState(false);
    let handleSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(`${environment.env}/addDelivery`, {
        method: "POST",
        body: JSON.stringify({...data,password:bcrypt.hashSync(data.password, "$2a$10$CwTycUXWue0Thq9StjUM0u")}),
      });
      let message = await result.json();
      console.log(message);
      if (message.state === "success") {
        setSucc(true);
      } else {
        setError(true);
      }
    };
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
        <div className="admin-items-main">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setdata({ ...data, password: e.target.value })}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={data.phone}
              onChange={(e) => setdata({ ...data, phone: e.target.value })}
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={data.branch}
              onChange={(e) => setdata({ ...data, branch: e.target.value })}
            />
            <input
              className="btn-submit"
              type="submit"
              value="submit"
              onClick={handleSubmit}
            />
          </form>
          {succ && (
            <div className="ErrorPOP Success">
              <div className="PopUP">
                <p className="green">delivery added successfully</p>
                <button
                  className="back-green"
                  onClick={() => {
                    setSucc(() => {
                      return false;
                    });
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          {error && (
            <div className="ErrorPOP">
              <div className="PopUP">
                <p>There was an error, the delivery wasn't added!!</p>
                <button
                  onClick={() => {
                    setError(() => {
                      return false;
                    });
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      )
}

export default AddDeliveryman