import React, { useState, useEffect } from "react";
import '../../App.css'
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import db from "../../firebase/config";
import {collection, getDocs,} from 'firebase/firestore'


function ItemListContainer() {
  
  
  const [data, setData] = useState([])
  const idProducto = useParams().id
  const products = []
  
  
  

  function getProducto() {
    return new Promise((resolve => {
      
      const productosCollection = collection(db, "data")

      getDocs(productosCollection).then(snapshot =>{
        const docsData = snapshot.docs.map(doc => {
          return {... doc.data(), id:  doc.id}
        })
        resolve(docsData)
        
      })
      
    }))
  } 

  

  useEffect(() => {
    getProducto().then(producto => {
      
      let itemFiltrado = producto.filter((elemento) => elemento.category === idProducto)

      if (idProducto === undefined) {
        setData(producto) 
      }
      else {
        setData(itemFiltrado)
      
      }
    })
  
  }, [idProducto])
  


  return (
    <>
    <p className="titulo-productos">{idProducto}</p>

    <ItemList data={data}/>
    </>
  )

}

export default ItemListContainer