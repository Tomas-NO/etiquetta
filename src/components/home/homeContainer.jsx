import "./homeContainer.scss";
import { Link } from "react-router-dom";

export const HomeContainer = ({ categories, cardImages }) => {
  return (
    <div>
      <div className="promotion">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fhome.jpg?alt=media&token=30dd14ee-1907-4096-a6b4-2758a49ac747"
          alt="Imagen Inicio"
          className="promotion-img"
        />
      </div>
      <div className="banners-categories">
        {categories.map((category, key) => (
          <Link
            key={key}
            className="banners-categories-link"
            to={`/productos/${category}`}
          >
            <img
              alt={`${category} card`}
              className="banners-categories-img"
              src={cardImages[category]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
