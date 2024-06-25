import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HousingData from "../data/data.json";
import Slideshow from "../components/Housing/Slideshow";
import Tag from "../components/Housing/Tag";
import Host from "../components/Housing/Host";
import Rating from "../components/Housing/Rating";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const housingExists = HousingData.some(
      (accommodation) => accommodation.id === id
    );
    if (!housingExists) {
      navigate("/error");
    }
  }, [id, navigate]);

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
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className="housing-page__host-rating">
          <Host name={housing.host.name} picture={housing.host.picture} />
          <Rating value={Number(housing.rating)} />
        </div>
      </div>
    </div>
  );
};

export default Housing;
