import "./Navbar.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Ensure menu is not toggled on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ZGLOBII.RO</Link>
      <div
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </div>
      <ul
        className={`navbar-links ${isMobileView && !isMenuOpen ? "hidden" : "visible"
          }`}
      >
        <CustomLink to="/home">ACASA</CustomLink>
        <CustomLink to="/store">MAGAZIN</CustomLink>
        <CustomLink to="/charity">PROIECTE CARITABILE</CustomLink>
        <CustomLink to="/events">EVENIMENTE</CustomLink>
        <CustomLink to="/contact">CONTACT</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};

