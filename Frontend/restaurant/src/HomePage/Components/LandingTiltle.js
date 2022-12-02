import React from "react";
export default function LandingTitle(props){
//GET request 5000, empty body
// /homemenu
    return(
        <div className="LandingTitle">
            <h2>{props.title}</h2>
            <div className="LandingDetails">
            <p>{props.p1} </p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            </div>
        </div>
    )
}