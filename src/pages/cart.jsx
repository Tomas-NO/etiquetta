import { CartContainer } from "../components/cart/cart-container";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase/index";
import { Page } from "../components/page/page";
import { useContext, useState } from "react";
import swal from "sweetalert";

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
    const db = getFirestore();

    const batch = db.batch();

    cart.forEach((item) => {
      const itemRef = db.collection("items").doc(item.previousId);
      batch.update(itemRef, { stock: item.stock - item.quantity });
    });

    batch.commit().then((r) => console.log(r));

    if (name && phone && email) {
      cart.forEach((item) => {
        delete item.previousId &&
          delete item.category &&
          delete item.colors &&
          delete item.description &&
          delete item.images &&
          delete item.sizes &&
          delete item.stock;
      });

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
          swal({
            title: "Exito",
            text: `Su compra se procesó con el identificador: ${id}`,
            icon: "success",
          });
        })
        .then(clearCart);
    } else {
      swal("Ocurrió un error", "Debes completar todos los campos", "error");
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
