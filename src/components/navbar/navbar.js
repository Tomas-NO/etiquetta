import "./navbar.scss";
import logo from "../../img/logo.png";
import { CartWidget } from "../cart-widget/cart-widget";

export const NavBar = (props) => {
  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <nav className="links">
        <ul className="links-list">
          <li className="links-link">{props.navigation[0]}</li>
          <li className="links-link">{props.navigation[1]}</li>
          <li className="links-link">{props.navigation[2]}</li>
          <li className="links-link">{props.navigation[3]}</li>
        </ul>
      </nav>
      <div className="right">
        <input className="search" type="text" placeholder="Buscar" />
        <CartWidget cartQuantity={props.cartQuantity} />
        <img className="user-img" src={props.user.avatar} alt="Usuario" />
      </div>
    </header>
  );
};
