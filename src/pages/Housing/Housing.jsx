import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/slideshow/Slideshow";
import Rating from "../../components/rating/Rating";
import "./Housing.scss";
import Collapse from "../../components/collapse/Collapse";

function Housing() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  // Pour l'instant : si pas trouvé, on affiche juste la page Error via redirection
  if (!logement) {
    return <Navigate to="*" replace />;
  }

  const [firstName, lastName] = logement.host.name.split(" ");

  return (
  <main className="housing">
    <div className="container">
    <Slideshow pictures={logement.pictures} />

    <section className="housing__top">
      <div className="housing__left">
        <h1 className="housing__title">{logement.title}</h1>
        <p className="housing__location">{logement.location}</p>

        <div className="housing__tags">
          {logement.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="housing__right">
        <div className="host">
          <p className="host__name">{logement.host.name}</p>
          <img
            className="host__picture"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>

        <Rating rating={logement.rating} />
      </div>
    </section>

    <section className="housing__collapses">
  <Collapse title="Description">
    <p>{logement.description}</p>
  </Collapse>

  <Collapse title="Équipements">
    <ul className="collapse__list">
      {logement.equipments.map((eq) => (
        <li key={eq}>{eq}</li>
      ))}
    </ul>
  </Collapse>
</section>

    </div>
  </main>
);

}

export default Housing;
