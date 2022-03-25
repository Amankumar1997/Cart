import React from 'react';
import CartItem from './CartItem';
// creating a componet 

const Cart =(props)=>{

    
        const {products}=props; 
  return(
 
    <div className="cart">
        {products.map((product)=>{
         return (
  <CartItem 
  product={product}
   key={product.id}
//    we passing ass a prop onincrease quanity
   onIncreaseQuantity={props.onIncreaseQuantity}
   onDecreaseQuantity={props.onDecreaseQuantity}
   onDeleteProduct={props.onDeleteProduct}
   />
   )})}
    </div>

  );
        
    }
    


export default Cart;