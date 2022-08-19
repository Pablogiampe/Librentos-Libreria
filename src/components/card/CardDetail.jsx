import { useState } from "react";
import "./card.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

function CardDetail({ id, title, price, img, category, stock }) {
  const { addToCart } = useContext(cartContext);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState(false);
  function handleAdd(count) {
    const itemToCart = { id, title, price, img, category, stock };
    addToCart(itemToCart, count);
    setFeedbackMsg("Producto agregado al carrito: " + count + " unidades");
    setQuantityInCart(count);
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
     
     
      { quantityInCart === 0 ? (
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={handleAdd}
            text={"Finalizar"}
            value={quantityInCart}
          />
        ) : (
          <Link to="/cart">Ir al carrito</Link>
        )
      } </div>     
    </div>
  );
}

export default CardDetail;
