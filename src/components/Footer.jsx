import logoFooter from "./../images/logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logoFooter} alt="Kasa Logo" />
      </div>
      <p className="footer__text">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
