import React, {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import productos1 from "../data/data1";
import "../itemListContainer/itemListContainer.css"


function Productos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos1), 1000);
    });
  }
  
  const ItemDetailContainer = () => {
    const [producto, setItem] = useState([]);
  
    useEffect(() => {
      Productos()
        .then((respuesta) => {
          setItem(respuesta);
        })

    }, []);
  
  
    return (
      <div className="Container">
        {producto.map((item) => {
          return (
          <ItemDetail name={item.name}stock={item.stock}img={item.img} description={item.description}/>
          );
        })}
      </div>
    );
  };
  

//  function Productos() {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => resolve(productos[0]), 1000);
//         });
//       }
      
//       function ItemDetailContainer(){
//     const[producto,setitem ] = useState ([]);

//     useEffect(() => {
//         Productos()
//           .then((respuesta) => {
//             setitem(respuesta);
//           })
  
//       }, []);
    
   
//     return (
//         <div className="Container">{producto.map((item) => {
//             return (
//             <CardDetail name={item.name}stock={item.stock}img={item.img}/>
//             );
//           })}</div>
//     )
// }




export default ItemDetailContainer;