import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png"; // adapte si ton nom est différent
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="Kasa" />
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
