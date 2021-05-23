import { CartContainer } from "../components/cart/cart-container";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase";
import { Page } from "../components/page/page";
import { useContext, useState } from "react";

export const Cart = () => {
  const { cart, cartQuantity, removeItem, clearCart } = useContext(CartContext);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity * item.price;
  });

  function buyItems(e) {
    e.preventDefault();
    if (name && phone && email) {
      cart.forEach((item) => {
        delete item.category &&
          delete item.colors &&
          delete item.description &&
          delete item.images &&
          delete item.sizes &&
          delete item.stock;
      });

      const db = getFirestore();
      db.collection("orders")
        .add({
          buyer: {
            name,
            phone,
            email,
          },
          items: cart,
          date: new Date(),
          total,
        })
        .then(({ id }) => {
          console.log(id);
        })
        .then(clearCart);
    }
  }

  return (
    <Page id="cart">
      <CartContainer
        items={cart}
        cartQuantity={cartQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        total={total}
        buyItems={buyItems}
      />
    </Page>
  );
};
