import "./item-detail-container.scss";
import { ItemDetail } from "./item-detail/item-detail";

export const ItemDetailContainer = ({ item }) => {
  return (
    <div className="item-detail-container">
      <ItemDetail
        images={item.images}
        title={item.title}
        description={item.description}
        price={item.price}
        colors={item.colors}
        stock={item.stock}
      />
    </div>
  );
};
