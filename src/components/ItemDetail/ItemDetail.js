import "../card/card.css";

function ItemDetail({ name, stock, img, description}) {
  return (
    <div className="main">
      <div className="card-img">
      <div className="img">
        <img src={img} alt="imagen" />
      </div>
    </div>
        <div className="cardDetail"> 
    <div className=""></div>
    <h2>{name}</h2>

    <h4 className="descripcion">Descripcion:</h4><p>{description}</p>
        <h3> Cantidad: {stock}</h3>
        </div>
    </div>
  );
}

export default ItemDetail;