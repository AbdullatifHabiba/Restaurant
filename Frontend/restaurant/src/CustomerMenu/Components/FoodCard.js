import React from "react";

export default function FoodCard(props) {

    const [count, setCount] = React.useState(0);
    const [Error, setError] = React.useState(null);

    function increase(){
        if(count===props.available-1){
            //NO stock
            setCount( old =>{
                return old+1;
            });
            props.getData({count:count+1, Name:props.name});
            setError(()=>{
                return (<div className="Error">
                    No more items in stock !!
                </div>);
            } );
        }
        else if(count<props.available){
            setCount( old =>{
                return old+1;
            });
            props.getData({count:count+1, Name:props.name});
        }
        else{
            setError(()=>{
                return (<div className="Error">
                    No more items in stock !!
                </div>);
            } );   
            props.getData({count:count, Name:props.name});
        }

    };
    function decrease(){
        setCount( old =>{
            return old>0?old-1:0;
        })
        setError(()=>{
            return null;
        } );
        props.getData({count:count===0?count:count-1, Name:props.name});
    };
    //() => this.setState(old=>{ return old+1; })
    return (
        <div className="Card">
            <img src={props.img} alt={props.name} />
            <div className="description">
                <div className="priceCard">
                    <h3>{props.name}</h3>
                    <h3 id="price">${props.price}</h3>
                </div>
                <div className="pricefooter">
                    <p className="discr">{props.describe}</p>
                    <div className="quantity">
                        <button id="inc" onClick={increase}>+</button>
                        <p>{count}</p>
                        <button id="dec" onClick={decrease}>-</button>
                    </div>
                    
                </div>
                {Error}
            </div>
        </div>
    );
}