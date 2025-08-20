import React from "react";
import "./Contact.css";
import contactImg from "../assets/contact.png"; // 📌 Add a contact-related image (SVG/PNG) in assets folder

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Let’s Connect</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Share your thoughts, opportunities, or ideas and I’ll get back to you.
        </p>

        <div className="contact-content">
          {/* Left Side - Image */}
          <div className="contact-image">
            <img src={contactImg} alt="Contact Illustration" />
          </div>

          {/* Right Side - Form */}
          <div className="contact-form glass-card">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-shimmer">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
