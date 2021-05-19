import "./item-count.scss";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemCount = ({
  stock,
  initial,
  onAdd,
  changeSelectedQuantity,
  selectedColor,
  selectedSize,
}) => {
  const [remainingStock, setRemainingStock] = useState(stock);
  const [selectedStock, setSelectedStock] = useState(initial);

  function stock_control(evt) {
    const id = evt.target.parentNode.id;
    if (id === "plus-control" && remainingStock > 0) {
      setSelectedStock(selectedStock + 1);
      setRemainingStock(remainingStock - 1);
    } else if (id === "minus-control" && selectedStock > 0) {
      setSelectedStock(selectedStock - 1);
      setRemainingStock(remainingStock + 1);
    }
    // toDo Cambiar esta forma de setear el stock
    changeSelectedQuantity(selectedStock + 1);
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
          value={selectedStock}
          placeholder={selectedStock}
          disabled
        />
        <FontAwesomeIcon
          className="item-count-control"
          id="plus-control"
          icon={faPlus}
          onClick={stock_control}
        />
      </div>
      {selectedStock > 0 && selectedColor && selectedSize ? (
        <Link to="/cart">
          <button className="item-count-button" onClick={onAdd}>
            Agregar al carrito
          </button>
        </Link>
      ) : (
        <button disabled className="item-count-button disabled">
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
