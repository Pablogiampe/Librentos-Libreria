import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./itemListContainer.css";

let ItemListContainer = ({greeting} )=>{
    const onAdd=(cantidad)=>{
        console.log(`Se Agrego ${cantidad} al carrito`)
    }
    return (
        <div className='Container'>
           <div className='card'> 
            <h2>{greeting} </h2>
            <ItemCount className='Cart' stock = {5} initial = {1} onAdd={onAdd}/>
            </div>
        </div>
    )
}
export default ItemListContainer