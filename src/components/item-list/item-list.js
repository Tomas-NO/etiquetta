import "./item-list.scss";
import { Item } from "../item/item";

export const ItemList = (props) => {
  return props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      category={item.category}
      image={item.image}
      stock={5}
    />
  ));
};
