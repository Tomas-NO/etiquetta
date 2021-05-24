// import { CartContext } from "../../context/cartContext";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { PromotionMsj } from "../promotion-msj/promotion-msj";

export const Page = ({ children, id }) => {
  return (
    <main>
      <PromotionMsj />
      <Navbar />
      <section id={id}>{children}</section>
      <Footer />
    </main>
  );
};
