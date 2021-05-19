import "./item-detail-container.scss";
import { CartContext } from "../../context/cartContext";
import { ItemDetail } from "./item-detail/item-detail";
import { useContext, useState } from "react";

export const ItemDetailContainer = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  function changeSelectedQuantity(evt) {
    setSelectedQuantity(evt);
  }
  function changeSelectedColor(evt) {
    setSelectedColor(evt.target.value);
  }
  function changeSelectedSize(evt) {
    setSelectedSize(evt.target.value);
  }

  return (
    <div className="item-detail-container">
      <ItemDetail
        images={item.images}
        title={item.title}
        description={item.description}
        price={item.price}
        colors={item.colors}
        stock={item.stock}
        sizes={item.sizes}
        changeSelectedQuantity={changeSelectedQuantity}
        selectedColor={selectedColor}
        changeSelectedColor={changeSelectedColor}
        selectedSize={selectedSize}
        changeSelectedSize={changeSelectedSize}
        onAdd={() =>
          addItem(item, selectedQuantity, selectedColor, selectedSize)
        }
      />
    </div>
  );
};
