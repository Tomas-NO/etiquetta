import "./item-detail-container.scss";
import { CartContext } from "../../context/cartContext";
import { ItemDetail } from "./item-detail/item-detail";
import { useContext, useState } from "react";

export const ItemDetailContainer = ({ item, colorsList }) => {
  const { addItem } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div className="item-detail-container">
      <ItemDetail
        category={item.category}
        images={item.images}
        title={item.title}
        description={item.description}
        price={item.price}
        colors={item.colors}
        colorsList={colorsList}
        stock={item.stock}
        sizes={item.sizes}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        onAdd={() =>
          addItem(item, selectedQuantity, selectedColor, selectedSize)
        }
      />
    </div>
  );
};
