import { useLocation } from "react-router-dom";
import Banner_home from "../images/banner_home.png";
import Banner_about from "../images/banner_about.png";

const Banner = () => {
  const location = useLocation();
  const path = location.pathname;

  let image = null;
  let textContent = null;

  // Détermine l'image et le contenu en fonction du chemin
  if (path === "/") {
    image = Banner_home;
    textContent = <p>Chez vous, partout et ailleurs</p>;
  } else if (path === "/about") {
    image = Banner_about;
  }

  // Si aucune image n'est définie, retourne null pour ne pas afficher la bannière
  if (!image) {
    return null;
  }

  return (
    <div className="Banner" style={{ backgroundImage: `url(${image})` }}>
      {textContent}
    </div>
  );
};

export default Banner;
