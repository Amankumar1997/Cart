import React from 'react';
import Cart from './Cart';


// creating a componet 
class CartItem extends React.Component{


    render()
    {
        console.log('this.props',this.props)
        const {price,title,qty}=this.props.product;
        
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
            <img alt="increase" 
            className='action-icons'
             src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
            //  when user click i simply call the oncrease function
             onClick={()=>
                 this.props.onIncreaseQuantity(this.props.product)
             }
           ></img>
         
         
     {/* decrease quantity image button */}
          <img  alt="decrease" 
          className='action-icons'
           src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
           onClick={()=>{
            this.props.onDecreaseQuantity(this.props.product)
           }
        }
           ></img>


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