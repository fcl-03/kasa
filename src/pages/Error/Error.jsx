import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <main className="error">
      <h1 className="error__code">404</h1>

      <p className="error__text">Oups! La page que vous demandez n&apos;existe pas.</p>

      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
