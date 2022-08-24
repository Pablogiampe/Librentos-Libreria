import { useState } from "react";
import "./card.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {useCartContext} from "../../store/cartContext"

function CardDetail({title, price, img,data }) {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct}= useCartContext();  

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity)
  }
  return (
    <div className="main">
    <div className="card">

    
      
      <div className="col">
        <img className="detailImg" src={img} alt="imagen" />
      </div>
     
      
    </div> 
 <div className="cardDetail">
        <h2>{title}</h2>
        <h3>$ {price}</h3>
     {
      goToCart
      ?<Link to='/cart'>Terminar compra</Link>
      :<ItemCount initial={1} stock={6} onAdd={onAdd}/> 
    
    }
     </div>     
    </div>
  );
}

export default CardDetail;

      // { quantityInCart === 0 ? (
      //     <ItemCount
      //       initial={1}
      //       stock={stock}
      //       onAdd={handleAdd}
      //       text={"Finalizar"}
      //       value={quantityInCart}
      //     />
      //   ) : (
      //     <Link to="/cart">Ir al carrito</Link>
      //   )
      // } 