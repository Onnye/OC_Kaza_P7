import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../sass/components/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); // État local pour gérer si le contenu est affiché ou non

  const Content = () => (
    <div
      className={`collapse__content ${
        isCollapsed ? "" : "collapse__content--open"
      }`}>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );

  return (
    <div className="collapse-container">
      <div
        className="collapse__header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!isCollapsed}
        role="button">
        <div className="collapse__title">{title}</div>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse__icon ${
            isCollapsed ? "" : "collapse__icon--open"
          }`}
        />
      </div>
      <Content />
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
