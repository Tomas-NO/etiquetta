import "./item-detail-container.scss";
import { useParams } from "react-router";
import { ItemDetail } from "./item-detail/item-detail";
import { useEffect, useState } from "react";
import products from "../../products.json";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const getItem = new Promise((resolve, reject) => {
        resolve(products.find((product) => product.id == itemId));
      });
      getItem.then((result) => {
        setItem(result);
      });
    }, 100);
  }, [itemId]);

  //   useEffect(() => {
  //     const getItem = async () => {
  //       const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
  //       const item = await response.json();
  //       console.log(item);
  //       setItem(item);
  //     };
  //     getItem();
  //   }, []);

  return item.images ? (
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
  ) : (
    <div></div>
  );
};
