import "./card.css";
import {Link} from "react-router-dom";
function Card({ name, stock, img, id}) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="imagen" />
      </div>
      <div className="detalle">
        <h2>{name}</h2>
        <h3>Cantidad: {stock}</h3>
        <Link to={"/detalle/${id}"}>
        text="Ver más"
          
        </Link>
      </div>
    </div>
  );
}

export default Card;