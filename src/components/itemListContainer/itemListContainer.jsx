import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./itemListContainer.css";
import productos from "../data/data";
import Card from "../card/card"

function Productos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 3000);
    });
  }
  
  const ItemListContainer = () => {
    const [producto, setProduct] = useState([]);
  
    useEffect(() => {
      Productos()
        .then((respuesta) => {
          setProduct(respuesta);
        })

    }, []);
  
  
    return (
      <div className="Container">
        {producto.map((item) => {
          return (
          <Card name={item.name}stock={item.stock}img={item.img}/>
          );
        })}
      </div>
    );
  };
  
  export default ItemListContainer;






// let ItemListContainer = ({greeting} )=>{
//     return (
//         <div className='Container'>
//            <div className='card'> 
//             <h2>{greeting} </h2>
//             <ItemCount className='Cart' stock = {5} initial = {1} />
//             </div>
//         </div>
//     )
// }
// export default ItemListContainer