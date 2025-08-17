import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtitle">I’d love to hear from you! Whether it’s a project, job opportunity, or just a chat — feel free to connect.</p>

        <div className="contact-content">
          {/* Left Side - Info */}
          <div className="contact-info glass-card">
            <h3>Contact Information</h3>
            <ul>
              <li><FaEnvelope className="icon" /> sumitsahu8069@gmail.com</li>
              <li><FaPhone className="icon" /> +91 9977159171</li>
              <li><FaMapMarkerAlt className="icon" /> Bhopal, India</li>
              <li><FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/sumit-sahu-1a17ab32a/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><FaGithub className="icon" /> <a href="https://github.com/sumitsahu98" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form glass-card">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-shimmer">Send Message ✉️</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
