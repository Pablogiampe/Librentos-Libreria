import React from 'react'
import Item from '../Card'
import {Link} from "react-router-dom";


function ItemList({ data }) {
  return (
    data.map((product)=>{

      
        return(

          <div className='items' > 
            <Link  to={`/item/${(product.id-1)}`}>
            <Item  

              key={Number(product.id)}
              pictureUrl={product.pictureUrl}
              name={product.title}
              price={product.price}
              
            />
            </Link>
          </div>

        )
    })
    
  )
}

export default ItemList