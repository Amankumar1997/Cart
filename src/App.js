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
img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
id:1
},


{ price:99,
    title:'watch',
    qty:1,
    img:'https://media.istockphoto.com/photos/male-wristwatch-picture-id862529598?b=1&k=20&m=862529598&s=170667a&w=0&h=C-QutMJAbI0fvmYlOCH_2guWnR8FEET3WuFFdUTupVA=',
    id:2
},

    { price:100,
        title:'jean',
        qty:1,
        img:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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

//  function of total price
getCartTotal =() =>{
  const {products}=this.state;
  let cartTotal=0;
  
  products.map((product) =>{
    cartTotal+=product.qty*product.price
  })


  return cartTotal;
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
<div style={{padding :20,fontSize:20}}>Total:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
