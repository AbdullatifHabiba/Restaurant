import React from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { environment } from "../environment";
function AddItem() {
    let nav = useNavigate();
    const location = useLocation();
    const [data, setdata] = React.useState({name:"",describe:"",price:""});
    const [selectedFile, setSelectedFile] = React.useState(null);
    let func = ()=>{console.log(selectedFile)}
    let handleSubmit = async(e)=>{
        e.preventDefault();
        let form = new FormData();
        form.append("name",data.name);
        form.append("describe",data.describe);
        form.append("price",data.price);

        form.append("File",selectedFile);
        let result = await fetch(`${environment.env}/additem`, {
            method: "POST",
            body: form,
          });
          let message = await result.json();
          console.log(message);
          if(message.state === "success"){
            window.alert("item added successfully");
          }
          else{
            window.alert(message.state)
          }
    }
  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="side-bar-link" onClick={() => nav("/admin",{state:location.state})}>Dash Board</div>
        <div className="side-bar-link active" onClick={() => nav("/admin/menu-items",{state:location.state})}>
          Menu Items
        </div>
        <div className="side-bar-link">
        Delivery men
        </div>
      </div>
      <div className="admin-items-main">
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of new Item"
          value={data.name}
          onChange={(e) => setdata({...data,name:e.target.value})}
        />
        <input
          type="text"
          name="describe"
          placeholder="Description of new Item"
          value={data.describe}
          onChange={(e) => setdata({...data,describe:e.target.value})}
        />
        <input
          type="text"
          name="price"
          placeholder="Price of new Item"
          value={data.price}
          onChange={(e) => setdata({...data,price:e.target.value})}
        />

        <input
          type="file"
          name="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <input className="btn-submit" type="submit" value="submit" onClick={func}/>
      </form>
      </div>
    </div>
  );
}

export default AddItem;
