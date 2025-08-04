import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1><b>Edukate</b></h1>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li><ScrollLink to="home" smooth duration={500} onClick={handleScroll}>Home</ScrollLink></li>
          <li><ScrollLink to="services" smooth duration={500} onClick={handleScroll}>Services</ScrollLink></li>
          <li><ScrollLink to="about" smooth duration={500} onClick={handleScroll}>About Us</ScrollLink></li>
          <li><ScrollLink to="team" smooth duration={500} onClick={handleScroll}>Our Team</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={500} onClick={handleScroll}>Contact Us</ScrollLink></li>
          <li><Link to="/login" id='login' className="primary-btn" onClick={handleScroll}>Login/Signup</Link></li>
        </ul>

        <button
          className="navbar-mobile-icon"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <IoMdMenu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
