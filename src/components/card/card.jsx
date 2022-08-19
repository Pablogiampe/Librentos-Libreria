import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Card({ id, title, price, img, stock}) {
  return (
    <div className="card ">
      <Link to={`/detalle/${id}`}>
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div> </Link> 
      <div className="card-detail">
        <h2 className="h2">{title}</h2>
        <h3>${price}</h3>
        <h4>Disponibles: {stock}</h4>
        </div>
   
     </div>
  );
}

export default Card;
