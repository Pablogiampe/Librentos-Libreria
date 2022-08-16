import React, { useEffect, useState } from "react"
import dataJSON from "../data/data";
import {useParams} from "react-router-dom"
;import ItemDetail from "./ItemDetail"

  



const ItemDetailContainer = (itemid) => {
    const [item, setItem] = useState([]);
  
    const {id} = useParams();


    function Productos() {
      return new Promise((resolve, reject) => {
        setTimeout(() =>{ let itemRequested = dataJSON.find
          ((elemento) => elemento.id === Number(id)) 
      
          if (itemRequested === undefined) reject("No encontramos el item")
          else resolve(itemRequested)
        }, 1000);
      });
    }
    





    useEffect(() => {
      Productos()
        .then((respuesta) => {
          setItem(respuesta);
        })
        .catch((error) => alert(error));
    }, []);
  
  
    return (
      <div className="Container">
          <ItemDetail id={item.id} name={item.name}stock={item.stock}img={item.img} description={item.description}/>;
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