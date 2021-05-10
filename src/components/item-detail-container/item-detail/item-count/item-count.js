import "./item-count.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [initial, setInitial] = useState(props.initial);

  function stock_control(id) {
    if (id === "plus-control" && stock > 0) {
      setInitial(parseInt(initial) + 1);
      setStock(parseInt(stock) - 1);
    } else if (id === "minus-control" && initial > 0) {
      setInitial(parseInt(initial) - 1);
      setStock(parseInt(stock) + 1);
    }
  }

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <FontAwesomeIcon
          className="item-count-control"
          id="minus-control"
          icon={faMinus}
          onClick={(e) => stock_control(e.target.parentElement.id)}
        />
        <p id="item-count-stock">{initial}</p>
        <FontAwesomeIcon
          className="item-count-control"
          id="plus-control"
          icon={faPlus}
          onClick={(e) => stock_control(e.target.parentElement.id)}
        />
      </div>
      <button className="item-count-button" onClick={props.onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
