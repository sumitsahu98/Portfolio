import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">Sumit</div>

      {/* Desktop Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
