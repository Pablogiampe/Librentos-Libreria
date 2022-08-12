import "../card/card.css";

function Card({ name, stock, img,}) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="imagen" />
      </div>
      <div className="detalle">
        <h2>{name}</h2>
        <h3>Cantidad: {stock}</h3>
  
      </div>
    </div>
  );
}

export default Card;