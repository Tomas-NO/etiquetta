import "./product.scss";
import { ItemCount } from "../item-count/item-count";

export const Product = ({ title, size, brand, stock }) => {
  return (
    <div className="product">
      <h3 className="product-title">{title}</h3>
      <p>Talles: {size}</p>
      <p>Marca: {brand}</p>
      <p>STOCK: {stock}</p>
      <ItemCount stock={stock} initial="0" />
    </div>
  );
};
