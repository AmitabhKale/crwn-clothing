import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cart-item/CartItem';

import Button from '../button/Button';
import './CartDropdown.scss'
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const gotoCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={gotoCheckOutHandler} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;