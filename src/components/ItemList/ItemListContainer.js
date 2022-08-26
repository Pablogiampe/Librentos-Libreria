import React, { useState, useEffect } from "react";
import '../../App.css'
import ItemList from "./ItemList";
import ItemData from "../data/data"
import {useParams} from "react-router-dom";


function ItemListContainer() {
  const [data, setData] = useState([])
  const idProducto = useParams().id
  function getProducto() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(ItemData)
      }, 0);
    }))
  }
  useEffect(() => {
    getProducto().then(producto => {let itemFiltrado = ItemData.filter((elemento) => elemento.category === idProducto)
      if (idProducto === undefined) {
        setData(producto) }
      else {
        setData(itemFiltrado) }
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