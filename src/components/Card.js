import React from 'react'
import '../App.css'

function Card({pictureUrl,name,price,}) {

  
  return (
    <div className='cards'>
    <div className="div-cards" >
        
        <img src={pictureUrl} className="logoCard" alt="50"></img>
        <p>{name}</p>
        
        <p>Precio: ${price}</p>
        
    </div>
    
    </div>
  )
}

export default Card