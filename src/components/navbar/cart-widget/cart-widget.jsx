import "./cart-widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to={"/cart"}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </Link>
  );
};
