import "./item-detail.scss";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import { ItemCount } from "./item-count/item-count";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  images,
  title,
  description,
  price,
  colors,
  stock,
}) => {
  const [purchasedStock, setPurchasedStock] = useState(0);

  function onAdd() {
    let purchase_stock = document.getElementById("item-count-stock").innerHTML;
    if (parseInt(purchase_stock) !== 0) {
      setPurchasedStock(purchase_stock);
    }
  }

  return (
    <div className="item-detail">
      <ItemDetailImages images={images} />
      <div className="item-detail-shop">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
        {colors.map((color, i = 0) => (
          <p key={i}>COLOR: {color}</p>
        ))}
        {/* PONER LOS TALLES */}
        {purchasedStock > 0 ? (
          <Link to={`/cart`}>Terminar mi compra</Link>
        ) : (
          <ItemCount stock={stock} initial="0" onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
