import "./item-list-container.scss";
import { ItemList } from "./item-list/item-list";

export const ItemListContainer = ({ items, categoryId }) => {
  return (
    <div className="item-list-container">
      <img
        src={`../img/categories/${categoryId}.jpg`}
        alt="category-img"
        className="category-img"
      />

      <ItemList items={items} />
    </div>
  );
};
