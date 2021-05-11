import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Routes } from "./routes";
import { CartProvider } from "./context/cartContext";

const itemExample = {
  id: 1,
  title: "camisa a cuadros custom fit",
  price: 6700,
  description: "camisa a cuadros cuello punta botón. calce custom fit",
  category: "camisas",
  colors: ["azul", "negro"],
  images: [
    "../img/products/camisas/camisa1/1.jpg",
    "../img/products/camisas/camisa1/2.jpg",
  ],
  stock: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <CartProvider value={[itemExample]}>
      <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
