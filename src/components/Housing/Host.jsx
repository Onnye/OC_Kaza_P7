import PropTypes from "prop-types";

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <div className="host__name">{name}</div>
      <img src={picture} alt={`Photo de ${name}`} className="host__picture" />
    </div>
  );
};

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
