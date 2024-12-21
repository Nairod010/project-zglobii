import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterLogo />

        <FooterLinks />

        <FooterSocial />
      </div>
    </footer>
  );
};

const FooterLogo = () => (
  <div className="footer-logo">
    <h3>MyWebsite</h3>
    <p>&copy; 2024 MyWebsite. All rights reserved.</p>
  </div>
);

const FooterLinks = () => (
  <div className="footer-links">
    <h4>Quick Links</h4>
    <ul>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/faq">FAQ</a>
      </li>
    </ul>
  </div>
);

const FooterSocial = () => (
  <div className="footer-social">
    <h4>Follow Us</h4>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  </div>
);

export default Footer;

