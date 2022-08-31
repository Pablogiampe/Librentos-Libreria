import React, { useState, useEffect } from "react";
import '../../App.css'
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs,query, where} from 'firebase/firestore'


function ItemListContainer() {
  const [item, setData] = useState([])
  const idProducto = useParams().id
   const{categoriaId}=useParams()
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'data',);
    if ( categoriaId ) {
      const queryFilter = query ( queryCollection , where ( 'category' , ' = ' , categoriaId ) )
     getDocs ( queryFilter )
   .then ( res => setData ( res.docs.map ( product => ( { id : product.id , ... product.data ( ) } ) ) ) )
     } else {
     getDocs(queryCollection)
          .then ( res => setData ( res.docs.map ( product => ( { id : product.id , ... product.data () } ) ) ) )
  } }, [categoriaId] )


  return (
    <>
    <p className="titulo-productos">{idProducto}</p>

    <ItemList data={item}/>
    </>
  )

}

export default ItemListContainer