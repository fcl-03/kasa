import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img className="card__img" src={cover} alt={title} />
      <div className="card__overlay" />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}

export default Card;
