// import { CartContext } from "../../context/cartContext";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { PromotionMsj } from "../promotion-msj/promotion-msj";
// import { useContext } from "react";

export const Page = ({ children, id }) => {
  // const cart = useContext(CartContext);
  // console.log("cart =>", cart);

  return (
    <main>
      <PromotionMsj />
      <Navbar />
      <section id={id}>{children}</section>
      <Footer />
    </main>
  );
};
