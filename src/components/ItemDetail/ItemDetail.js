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

      
      <div className='parent3'>

<div className="divl1"> <img src={pictureUrl} className='detailImg' alt="50"></img></div>
<div className="divl2"> <h1>{name}</h1> <p>Precio: ${price}</p></div>
<div className="divl3"> <h2>Stock disponible: {stock}</h2> </div>
<div className="divl4">  {(click===0) ?
              <ItemCount initial="1 " stock={stock} onAdd={onCount}/>
              :<Link to="/cart"><button className='Boton' >Ir al carrito</button></Link>}</div>
</div>


  
    )}
  

export default ItemDetail