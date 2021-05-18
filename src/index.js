import "./index.scss";
import { CartProvider } from "./context/cartContext";
import { Routes } from "./routes";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
