import React from 'react'


function CartItem({img,name,price,amount, removeItemCart,id}) {
  return (
    <div className='cards'>
    <div className="div-cards">
        <img src={img} className="logoCard"></img>
        <h2 className='description'>{name}</h2>
        <h3 className='description'>Precio total:  ${price*amount}</h3>
        <h3 className='description'>Cantidad de productos: {amount}</h3>
        <button className="delete-all " onClick={()=>removeItemCart({id})}>Remover item</button>
        
    </div>
    
    </div>
    
  )
}




export default CartItem 