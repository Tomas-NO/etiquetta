import { NavLink } from "react-router-dom";

export const HeaderLink = ({ direction, children }) => {
  return (
    <li className="links-link">
      <NavLink
        exact
        to={`${direction}`}
        className="navlink"
        activeClassName="active-navlink"
      >
        {children}
      </NavLink>
    </li>
  );
};
