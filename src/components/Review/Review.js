import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';
import happyImage from '../../images/giphy.gif'

const Review = () => {
const[cart,setCart] = useState([])
const[orderPlaced,setOrderPlaced] = useState(false);
const handlePlaceOrder =()=>{
    setCart([]);
    setOrderPlaced(true)
    processOrder()
}
    useEffect(()=>{
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd=>pd.key === key);
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProducts)
       
       
    },[])
    const handleRemoveProduct = (productKey)=>{
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage}></img>
    }
   
    return (
        <div className='twin-container'> 
            
          <div className="product-container">
              {
                    cart.map(pd =><ReviewItem product={pd} handleRemoveProduct={handleRemoveProduct} key={pd.key}></ReviewItem>)
                }
                 {thankYou}
          </div>
         
          
          <div className="cart-container">
              <Cart cart ={cart}>
                  <button onClick = {handlePlaceOrder} className='main-button'>Place Order</button>
              </Cart>
          </div>
            
        </div>
    );
};

export default Review;