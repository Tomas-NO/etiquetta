import "./item-detail.scss";
import { ItemColors } from "./item-colors/item-colors";
import { ItemCount } from "./item-count/item-count";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import { ItemSizes } from "./item-sizes/item-sizes";

export const ItemDetail = ({
  category,
  images,
  title,
  description,
  price,
  colors,
  colorsList,
  stock,
  sizes,
  selectedQuantity,
  setSelectedQuantity,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  onAdd,
}) => {
  return (
    <div className="item-detail">
      <ItemDetailImages images={images} />
      <div className="item-detail-shop">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
        <ItemColors
          colors={colors}
          colorsList={colorsList}
          setSelectedColor={setSelectedColor}
        />
        <ItemSizes
          category={category}
          sizes={sizes}
          setSelectedSize={setSelectedSize}
        />
        <ItemCount
          stock={stock}
          onAdd={onAdd}
          setSelectedQuantity={setSelectedQuantity}
          selectedQuantity={selectedQuantity}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};
