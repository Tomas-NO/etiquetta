import "./cart-widget.scss";
import { CartContext } from "../../../context/cartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <div className="header-cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <p className="header-cart-quantity">{cartQuantity}</p>
      </div>
    </Link>
  );
};
