import React from 'react';
import Cart from './Cart';


// creating a componet 

const Navbar = (props) =>{

    
        return(

           
        <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
        <img src='https://cdn-icons-png.flaticon.com/512/1170/1170627.png'
        alt='navIcon'
        style={styles.cartIcon}
        ></img>
     <span style={styles.cartCount}>3</span>

        </div>
        </div>
        );
        
        
    }
    


const styles={
    cartIcon: {
        height: 32,
        marginRight: 20
        
      },
      nav: {
        height: 60,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      cartIconContainer: {
        position: 'relative'
      },
      cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
      }
}
export default Navbar;