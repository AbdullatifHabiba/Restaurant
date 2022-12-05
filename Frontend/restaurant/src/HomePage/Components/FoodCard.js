import React from "react";

export default function FoodCard(props) {

    return (
        <div className="Card">
            <img src={props.img} alt={props.name} />
            <div className="description">
                <div className="priceCard">
                    <h3>{props.name}</h3>
                    <h3 id="price">${props.price}</h3>
                </div>
                <p>{props.describe}</p>
            </div>
        </div>
    );
}