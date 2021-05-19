import { Link } from "react-router-dom";
import "./cart-container.scss";
import { CartItems } from "./cart-items/cart-items";
import { CartResume } from "./cart-resume/cart-resume";

export const CartContainer = ({
  items,
  cartQuantity,
  removeItem,
  clearCart,
}) => {
  let total = 0;
  items.forEach((item) => {
    total += item.quantity * item.price;
  });

  return (
    <div>
      {cartQuantity > 0 ? (
        <div className="cart">
          <CartItems
            items={items}
            removeItem={removeItem}
            clearCart={clearCart}
          />
          <CartResume total={total} />
        </div>
      ) : (
        <div className="empty-cart">
          <h2 className="empty-cart-title">El carrito de compras está vacío</h2>
          <p className="empty-cart-text">
            No tiene productos en su carrito de compras.
          </p>
          <Link to="/productos" className="empty-cart-link">
            Ver productos
          </Link>
        </div>
      )}
    </div>
  );
};
