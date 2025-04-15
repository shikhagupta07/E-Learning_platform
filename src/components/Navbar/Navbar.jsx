import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import './Navbar.css';


const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "#" },
  { id: 3, title: "About Us", path: "#" },
  { id: 4, title: "Our Team", path: "#" },
  { id: 5, title: "Contact Us", path: "#" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h1 ><b>Edukate</b></h1>
        </div>

        {/* Desktop & Mobile Menu */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a href={menu.path}>{menu.title}</a>
            </li>
          ))}
          <li>
            <button className="primary-btn">Sign In</button>   
          </li>
        </ul>

        {/* Mobile Menu Icon */}
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
