import "./item-detail-container.scss";
import { CartContext } from "../../context/cartContext";
import { ItemDetail } from "./item-detail/item-detail";
import { useContext } from "react";

export const ItemDetailContainer = ({ item }) => {
  const { addItem } = useContext(CartContext);
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
        onAdd={() => addItem(item)}
      />
    </div>
  );
};
