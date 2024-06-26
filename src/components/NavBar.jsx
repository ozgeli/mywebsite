import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.scss';

const NavBar = ({ onHomeClick }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = useCallback(() => {
    if (location.pathname === '/') {
      onHomeClick();
    }
  }, [location, onHomeClick]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <Link to="/" className="home-link" onClick={handleHomeClick}>
          <h1>Home</h1>
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
