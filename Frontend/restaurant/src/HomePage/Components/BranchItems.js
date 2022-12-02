import React from "react";
import {GoLocation} from "react-icons/go"
import br1 from "../Images/br1.png"
import br2 from "../Images/br2.png"
import { Link } from "react-router-dom";
export default function BrancheItem(props){

    return (
        <div className="BranchCard">
            <div className="BranchCardBack">
                <img src={props.one?br1:br2} alt="food"/>
            </div>
            <div className="cardTitle">
                <h1>{props.name}</h1>
                <p>{props.disc}</p>
                <h3> <GoLocation/> {props.loc}</h3>
                <p className="check"> <Link to="/signin"> Check Menu </Link></p>
            </div>
        </div>
    );
}