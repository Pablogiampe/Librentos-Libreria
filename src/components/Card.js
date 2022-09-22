import React from 'react'
import '../App.css'

function Card({pictureUrl,name,price,}) {

  
  return (
    <div className='cards'>
   
        
       

        <div className="div-cards"><figure>
      <img src={pictureUrl} alt='libros' ></img>
      <div className="capa">
        <h3>{name}</h3>
        <h4>Precio: ${price}</h4>
      </div>
    </figure></div>

    </div>
   
    
  )
}

export default Card