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





//  this is function for increasing quatity
      handleIncreaseQuantity=(product)=>{
           console.log("hey increase the quantity of product",product);
             //phle hume product chahiye jiski quantity increase  krna hai
               const {products}=this.state;
                //  we neeed index of product for incresing thirer quantity
                const index=products.indexOf(product);

                products[index].qty+=1;
                this.setState({
                products:products
                 });

             }



//  this is function for decreasing quatity
handleDecreaseQuantity=(product)=>{
    console.log("hey decrease the quantity of product",product);
      //phle hume product chahiye jiski quantity increase  krna hai
        const {products}=this.state;
         //  we neeed index of product for incresing thirer quantity
         const index=products.indexOf(product);
        
      if( products[index].qty==0)
      {
          return;
      }
         products[index].qty-=1;
         this.setState({
         products:products
          });
      

      }


    render()
    {
        const {products}=this.state; 
  return(
 
      <div className="cart">
        {products.map((product)=>{
         return (
  <CartItem 
  product={product}
   key={product.id}
//    we passing ass a prop onincrease quanity
   onIncreaseQuantity={this.handleIncreaseQuantity}
   onDecreaseQuantity={this.handleDecreaseQuantity}
   />
         ) })}
</div>

  );
        
    }
    
}

export default Cart;