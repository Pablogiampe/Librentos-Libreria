import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "../data/data"
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  let id = useParams().id
  let x = parseInt(id)
  function traerProductos(){
    return new Promise((resolve) => {
      
      resolve(data[x]);
    });
  }
    useEffect(() => {
      traerProductos()
        .then((respuesta) => setItem(respuesta)).catch((error) => alert(error))
    }, []);
    return (
      
      <ItemDetail 
            id={item.id}
            pictureUrl={item.pictureUrl}
            name={item.title}
            price={item.price}
            stock={item.stock}
      
            
      />
      
  
    )
  
  }

export default ItemDetailContainer