import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HousingData from "../data/data.json";
import Slideshow from "../components/Housing/Slideshow";
import Host from "../components/Housing/Host";
import Rating from "../components/Housing/Rating";
import Collapse from "../components/Collapse";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Utilisation du hook useEffect pour exécuter du code après le rendu
  useEffect(() => {
    const housingExists = HousingData.some(
      (accommodation) => accommodation.id === id
    );
    if (!housingExists) {
      navigate("/error");
    }
  }, [id, navigate]); // Dépendances useEffect - se déclenche quand l'ID ou navigate change

  const housing = HousingData.find((housing) => housing.id === id);
  if (!housing) {
    return null;
  }

  return (
    <div className="housing-page">
      <Slideshow images={housing.pictures} />
      <div className="housing-page__details">
        <div className="housing-page__header">
          <h1>{housing.title}</h1>
          <p className="location">{housing.location}</p>
          <div className="tags">
            {housing.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="housing-page__host-rating">
          <Host name={housing.host.name} picture={housing.host.picture} />
          <Rating value={Number(housing.rating)} />
        </div>
      </div>
      <div className="description-collapse">
        <Collapse title="Description" content={housing.description} />
        <Collapse title="Équipements" content={housing.equipments} />
      </div>
    </div>
  );
};

export default Housing;
