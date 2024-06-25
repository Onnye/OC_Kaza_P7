import { useLocation } from "react-router-dom";
import BannerHome from "../images/banner_home.png";
import BannerAbout from "../images/banner_about.png";

const Banner = () => {
  const location = useLocation();
  const path = location.pathname;

  let image = null;
  let textContent = null;

  // Détermine l'image et le contenu en fonction du chemin
  if (path === "/") {
    image = BannerHome;
    textContent = (
      <p className="banner__text">Chez vous, partout et ailleurs</p>
    );
  } else if (path === "/about") {
    image = BannerAbout;
  }

  // Si aucune image n'est définie, retourne null pour ne pas afficher la bannière
  if (!image) {
    return null;
  }

  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {textContent}
    </div>
  );
};

export default Banner;
