import "./item-list-container.scss";
import { ItemList } from "../item-list/item-list";

export const ItemListContainer = (props) => {
  return (
    <div className="items">
      <ItemList items={props.products} />
    </div>
  );
};
