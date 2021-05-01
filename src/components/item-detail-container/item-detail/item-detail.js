import "./item-detail.scss";
import { ItemDetailImages } from "./item-detail-images/item-detail-images";
import { ItemCount } from "./item-count/item-count";
import { useEffect, useState } from "react";
import products from "../../../products.json";

export const ItemDetail = ({ itemId }) => {
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

  return (
    <div>
      {item.images ? (
        <div className="item-detail">
          <ItemDetailImages images={item.images} />
          <div className="item-detail-shop">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price}</p>
            {item.colors.map((color, i = 0) => (
              <p key={i}>COLOR: {color}</p>
            ))}
            {/* PONER LOS TALLES */}
            <ItemCount stock={item.stock} initial="0" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
