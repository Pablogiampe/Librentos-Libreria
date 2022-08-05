import React,{useState} from "react";
import './ItemCount.css'

const ItemCount = ({stock,initial, onAdd})=>{


    const[count,setCount]=useState(initial)
       
    
    
    const AgregarCantidad = ()=> {
        onAdd(count)
    }


const restar =()=> {
        if(count >1){setCount(count -1)}
    }

const sumar =()=>{
    if(stock > count)
    {setCount(count+1)}

}
 


    return(
<>
    <div className='containerButton'>
        <button className="Boton" onClick={restar}>-</button>
        <label className="contador" >{count}</label>
        <button className="Boton" onClick={sumar}>+</button>

    </div>
        <button className="Agregar" onClick={AgregarCantidad}>AGREGAR</button>



</>
)

}

export default ItemCount
