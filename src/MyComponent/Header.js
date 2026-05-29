import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons (install if not already: npm install lucide-react)
import "./Header.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className={`nav-links ${isMobile ? "mobile-menu" : ""}`}>
          <li><a href="#home-section" onClick={toggleMobileMenu}>HOME</a></li>
          <li><a href="#education-section" onClick={toggleMobileMenu}>EDUCATION</a></li>
          <li><a href="#skills-section" onClick={toggleMobileMenu}>SKILL</a></li>
          <li><a href="#projects-section" onClick={toggleMobileMenu}>PROJECTS</a></li>
          <li><a href="#contact-section" onClick={toggleMobileMenu}>CONTACT</a></li>
        </ul>
        
        {/* Menu icon moved outside of nav-links for right alignment */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
