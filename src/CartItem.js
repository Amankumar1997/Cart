import React from 'react';
import Cart from './Cart';


// creating a componet 

const CartItem=(props)=>{

        const {price,title,qty}=props.product;
        const {product ,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=props;
        
        
        return(

            <div className="cart-item" >
        <div className='left-block'>
        <img  style={styles.image} src={product.img}/>

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
                // you can also this as welll  onIncreaseQuantity(product) niche vali line ki bjay
                 props.onIncreaseQuantity(props.product)
             }
           ></img>
         
         
     {/* decrease quantity image button */}
          <img  alt="decrease" 
          className='action-icons'
           src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
           onClick={()=>{
            //    here i am giving accebilty to
          onDecreaseQuantity(product)
           }
        }
           ></img>


          <img alt="delete" 
          className='action-icons' 
          src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'
          onClick={()=>{
            //    here i am giving accebilty to
            onDeleteProduct(product.id)
           }}
          ></img>
          
            </div>

        
        
        </div>
        </div>
        );
        
        
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