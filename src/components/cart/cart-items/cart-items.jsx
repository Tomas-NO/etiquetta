import { Link } from "react-router-dom";
import "./cart-items.scss";

export const CartItems = ({ items }) => {
  console.log(items);
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
          <td colSpan="2">
            <Link className="cart-footer-link" to="/productos">
              &lt; Seguir comprando
            </Link>
          </td>
        </tr>
      </tfoot>
      <tbody className="cart-body">
        {items.map((item) => (
          <tr className="item" key={item.id}>
            <td className="">x</td>
            <td colSpan="2">
              <div className="item-info">
                <img className="item-img" src={item.images[0]} alt="item img" />
                <div>
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-variant">Color: {item.colors[0]}</p>
                  <p className="item-variant">Talle: {item.sizes[0]}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="item-number">${item.price}</p>
            </td>
            <td>
              <p className="item-number">{item.quantity}</p>
            </td>
            <td>
              <p className="item-number">${item.price * item.quantity}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
