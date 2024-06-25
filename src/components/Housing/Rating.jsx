import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
  const stars = [0, 1, 2, 3, 4];

  return (
    <div className="rating">
      {stars.map((index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star ${index < value ? "star--filled" : ""}`}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
