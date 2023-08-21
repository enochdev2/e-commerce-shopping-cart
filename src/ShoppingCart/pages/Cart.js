import React, {useContext} from "react";
import {TiDeleteOutline}  from 'react-icons/ti'
import { AppContext } from "../component/ContextProvider";


const Cart = () => {
  const information = useContext(AppContext);
  const {state,dispatch} = information;
  console.log(state);

 const total = state.reduce((total,item)=>{
  return total+item.price*item.quantity;
 },0)

  return (
    <div className="cart">
      {state.length < 1 && <h1 sytle={{color :'blue'}}> Cart is empty! add to Cart
        
      </h1> }
      {state.map((list)=> {
         const {id, price, image, title, quantity } = list;
         return(
           
           <div className="single-cart" key={id}>
             
               <img src={image} alt='image' className="cart-image"/>
              <h2 className="cart-title">{title}</h2>
               <h2 className="cart-price">${price*quantity}</h2>
             <div className="cart-quantity">
              <button type="button" onClick={()=> dispatch({type:'increase', payload:list})}>+</button> 
               <h2 className="cart-price">{quantity}</h2>
              <button type="button" onClick={ quantity < 2? 
              ()=> dispatch({type:'remove', payload:list}) :
                ()=> dispatch({type:'decrease', payload:list})
               }>-</button> 
             </div>
             <button type="button" onClick={()=> dispatch({type:'remove', payload:list})}><h2><TiDeleteOutline/></h2></button>
             
           </div>
             
             )
      })}
      { state.length > 0 &&
      <div className="total"><button type="button" onClick={()=> dispatch({type:'clear', payload:state})}>Clear Cart</button> <h2>TOTAL:{total.toFixed(2)} </h2></div>
    }
      </div>
      );

    }

    
export default Cart;
