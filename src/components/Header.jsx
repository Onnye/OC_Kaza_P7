import { Link, useLocation } from "react-router-dom";
import logo from "./../images/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="header__navigation">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
