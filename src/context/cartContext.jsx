import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);

  const addItem = (newItem) => {
    const quantity = parseInt(
      document.getElementById("item-count-stock").innerHTML
    );
    if (isInCart(newItem.id)) {
      const item = cart.filter((item) => item.id === newItem.id)[0];
      if (
        item.quantity < item.stock &&
        item.stock - item.quantity >= quantity
      ) {
        item.quantity += quantity;
      } else {
        alert("no hay suficiente stock");
      }
    } else {
      newItem.quantity = quantity;
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart([newCart]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const item = cart.filter((item) => item.id === id);
    let condicion = false;
    if (item.length > 0) {
      condicion = true;
    }
    return condicion;
  };

  // useEffect(() => {
  //   setQuantity(cart.length);
  //   console.log(cart);
  // }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
