import { Page } from "../components/page/page";
import { CartContainer } from "../components/cart/cart-container";

export const Cart = () => {
  const items = [
    {
      category: "sacos",
      colors: ["negro"],
      description:
        "saco de velour con pintitas y dos botones en la parte delantera. calce slim fit. composición: 100% poliéster.",
      id: "2qwCooeDmsa2wGAHbm0znegroL",
      images: [
        ("../img/products/sacos/saco1/1.jpg",
        "../img/products/sacos/saco1/2.jpg"),
      ],
      price: 16600,
      quantity: 3,
      selectedColor: "negro",
      selectedSize: "L",
      sizes: [("S", "L", "XL")],
      stock: 4,
      title: "saco de velour slim fit",
    },
    {
      category: "pantalones",
      colors: ["azul", "gris", "negro"],
      description:
        "pantalón liso sin pinzas. corte slim fit. cierre con cremallera oculta y botón. dos bolsillos laterales y dos abotonados en la parte posterior.",
      id: "2qwCooeDmsa2wGAHbm0znegroXL",
      images: [
        ("../img/products/pantalones/pantalon3/1.jpg",
        "../img/products/pantalones/pantalon3/2.jpg"),
      ],
      price: 6170,
      quantity: 2,
      selectedColor: "negro",
      selectedSize: "L",
      sizes: [("S", "M", "L", "XL")],
      stock: 2,
      title: "pantalón de vestir liso slim fit",
    },
  ];
  return (
    <Page id="cart">
      <CartContainer items={items} />
    </Page>
  );
};
