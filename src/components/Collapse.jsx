import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../sass/components/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <div
          className="collapse__header"
          onClick={handleToggleCollapse}
          aria-expanded={!isCollapsed}
          role="button">
          <div className="collapse__title">{title}</div>
          <div
            className={`collapse__icon ${
              isCollapsed ? "" : "collapse__icon--open"
            }`}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
        <div
          className={`collapse__content ${
            isCollapsed ? "" : "collapse__content--open"
          }`}>
          <div className="collapse__inner">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
