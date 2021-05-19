import "./item-detail.scss";
import { ItemColors } from "./item-colors/item-colors";
import { ItemCount } from "./item-count/item-count";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import { ItemSizes } from "./item-sizes/item-sizes";

export const ItemDetail = ({
  images,
  title,
  description,
  price,
  colors,
  stock,
  sizes,
  changeSelectedQuantity,
  selectedColor,
  changeSelectedColor,
  selectedSize,
  changeSelectedSize,
  onAdd,
}) => {
  return (
    <div className="item-detail">
      <ItemDetailImages images={images} />
      <div className="item-detail-shop">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
        <ItemColors colors={colors} changeSelectedColor={changeSelectedColor} />
        <ItemSizes sizes={sizes} changeSelectedSize={changeSelectedSize} />
        <ItemCount
          stock={stock}
          initial={0}
          onAdd={onAdd}
          changeSelectedQuantity={changeSelectedQuantity}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};
