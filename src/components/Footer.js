import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sumit. All Rights Reserved.</p>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
