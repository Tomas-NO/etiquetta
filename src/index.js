import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Routes } from "./routes";
import { CartProvider } from "./context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
