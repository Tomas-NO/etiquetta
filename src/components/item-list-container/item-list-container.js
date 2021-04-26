import "./item-list-container.scss";
import { Product } from "../product/product";

export const ItemListContainer = (props) => {
  return props.products.map((product) => (
    <Product
      title={product.name}
      size={product.size}
      brand={product.brand}
      stock={product.stock}
    />
  ));
};
