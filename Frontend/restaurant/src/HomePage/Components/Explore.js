import React from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import { environment } from "../../environment";

import { FaChevronCircleRight } from "react-icons/fa"
export default function Explore() {
    const Food = [
        { name: "CheeseBurgerDelux", price: "15", describe: "delicious", img: "../Images/CheeseBurgerDelux.jfif" },
        { name: "Beefburger", price: "10", describe: "amazing", img: "../Images/Beefburger.jfif" },
        { name: "Bignine", price: "20", describe: "wonderful", img: "../Images/Bignine.jfif" },
        { name: "DoubleCheeseBurger", price: "15", describe: "tasty", img: "../Images/DoubleCheeseBurger.jfif" },
        { name: "Double-Chicken", price: "15", describe: "super", img: "../Images/Double-Chicken.jfif" },
        { name: "Royal", price: "20", describe: "priceless", img: "../Images/Royal.jfif" }
    ];

    React.useEffect(() => {
        async function getFood() {
            let result = await fetch(`${environment.env}/homemenu`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            Food = await result.json();
        }
        getFood();
    });


    // img="../Images/sand.png"
    let FoodHTML = Food.map((item) => {
        return (
            <FoodCard
                img={item.img}
                name={item.name}
                price={item.price}
                describe={item.describe}
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