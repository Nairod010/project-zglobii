import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterLogo />

        <FooterSocial />
      </div>
    </footer>
  );
};

const FooterLogo = () => (
  <div className="footer-logo">
    <h3>Zglobii</h3>
    <p>&copy; 2024 Zglobii. All rights reserved.</p>
  </div>
);

const FooterSocial = () => (
  <div className="footer-social">
    <h4>Follow Us</h4>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  </div>
);

export default Footer;

