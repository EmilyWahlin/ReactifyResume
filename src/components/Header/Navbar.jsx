import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  // Function to determine if a link is active based on the current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isActive('/') ? 'active' : ''}`}>
      {/* Navbar header section */}
      <div className="navbar__header">
        <article className="navbar__name">Emily Wåhlin</article>
        <hr className="navbar__line" />
        <p className="navbar__role">Front End Developer</p>
      </div>

      {/* Navbar links section */}
      <ul className="navbar__links">
        {/* Home link with conditional 'active' class */}
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>

        {/* CV link with conditional 'active' class */}
        <li className={isActive('/cv') ? 'active' : ''}>
          <Link to="/cv">CV</Link>
        </li>

        {/* Projekt link with conditional 'active' class */}
        <li className={isActive('/projekt') ? 'active' : ''}>
          <Link to="/projekt">Projekt</Link>
        </li>

        {/* Kontakt link with conditional 'active' class */}
        <li className={isActive('/kontakt') ? 'active' : ''}>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;