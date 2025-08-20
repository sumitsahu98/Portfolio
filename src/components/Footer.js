// Footer.js
import React from "react";
import { FaHome, FaUser, FaBook, FaTools, FaGraduationCap, FaTrophy, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Left - Contact Info */}
      <div className="footer-left">
        <p><FaEnvelope /> sumitsahu8069@gmail.com</p>
        <p><FaPhone /> +91 9977159171</p>
        <p><FaMapMarkerAlt /> Bhopal, India</p>
      </div>

      {/* Middle - Navigation Icons */}
     <ul className="footer-links">
  <li>
    <a href="#home" data-tooltip="Home"><FaHome /></a>
  </li>
  <li>
    <a href="#about" data-tooltip="About"><FaUser /></a>
  </li>
  <li>
    <a href="#education" data-tooltip="Education"><FaGraduationCap /></a>
  </li>
  <li>
    <a href="#projects" data-tooltip="Projects"><FaBook /></a>
  </li>
  <li>
    <a href="#skills" data-tooltip="Skills"><FaTools /></a>
  </li>
  <li>
    <a href="#certificates" data-tooltip="Certificates"><FaTrophy /></a>
  </li>
  <li>
    <a href="#contact" data-tooltip="Contact"><FaEnvelope /></a>
  </li>
</ul>


      {/* Right - Social Media */}
      <div className="footer-right">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/i_sumit_sahu__/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
}

export default Footer;
