import React from 'react';
import CartItem from './CartItem';
// creating a componet 
class Cart extends React.Component{

//  we define state adding state 
    constructor()
    {
        super();
this.state={
    products:[
       { price:999,
    title:'Phone',
    qty:1,
    img:'',
    id:1
},

   
    { price:99,
        title:'watch',
        qty:1,
        img:'',
        id:2
    },

        { price:100,
            title:'jean',
            qty:1,
            img:'',
            id:3},




    ]
    

}
//  bind increase quantity function
// this.increaseQuantity=this.increaseQuantity.bind(this);

    }


    render()
    {
        const {products}=this.state; 
  return(
 
      <div className="cart">

         {products.map((product)=>{

  return 
  <CartItem 
  product={product}
   key={product.id}/>
        })}
</div>

  );
        
    }
    
}

export default Cart;