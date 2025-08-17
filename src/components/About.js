import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // replace with your image

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Sumit Sahu" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>

          <h3>Hi, I'm <span className="highlight">Sumit Sahu</span></h3>
          <p>
            A passionate <b>Computer Science Engineering student</b> (B.Tech 2022–2026) 
            with a strong interest in <b>Full Stack Development</b> and 
            <b> Problem Solving</b>. I enjoy building web applications, 
            learning new technologies, and applying them to real-world projects.
          </p>

          <p>
            My technical expertise includes <b>C++, Java, JavaScript, React, Node.js, 
            MongoDB, and MySQL</b>. I also have hands-on experience in 
            <b> Data Structures & Algorithms</b>, which helps me write 
            optimized and efficient code.
          </p>

          {/* Info Cards */}
          <div className="about-info">
            <div className="info-card">
              <h4>🎓 Education</h4>
              <p>SISTec, Bhopal — B.Tech CSE (2022–2026)</p>
            </div>
            <div className="info-card">
              <h4>💼 Goal</h4>
              <p>To become a Software Developer and contribute to impactful projects</p>
            </div>
          </div>

          {/* Resume Button */}
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
