import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Sumit Sahu</span></h1>
        <h2>Aspiring MERN Stack Developer</h2>
        <p>
          Passionate about building full-stack applications, solving DSA problems, 
          and creating impactful solutions with modern technologies 🚀
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
          <a href="#projects" className="btn-outline">View My Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
