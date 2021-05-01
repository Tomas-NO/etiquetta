import "./search.scss";

export const Search = (props) => {
  //   const [filteredProducts, setFilteredProducts] = useState(products);
  //   const [filter, setFilter] = useState("");

  //   useEffect(() => {
  //     // cambiar los productos filtrados
  //     const newFilteredProducts = products.filter((product) =>
  //       product.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //     setFilteredProducts(newFilteredProducts);
  //   }, [filter]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Buscar"
      //   value={filter}
      //   onChange={(e) => setFilter(e.target.value)}
    />
  );
};
