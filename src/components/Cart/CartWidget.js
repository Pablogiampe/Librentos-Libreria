import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/cartContext';



function CartWidget() {
  const { cart } = useContext(CartContext);
  
  if(cart.length > 0)
      return (
        <>
        <i to={`/cart`} className='bi bi-cart2'>{cart.length}</i>
        </>
      )
  else{
    
  }
}

export default CartWidget