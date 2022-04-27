import './CheckOutPage.scss';

import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = () => {
    const { cartItems ,cartTotal} = useContext(CartContext);
  return (
    <div className='checkout-container'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
            <span>Description</span>
            </div>
            <div className="header-block">
            <span>Qunatity</span>
            </div>
            <div className="header-block">
            <span>Proce</span>
            </div>
            <div className="header-block">
            <span>Remove</span>
            </div>
            </div>    
       { cartItems.map((cartItem) => (
           <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
         ))}
    <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}

export default CheckoutPage