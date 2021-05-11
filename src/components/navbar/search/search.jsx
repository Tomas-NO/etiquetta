import "./search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

  function show_search() {
    document
      .getElementById("search-item")
      .setAttribute("style", "display:block;");
  }

  function filter_items(key) {
    if (key === "Enter") {
      console.log("Pulsó ENTER");
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar"
        className="search-item"
        id="search-item"
        onKeyPress={(e) => filter_items(e.key)}
      />
      <FontAwesomeIcon icon={faSearch} onClick={show_search} />
    </div>

    // <input
    //   className="search"
    //   type="text"
    //   placeholder="Buscar"
    //   //   value={filter}
    //   //   onChange={(e) => setFilter(e.target.value)}
    // />
  );
};
