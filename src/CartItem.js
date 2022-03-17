import React from 'react';

// creating a componet 
class CartItem extends React.Component{
//  we define state adding state 
    constructor()
    {
        super();
this.state={
    price:999,
    title:'Phone',
    qty:1,
    img:''

}
//  bind increase quantity function
// this.increaseQuantity=this.increaseQuantity.bind(this);

    }


    // function for increasing quantity of  product
    increaseQuantity= ()=>
    {
         console.log('this.state',this.state);
    }



    render()
    {
        const {price,title,qty}=this.state;
        
        return(

           
            <div className="cart-item" >
        <div className='left-block'>
        <img  style={styles.image}/>

        </div>
        <div className='right-block'>

            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'#777'}}>Rs: {price}</div>
            <div style={{color:'#777'}}>Qty: {qty}</div>
            <div className='cart-item-actions'>
            {/*  here we have 3 img buttons icrease quantity decrease the quantity and delete  */}
            <img onClick={this.increaseQuantity} alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png'></img>
         
         
         
          <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png'></img>
          <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'></img>
          
            </div>

        
        
        </div>
        </div>
        );
        
        
    }
    
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;