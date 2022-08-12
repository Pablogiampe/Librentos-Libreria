import React, {useEffect,useState} from "react";
import Card from "../card/card";
import productos from "../data/data";

function Productos(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos[id]), 3000);
    });
  }
  
  const ItemDetailContainer = () => {
    const [producto, setItem] = useState([]);
  
    useEffect(() => {
      Productos(3)
        .then((respuesta) => {
          setItem(respuesta);
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