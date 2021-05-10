import "./item-list.scss";
import { Item } from "./item/item";
import { useEffect, useState } from "react";
import products from "../../../products.json";

export const ItemList = ({ categoryId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const getItems = new Promise((resolve, reject) => {
        if (categoryId === undefined) {
          resolve(products);
        } else {
          resolve(
            products.filter((product) => product.category === categoryId)
          );
        }
      });
      getItems.then((result) => {
        setItems(result);
      });
    }, 100);
    //   const getItems = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const items = await response.json();
    //     setItems(items);
    //   };
    //   getItems();
  }, [categoryId]);

  return (
    <ul className="items">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          images={item.images}
        />
      ))}
    </ul>
  );
};
