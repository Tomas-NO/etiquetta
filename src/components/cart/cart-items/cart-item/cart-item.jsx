import { Link } from "react-router-dom";
import "./cart-item.scss";

export const CartItem = ({ item, removeItem }) => {
  return (
    <tr className="item" key={item.id} id={item.id}>
      <td>
        <Link to="/cart" className="item-remove" onClick={removeItem}>
          x
        </Link>
      </td>
      <td colSpan="2">
        <div className="item-info">
          <img className="item-img" src={item.images[0]} alt="item img" />
          <div>
            <h2 className="item-title">{item.title}</h2>
            <p className="item-variant">Color: {item.selectedColor}</p>
            <p className="item-variant">Talle: {item.selectedSize}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="item-number">${item.price}</p>
      </td>
      <td>
        <p className="item-number">{item.quantity}</p>
      </td>
      <td>
        <p className="item-number">${item.price * item.quantity}</p>
      </td>
    </tr>
  );
};
