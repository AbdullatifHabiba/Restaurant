import React from "react";
import './admindelivery.css';
import { environment } from "../../environment";
import {MdDelete} from "react-icons/md";
function DeliveryCard(props) {
    let deleteItem = async(e)=>{
        let result = await fetch(`${environment}/delete-delivery/${props.id}`, { method: 'DELETE' });
        let res = await result.json();
        if(res.state==="success"){
            window.location.reload();
        }else{
            return;
        }
    }
  return (
    <div className="del-card">
      <details>
        <summary>
          <div className="name">{props.id}- {props.name}</div>
        </summary>

        <div className="Info">
          <p><span>E-mail:</span> {props.email}</p>
          <p><span>Phone:</span> {props.phone}</p>
          <p><span>Branch:</span> {props.branch}</p>
          <div className="delete-btn" onClick={deleteItem}> <MdDelete/></div>
        </div>
      </details>
    </div>
  );
}

export default DeliveryCard;
