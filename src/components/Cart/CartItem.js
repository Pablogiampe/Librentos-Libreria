import React from 'react'


function CartItem({img,name,title,price,amount, removeItemCart,id}) {
  return ( 
  
  
  
    <div class="parent">
    <div class="div1"><img width={80} src={img} alt={name} className='imgCart' /> </div>
    <div class="div2">{name} </div>
    <div class="div3"> ${price}</div>
    <div class="div4">{amount} </div>
    </div>
  
  
  )
}




export default CartItem 