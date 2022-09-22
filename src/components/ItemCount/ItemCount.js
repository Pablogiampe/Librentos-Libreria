import React from "react";
import '../../App.css'



function ItemCount({initial, stock, onAdd}) {
  const[count,SetCount] = React.useState(1);
  const handleIncrement =()=>{ return (count < stock) ? SetCount(count+1) : SetCount (count+0) ;}
  const handeDecrement = ()=>{  return (count > initial) ? SetCount(count-1) : SetCount (count+0) ;}

  return (
    <>
      <div className="div-contador">
        <div > 
          <p className="centrado">Cantidad de productos seleccionados:   {count}</p>
          
        </div>
          <div className="container">
          
          <button className="decrement" onClick={handeDecrement}>-</button>
          <button className="increment" onClick={handleIncrement}>+</button>
               </div>
          <p><button className="finalizar-compra" onClick={()=>onAdd(count)}>Agregar al carrito</button></p>

      </div>
      
    </>
  );
}

export default ItemCount;