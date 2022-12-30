import React from "react";
import { environment } from "../environment";
import {MdDelete} from "react-icons/md";

export default function FoodCard(props) {
    let deleteItem = async(e)=>{
        let result = await fetch(`${environment.env}/delete-item/${props.name}`, { method: 'DELETE' });
        let res = await result.json();
        if(res.state==="success"){
            window.location.reload();
        }else{
            return;
        }
    }
    return (
        <div className="Card">
            <img src={props.img} alt={props.name} />
            <div className="description">
                <div className="priceCard">
                    <h3>{props.name}</h3>
                    <h3>Stock:{props.quantity}</h3>
                    <h3 id="price">${props.price}</h3>
                </div>
                <p className="card-items">{props.describe}</p>
            </div>
            <div className="delete-btn" onClick={deleteItem}> <MdDelete/></div>
        </div>
    );
}