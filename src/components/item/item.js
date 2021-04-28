import "./item.scss";
import { ItemCount } from "../item-count/item-count";

export const Item = ({
  id,
  title,
  price,
  description,
  category,
  image,
  stock,
}) => {
  return (
    <div id={id} className="items-item">
      <img className="items-item-img" src={image} alt="item-img" />
      <h3 className="items-item-title">{title}</h3>
      <p className="items-item-price">${price}</p>

      {/* <p>ID: {id}</p>
      <p>DESCRIPTION: {description}</p>
      <p>CATEGORY: {category}</p>
      <ItemCount stock={stock} initial="0" /> */}
    </div>
  );
};
