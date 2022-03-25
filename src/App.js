import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'
class  App extends  React.Component{
  
  
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


//  function for deleting 
handleDeleteProduct= (id)=>{// we need id of this product for deleting it

    //  here ill get product first
    const {products}=this.state;

    const items= products.filter((item)=>item.id!==id);//ye mujhe dusra array dede ga jiski id iske braber na ho
    this.setState({
        products:items
         });
}




getCartCount =()=>{
  // phle product ki state get krli
  const {products}=this.state;
  let count=0;
  
  products.forEach((product)=>{
    count+=product.qty;
  });

  return count;

}



  render(){
//  we pass the product
const {products}=this.state;

  return (
    <div className="App">
    <Navbar count={this.getCartCount()} />
    <Cart

    //  here we pass product to cart item
    products={products}
    //    we passing ass a prop onincrease quanity
   onIncreaseQuantity={this.handleIncreaseQuantity}
   onDecreaseQuantity={this.handleDecreaseQuantity}
   onDeleteProduct={this.handleDeleteProduct}
    
    />

    </div>
  );
}
}

export default App;
