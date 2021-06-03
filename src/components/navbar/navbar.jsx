import "./navbar.scss";
import { CartWidget } from "./cart-widget/cart-widget";
import { HeaderLink } from "./header-link/header-link";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  function change_header() {
    let promotion_msj = document
      .getElementById("promotion-msj")
      .getBoundingClientRect();
    let navbar = document.getElementById("navbar");
    if (promotion_msj.top <= -44.4444465637207) {
      navbar.setAttribute("class", "navbar navbar-fixed");
    } else {
      navbar.setAttribute("class", "navbar");
    }
  }

  window.addEventListener("scroll", change_header);

  return (
    <header className="page-header">
      <div className="navbar" id="navbar">
        <NavLink exact to={`/`} className="navlink">
          <img className="logo" src={"../img/logo.svg"} alt="Logo" />
        </NavLink>
        <nav className="links">
          <ul className="links-list">
            <HeaderLink direction={"/productos"}>Productos</HeaderLink>
            <HeaderLink direction={"/productos/camisas"}>Camisas</HeaderLink>
            <HeaderLink direction={"/productos/sacos"}>Sacos</HeaderLink>
            <HeaderLink direction={"/productos/pantalones"}>
              Pantalones
            </HeaderLink>
            <HeaderLink direction={"/productos/zapatos"}>Zapatos</HeaderLink>
            <HeaderLink direction={"/productos/relojes"}>Relojes</HeaderLink>
            <HeaderLink direction={"/cart"}>
              <CartWidget />
            </HeaderLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
