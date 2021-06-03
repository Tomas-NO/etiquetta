import "./cart-widget.scss";
import { CartContext } from "../../../context/cartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="header-cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <p className="header-cart-quantity">{cartQuantity}</p>
    </div>
  );
};
