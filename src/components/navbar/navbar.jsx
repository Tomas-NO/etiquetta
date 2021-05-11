import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./cart-widget/cart-widget";
import { Search } from "./search/search";
import { User } from "./user/user";

export const Navbar = () => {
  return (
    <header className="page-header">
      <div className="navbar">
        <NavLink exact to={`/`} className="navlink">
          <img className="logo" src={"../img/logo.svg"} alt="Logo" />
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
          <div className="header-icon">
            <Search />
          </div>
          <div className="header-icon">
            <User />
          </div>
          <div className="header-icon">
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  );
};
