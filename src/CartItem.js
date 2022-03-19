import React from 'react';
import Cart from './Cart';

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
        // form 1 one way to increase quantity
        // this.setState({
        //     qty:this.state.qty+=1
        // })


        // form 2 second way state increase quntity
        this.setState((prevState) =>{// this fn says adding quanty in prevstate 
      return {
        qty:prevState.qty+1
    }
        }) ;

        console.log(this.state);
         
    }
     // function for decreasing quantity of  product
    decreaseQuantity= ()=>
    {
        const { qty }=this.state;
        if(qty==0)
        {
            return;
        }
        // form 1 one way to dcrease quantity
        // this.setState({
        //     qty:this.state.qty-=1
        // })

        // form 2 second way state decrese crease quntity
        this.setState((prevState) =>{// this fn says adding quanty in prevstate 
      return {
        qty:prevState.qty-1
    }});

        console.log(this.state);
         
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
         
         
         
          <img  onClick={this.decreaseQuantity}  alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png'></img>
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