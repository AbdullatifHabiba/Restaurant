import React from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import { environment } from "../../environment";

import { FaChevronCircleRight } from "react-icons/fa"
export default function Explore() {
    let [Food,setFood] = React.useState([]);

    React.useEffect(() => {
        async function getFood() {
            let result = await fetch(`${environment.env}/homemenu`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let res = await result.json();
            setFood(res);
        }
        getFood();
    },[]);


    // img="../Images/sand.png"
    let FoodHTML = Food.map((item) => {
        return (
            <FoodCard
            img={item.image_location}
            name={item.name}
            price={item.price}
            describe={item.description}
            />
        );
    })
    return (
        <div className="Explore">
            <div className="Title">
                <h2>Explore Our Foods</h2>
                <p>This is a sample of our food, to see all our meals and order any thing just
                    <Link to="/signin"> Sign In </Link> to order</p>
            </div>
            <div className="container">
                {FoodHTML}
            </div>
            <div className="more">
                <FaChevronCircleRight />
                <Link to="/signin"> Sign In </Link>
            </div>
        </div>
    );
}