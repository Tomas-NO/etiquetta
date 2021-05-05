import "./item-list-container.scss";
import { ItemList } from "./item-list/item-list";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const { categoryId } = useParams();

  return (
    <div className="item-list-container">
      {categoryId ? (
        <img
          src={`../img/categories/${categoryId}.jpg`}
          alt="category-img"
          className="category-img"
        />
      ) : (
        <img
          src={`../img/categories/productos.jpg`}
          alt="category-img"
          className="category-img"
        />
      )}

      <ItemList categoryId={categoryId} />
    </div>
  );
};
