import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {collection, getDocs} from 'firebase/firestore'
import db from "../../firebase/config";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  let id = useParams().id
  console.log(item[0])
  let x = id



  
    
  function traerProductos(){
    return new Promise((resolve => {
      
      const productosCollection = collection(db, "data")
    
      getDocs(productosCollection).then(snapshot =>{
        const docsData = snapshot.docs.map(doc => {
          return {...doc.data(), id:  doc.id}
        })

        const itemFiltrado = docsData.filter((elemento) => elemento.id === x)
        resolve(itemFiltrado)
        console.log(docsData)
      })
      
    }))
  }
  
    useEffect(() => {
      traerProductos()
        .then((respuesta) => setItem(respuesta[0])).catch((error) => alert(error))
    }, []);
    return (
      
      <ItemDetail 
            id={item.id}
            pictureUrl={item.pictureUrl}
           
            price={item.price}
            stock={item.stock}
            name={item.name}
      
            
      />
      
  
    )
  
  }

export default ItemDetailContainer