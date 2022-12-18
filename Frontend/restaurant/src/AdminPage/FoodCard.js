import React from "react";

export default function FoodCard(props) {

    return (
        <div className="Card card-items">
            <img className="card-items" src={props.img} alt={props.name} />
            <div className="description card-items">
                <div className="priceCard card-items">
                    <h3 className="card-items">{props.name}</h3>
                    <h3 className="card-items" id="price card-items">${props.price}</h3>
                </div>
                <p className="card-items">{props.describe}</p>
            </div>
        </div>
    );
}