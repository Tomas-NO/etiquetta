import "./item-list-container.scss";
import { ItemList } from "./item-list/item-list";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const { categoryId } = useParams();

  return (
    <div className="abcd">
      {categoryId ? (
        <img
          src={`../img/categories/${categoryId}.jpg`}
          alt="category-img"
          className="category-img"
        />
      ) : (
        <h2>Productos</h2>
      )}

      <ItemList categoryId={categoryId} />
    </div>
  );
};
