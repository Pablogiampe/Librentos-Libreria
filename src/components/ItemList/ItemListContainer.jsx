import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Card from "../Card/Card";

function traerProductos() {
      return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1500);
  });
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     traerProductos()
         .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);





  return (
     <div className="main container mx-auto mt-5">
             {products.map((item) => {
        return (
          <Card
             key={item.id}
            id={item.id}
                  title={item.title}
            img={item.img}
             stock={item.stock}
             price={item.price}
             />
            );
      })}
        </div>
  );
};

export default ItemListContainer;
