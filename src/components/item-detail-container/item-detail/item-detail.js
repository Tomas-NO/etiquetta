import "./item-detail.scss";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import { ItemCount } from "./item-count/item-count";

export const ItemDetail = ({
  images,
  title,
  description,
  price,
  colors,
  stock,
}) => {
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
        <ItemCount stock={stock} initial="0" />
      </div>
    </div>
  );
};
