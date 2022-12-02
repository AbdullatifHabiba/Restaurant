import React from "react";
import LandingTitle from "./LandingTiltle";
import delivery from "../Images/Delivery.png";
import burger from "../Images/burger.png";
export default function Services(){

    return(
        <div className="Services">
            <LandingTitle
            title="Check our services and decide what to do!"
            p1="Our restaurant is very good"
            p2="Our Food is very high quality"
            p3="Delivery any where in egypt"
            />
            <div className="container">
                <div className="card1">
                    <img src={burger} alt="Burger"/>
                    <div className="disc">
                        <h2>Delicious fast food</h2>
                        <p>We make delicious and fast food. </p>
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="card2">
                    <img src={delivery} alt="Delivery"/>
                    <h2>Home delivery
                        at your door steps</h2>
                    <p>any time you get hungerty just call us. </p>
                    <div className="underline"></div>
                </div>
            </div>
        </div>
    );
}

