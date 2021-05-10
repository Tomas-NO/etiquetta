import "./footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3 className="newsletter-title">
          Unite al newsletter de <span>etiquetta</span> y recibí nuestras
          mejores ofertas
        </h3>
        <p className="newsletter-text">Podés desuscribirte cuando quieras</p>
        <form className="newsletter-form">
          <input
            className="newsletter-form-input"
            type="text"
            placeholder="Tu Nombre"
          />
          <input
            className="newsletter-form-input"
            type="email"
            placeholder="Tu Email"
          />
          <button className="newsletter-form-button" type="submit">
            Suscribite
          </button>
        </form>
      </div>
      <div className="container">
        <div className="footer-navigation">
          <h3>Navegación</h3>
          <ul className="footer-links-list">
            <li className="footer-links-link">
              <Link exact to={`/productos`} className="footer-link">
                Productos
              </Link>
            </li>
            <li className="footer-links-link">
              <Link to={`/productos/camisas`} className="footer-link">
                Camisas
              </Link>
            </li>
            <li className="footer-links-link">
              <Link to={`/productos/sacos`} className="footer-link">
                Sacos
              </Link>
            </li>
            <li className="footer-links-link">
              <Link to={`/productos/pantalones`} className="footer-link">
                Pantalones
              </Link>
            </li>
            <li className="footer-links-link">
              <Link to={`/productos/zapatos`} className="footer-link">
                Zapatos
              </Link>
            </li>
            <li className="footer-links-link">
              <Link to={`/productos/relojes`} className="footer-link">
                Relojes
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-media">
          <h3>Redes Sociales</h3>
          <div className="social-media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="social-media-icon"
                icon={faFacebookF}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copyright">
          <img className="copyright-logo" src={"../img/logo.svg"} alt="Logo" />
          <p className="copyright-text">
            &copy; 2021 todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
