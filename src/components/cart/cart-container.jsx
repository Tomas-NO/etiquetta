import "./cart-container.scss";
import { CartItems } from "./cart-items/cart-items";
import { CartResume } from "./cart-resume/cart-resume";

export const CartContainer = ({ items }) => {
  let total = 0;
  items.forEach((item) => {
    total += item.quantity * item.price;
  });

  return (
    <div className="cart">
      <CartItems items={items} />
      <CartResume total={total} />
    </div>
  );
};
