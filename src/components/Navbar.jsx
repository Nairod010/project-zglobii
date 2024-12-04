import "./Navbar.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import PropTypes from "prop-types";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ZGLOBII.RO</Link>
      <ul className="navbar-links">
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
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}{...props}>
        {children}
      </Link>
    </li>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};
