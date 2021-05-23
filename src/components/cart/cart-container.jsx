import "./cart-container.scss";
import { CartItems } from "./cart-items/cart-items";
import { CartResume } from "./cart-resume/cart-resume";
import { Link } from "react-router-dom";

export const CartContainer = ({
  items,
  cartQuantity,
  removeItem,
  clearCart,
  setName,
  setPhone,
  setEmail,
  total,
  buyItems,
}) => {
  return (
    <div>
      {cartQuantity > 0 ? (
        <div className="cart">
          <CartItems
            items={items}
            removeItem={removeItem}
            clearCart={clearCart}
          />
          <CartResume
            setName={setName}
            setPhone={setPhone}
            setEmail={setEmail}
            total={total}
            buyItems={buyItems}
          />
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
