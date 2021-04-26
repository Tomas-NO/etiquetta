import "./App.scss";
import { ItemListContainer } from "./components/item-list-container/item-list-container";
import { NavBar } from "./components/navbar/navbar";
import { useEffect, useState } from "react";

function App() {
  const [navigation, setNavigation] = useState([
    "Remeras",
    "Pantalones",
    "Zapatillas",
    "Relojes",
  ]);
  const [cart, setCart] = useState(2);
  const [user, setUser] = useState({
    name: "Tomás Olivera",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  });
  const [products, setProducts] = useState([
    {
      name: "remera",
      size: "L",
      brand: "Zara",
      stock: "5",
    },
    {
      name: "pantalon",
      size: "M",
      brand: "Levis",
      stock: "0",
    },
    {
      name: "Camisa",
      size: "XL",
      brand: "Stone",
      stock: "2",
    },
    {
      name: "Reloj",
      size: "-",
      brand: "Apple",
      stock: "12",
    },
    {
      name: "A",
      size: "-",
      brand: "Apple",
      stock: "15",
    },
    {
      name: "B",
      size: "-",
      brand: "Apple",
      stock: "90",
    },
    {
      name: "C",
      size: "-",
      brand: "Apple",
      stock: "1",
    },
    {
      name: "D",
      size: "-",
      brand: "Apple",
      stock: "3",
    },
    {
      name: "E",
      size: "-",
      brand: "Apple",
      stock: "10",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // cambiar los productos filtrados
    const newFilteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  }, [filter]);

  return (
    <div className="App">
      <NavBar user={user} cartQuantity={cart} navigation={navigation} />

      <input
        className="search"
        type="text"
        placeholder="Buscar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="products">
        <ItemListContainer products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
