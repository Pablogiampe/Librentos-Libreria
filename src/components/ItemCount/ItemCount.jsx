import React, { useState } from "react";
import "./ItemCount.css"
function ItemCount(props) {
           const [count, setCount] = useState(props.initial);

       const handleIncrement = () => {
         setCount(count + 1);
  };

          const handleDecrement = () => {
             setCount(count - 1);
         };

    return (
    <>
    <h5>Cantidad</h5>
      <button onClick={handleDecrement}>-</button>
    <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        <button onClick={()=>props.onAdd(count)}>Finalizar Compra</button>
 </>
 );
}

export default ItemCount;
