import "./cart-items.scss";
import { Link } from "react-router-dom";
import { CartItem } from "./cart-item/cart-item";

export const CartItems = ({ items, removeItem, clearCart }) => {
  return (
    <table className="cart-items">
      <thead className="cart-header">
        <tr>
          <th scope="column"></th>
          <th scope="column" colSpan="2">
            Producto
          </th>
          <th scope="column">Precio</th>
          <th scope="column">Cantidad</th>
          <th scope="column">Subtotal</th>
        </tr>
      </thead>
      <tfoot className="cart-footer">
        <tr>
          <td colSpan="5">
            <Link className="cart-footer-link" to="/productos">
              &lt; Seguir comprando
            </Link>
          </td>
          <td colSpan="1">
            <Link to="/cart" className="cart-footer-clear" onClick={clearCart}>
              Limpiar carrito
            </Link>
          </td>
        </tr>
      </tfoot>
      <tbody className="cart-body">
        {items.map((item, key) => (
          <CartItem key={key} item={item} removeItem={removeItem} />
        ))}
      </tbody>
    </table>
  );
};
