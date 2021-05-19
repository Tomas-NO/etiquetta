import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addItem = (newItem, quantity, color, size) => {
    const newId = `${newItem.id}${color}${size}`;

    newItem.quantity = quantity;
    newItem.selectedColor = color;
    newItem.selectedSize = size;
    newItem.id = newId;

    if (isInCart(newItem.id)) {
      const item = cart.filter((item) => item.id === newItem.id)[0];
      if (
        item.quantity < item.stock &&
        item.stock - item.quantity >= quantity
      ) {
        item.quantity += quantity;
      } else {
        // toDo mostrar una alerta con estilos
        alert("no hay suficiente stock");
      }
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (evt) => {
    const itemId = evt.target.parentElement.parentElement.id;
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const item = cart.filter((item) => item.id === id);
    if (item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((item) => (totalQuantity += item.quantity));
    setCartQuantity(totalQuantity);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartQuantity, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
