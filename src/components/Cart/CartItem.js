import React from 'react'


function CartItem({img,name,title,price,amount, removeItemCart,id}) {
  return ( 
  
  
  
    <div className="parent">
    <div className="div1"><img width={80} src={img} alt={name} className='imgCart' /> </div>
    <div className="div2">{name} </div>
    <div className="div3"> ${price}</div>
    <div className="div4">{amount} </div>
    </div>
  
  
  )
}




export default CartItem 