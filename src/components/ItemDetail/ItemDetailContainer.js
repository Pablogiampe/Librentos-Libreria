import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'


function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const {detalleId} = useParams();
  
    useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'data', item.id);
    getDoc(queryDoc)
    .then(res => setItem({id: res.id, ...res.data() }))
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