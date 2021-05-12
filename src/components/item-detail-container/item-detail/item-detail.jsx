import "./item-detail.scss";
import { ItemCount } from "./item-count/item-count";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import colorsList from "../../../colors.json";

export const ItemDetail = ({
  images,
  title,
  description,
  price,
  colors,
  stock,
  sizes,
  onAdd,
}) => {
  return (
    <div className="item-detail">
      <ItemDetailImages images={images} />
      <div className="item-detail-shop">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
        <div className="item-colors">
          <h4>Colores:</h4>
          {colors.map((color, i = 0) => (
            // <input
            //   type="radio"
            //   key={i}
            //   className="item-color"
            //   name="color"
            //   value={color}
            //   style={{
            //     backgroundColor: colorsList[color],
            //   }}
            // />

            <label className="item-option" key={i}>
              a
              <input type="radio" name="color" />
              <span
                className="item-option-checkmark"
                style={{
                  backgroundColor: colorsList[color],
                }}
              ></span>
            </label>
          ))}
        </div>
        {sizes ? (
          <div className="item-sizes">
            <h4>Talles:</h4>
            {sizes.map((size, i = 0) => (
              // <span key={i} className="item-size">
              //   {size}
              // </span>
              <label className="item-option" key={i}>
                {size}
                <input type="radio" name="size" />
                <span className="item-option-checkmark"></span>
              </label>
            ))}
          </div>
        ) : (
          console.log("No hay talles")
        )}
        <ItemCount stock1={stock} initial1={0} onAdd={onAdd} />
      </div>
    </div>
  );
};
