import logo_footer from "./../images/logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo_footer} alt="Kasa Logo" />
      </div>
      <p className="footer_text">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
