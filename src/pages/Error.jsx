import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="error-page__redirect">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
};

export default Error;
