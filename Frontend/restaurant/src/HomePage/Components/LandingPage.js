import React from "react";
import LandImg from"../Images/landPhoto.png"
import khs from"../Images/khs.png"
import {GoLocation} from "react-icons/go"

import { Link } from "react-router-dom";

export default function LandingPage(){

    return(
        <div className="Landing">
            <nav>
                <h1 className="Logo">Eat Nine</h1>
                <p> <Link to="/signin"> Sign In </Link> </p>
            </nav>
            <div className="mainLanding">
                <div className="left-sec">
                    <h1>Food</h1>
                    <p className="p1">Discover Restaurant</p>
                    <p className="p2">& Delicious Food</p>
                </div>
        <div >
            <img src={khs} alt="Landing page"/>
            <img src={LandImg} alt="Landing page"/>
        </div>

            </div>
            <p className="Loc"><GoLocation/> Egypt</p>
        </div>
    );
}