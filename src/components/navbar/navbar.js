import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./cart-widget/cart-widget";
import { Search } from "./search/search";
import { useState } from "react";

export const NavBar = () => {
  const [cart, setCart] = useState(2);
  const [user, setUser] = useState({
    name: "Tomás Olivera",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  });

  return (
    <header className="navbar">
      <NavLink exact to={`/`} className="navlink">
        <img className="logo" src={"../img/logo.png"} alt="Logo" />
      </NavLink>
      <nav className="links">
        <ul className="links-list">
          <li className="links-link">
            <NavLink
              exact
              to={`/productos`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Productos
            </NavLink>
          </li>
          <li className="links-link">
            <NavLink
              to={`/productos/camisas`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Camisas
            </NavLink>
          </li>
          <li className="links-link">
            <NavLink
              to={`/productos/sacos`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Sacos
            </NavLink>
          </li>
          <li className="links-link">
            <NavLink
              to={`/productos/pantalones`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Pantalones
            </NavLink>
          </li>
          <li className="links-link">
            <NavLink
              to={`/productos/zapatos`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Zapatos
            </NavLink>
          </li>
          <li className="links-link">
            <NavLink
              to={`/productos/relojes`}
              className="navlink"
              activeClassName="active-navlink"
            >
              Relojes
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="right">
        <Search />
        <CartWidget cartQuantity={cart} />
        <img className="user-img" src={user.avatar} alt="Usuario" />
      </div>
    </header>
  );
};
