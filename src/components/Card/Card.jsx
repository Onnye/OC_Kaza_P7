import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/logement/${id}`); // Redirection vers l'URL spécifique au logement avec l'ID correspondant
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={cover} alt={title} className="card__image" />
      <div className="card__title">{title}</div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
