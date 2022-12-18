import React from 'react';

import './CustomerMenu.css';
import FoodCard from './Components/FoodCard';
import { environment } from '../environment';
import { IoFastFoodOutline } from 'react-icons/io5';
import { BsFillCartCheckFill} from 'react-icons/bs';
let Order=[];

export default function CustomerMenu() {
    const Food = [
        { name: "CheeseBurgerDelux", price: "15", describe: "delicious", img: "../Images/CheeseBurgerDelux.jfif",quantity:"3" },
        { name: "Beefburger", price: "10", describe: "amazing", img: "../Images/Beefburger.jfif",quantity:"70" },
        { name: "Bignine", price: "20", describe: "wonderful", img: "../Images/Bignine.jfif",quantity:"90" },
        { name: "DoubleCheeseBurger", price: "15", describe: "tasty", img: "../Images/DoubleCheeseBurger.jfif",quantity:"190" },
        { name: "Double-Chicken", price: "15", describe: "super", img: "../Images/Double-Chicken.jfif",quantity:"120" },
        { name: "Royal", price: "20", describe: "priceless", img: "../Images/Royal.jfif",quantity:"90" }
    ];

    React.useEffect(() => {
        async function getFood() {
            let result = await fetch(`${environment.env}/menu`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            // Food = await result.json();
        }
        getFood();
    });

    
    React.useEffect(()=>{

        for(let i=0;i<Food.length;i++){
            Order[i]={Name:Food[i].name,CNT:0};
        }
    },{})
    
    function GetIndex(NN){
        for(let i=0;i<Food.length;i++){
            if(Order[i].Name===NN){
                return i;
            }
        }
    }
    console.log(Order)

    let GetData=(Count)=>{
        console.log(Count.Name);
        console.log(Count.count);
        Order[ GetIndex(Count.Name) ]={Name:Count.Name,CNT:Count.count};
        //Calculate New Order and Price
        setCount((old)=>{return 0;});
        setPrice((old)=>{return 0;});

        for(let ord=0;ord<Order.length;ord++){
                
                    setCount((old)=>{
                        return old+ Order[ord].CNT;
                    })
                    setPrice((old)=>{
                        return old+ (Order[ord].CNT * Food[ord].price);
                    })
                
        }
    }
    // img="../Images/sand.png"
    let FoodHTML = Food.map((item) => {
        return (
            <FoodCard
                img={item.img}
                name={item.name}
                price={item.price}
                describe={item.describe}
                available={item.quantity}
                getData={GetData}
            />
        );
    })
    function ORDER(){
        let NewOrder=[];
        let UserID="231634";
        for(let ord=0;ord<Order.length;ord++){
            if(Order[ord].CNT>0){
                NewOrder.push({Name:Order[ord].Name,Count:Order[ord].CNT})
            }
        }
        NewOrder.push({Name:"Price",Count:Price});
        NewOrder.push({Name:"User",Count:UserID});
        console.log(NewOrder);
    }
    const [count, setCount] = React.useState(0);
    const [Price, setPrice] = React.useState(0);
    return (
        <div className="Main">
            <div className="Explore">
                <div className="Title">
                    <h2>Choose Your Order</h2>
                    <p>This is our available food now, Just add the amount of items you need, verify your order, and enjoy <IoFastFoodOutline/> </p>
                </div>
                <div className="container2">
                    {FoodHTML}
                </div>
                <div className="OrderFooter">
                    <div className='contain'>
                        <div>
                            <p>Total Amount: </p><p>{count} Items</p>
                        </div>
                        <div>
                            <p>Total Price: </p><p>$ {Price}</p>
                        </div>
                        <div id='OrderNow'>
                            <button onClick={ORDER}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Cart' onClick={()=>{document.getElementById("OrderNow").scrollIntoView({ behavior: 'smooth'})}}><BsFillCartCheckFill/></div>
        </div>
    );
}