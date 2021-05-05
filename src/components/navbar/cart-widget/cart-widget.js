import "./cart-widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <FontAwesomeIcon icon={faShoppingCart} />

    // <span className="cart">
    //   <div className="cart-icon">
    //     <FontAwesomeIcon icon={faShoppingCart} />
    //   </div>
    //   <p className="cart-quantity">{cartQuantity}</p>
    // </span>
  );
};
