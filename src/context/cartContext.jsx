import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);

  const addItem = (newItem) => {
    console.log(newItem.id);
    console.log(newItem);
    const quantity = parseInt(
      document.getElementById("item-count-stock").innerHTML
    );
    const selectedColor = document.querySelector(
      'input[name="color"]:checked'
    ).value;
    const selectedSize = document.querySelector(
      'input[name="size"]:checked'
    ).value;

    let newId = `${newItem.id}${selectedColor}${selectedSize}`;
    console.log(newId);

    newItem.quantity = quantity;
    newItem.selectedColor = selectedColor;
    newItem.selectedSize = selectedSize;
    newItem.id = newId;

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
      setCart([...cart, newItem]);
    }
    console.log(cart);
    newId = "";
    console.log(newId);
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
    if (item.length > 0) {
      return true;
    } else {
      return false;
    }
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
