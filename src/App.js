import "./App.scss";
import { ItemListContainer } from "./components/item-list-container/item-list-container";
import { NavBar } from "./components/navbar/navbar";
import { useEffect, useState } from "react";

// import ejemplo from "./products.json";

function App() {
  const [navigation, setNavigation] = useState([
    "Camisas",
    "Sacos",
    "Pantalones",
    "Zapatos",
    "Relojes",
  ]);
  const [cart, setCart] = useState(2);
  const [user, setUser] = useState({
    name: "Tomás Olivera",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    };
    getProducts();
  }, []);

  // const [products, setProducts] = useState(ejemplo);
  // console.log(ejemplo);

  return (
    <div className="App">
      <NavBar user={user} cartQuantity={cart} navigation={navigation} />

      <ItemListContainer products={products} />
    </div>
  );
}

export default App;
