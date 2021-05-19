import { CartContainer } from "../components/cart/cart-container";
import { CartContext } from "../context/cartContext";
import { Page } from "../components/page/page";
import { useContext } from "react";

export const Cart = () => {
  const { cart, cartQuantity, removeItem, clearCart } = useContext(CartContext);

  return (
    <Page id="cart">
      <CartContainer
        items={cart}
        cartQuantity={cartQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </Page>
  );
};
