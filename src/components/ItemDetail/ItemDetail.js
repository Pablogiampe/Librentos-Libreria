import { Link } from 'react-router-dom'
import React, {useState, useContext} from 'react'
import { CartContext } from '../../store/cartContext'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({pictureUrl,name,price, id, stock}) {
  const {addToCart} = useContext(CartContext)
  const [click,SetCount] = useState (0);
  

  const onCount=(click)=>{
    SetCount(click)
    const item = { pictureUrl,name,price, id, click}
    
    addToCart(item, click)
  }

    return (
      <div className='cardDetail'>
      <div className="Detail" >
          
          <p>{name}</p>
          <p>Precio: ${price}</p>
          <p>{id}</p>
          <img src={pictureUrl} className="logoCard" alt="50"></img>
          <hr></hr>    
          <p className='description'>Stock disponible</p>
          <p className='description'>{stock}</p>

          {(click===0) ?
              <ItemCount initial="1 " stock={stock} onAdd={onCount}/>
              :<Link to="/cart"><button className="finalizar-compra">Ir al carrito</button></Link>
          }  
          
      </div>
      </div>
    )
  }


export default ItemDetail