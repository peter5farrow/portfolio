import { useState } from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">
          <NavButton page="home" />
        </h1>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavButton page="projects" />
          </li>
          <li>
            <NavButton page="contact-me" />
          </li>
          <li>
            <NavButton page="resume" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
