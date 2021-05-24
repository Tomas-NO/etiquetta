import "./item-count.scss";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const ItemCount = ({
  stock,
  onAdd,
  setSelectedQuantity,
  selectedQuantity,
  selectedColor,
  selectedSize,
}) => {
  function stock_control(evt) {
    const id = evt.target.parentNode.id;

    if (id === "plus-control" && selectedQuantity < stock) {
      setSelectedQuantity(selectedQuantity + 1);
    } else if (
      id === "minus-control" &&
      1 < selectedQuantity &&
      selectedQuantity <= stock
    ) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  }
  function showAlert() {
    swal("Ocurrió un error", "Debes seleccionar un color y un tamaño", "error");
  }

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <FontAwesomeIcon
          className="item-count-control"
          id="minus-control"
          icon={faMinus}
          onClick={stock_control}
        />
        <input
          type="number"
          className="item-count-stock"
          id="item-count-stock"
          value={selectedQuantity}
          placeholder={selectedQuantity}
          disabled
        />
        <FontAwesomeIcon
          className="item-count-control"
          id="plus-control"
          icon={faPlus}
          onClick={stock_control}
        />
      </div>
      {selectedColor && selectedSize ? (
        <Link to="/cart">
          <button className="item-count-button" onClick={onAdd}>
            Agregar al carrito
          </button>
        </Link>
      ) : (
        <button className="item-count-button" onClick={showAlert}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
