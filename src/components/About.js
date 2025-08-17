import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // replace with your image

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Sumit Sahu" className="profile-pic" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h2 className="about-heading fade-in">About Me</h2>

          <h3 className="fade-in delay-1">
            Hi, I'm <span className="highlight">Sumit Sahu</span>
          </h3>
          <p className="fade-in delay-2">
            A passionate <b>Computer Science Engineering student</b> (B.Tech 2022–2026) 
            with a strong interest in <b>Full Stack Development</b> and 
            <b> Problem Solving</b>. I enjoy building web applications, 
            learning new technologies, and applying them to real-world projects.
          </p>

          <p className="fade-in delay-3">
            My technical expertise includes <b>C++, Java, JavaScript, React, Node.js, 
            MongoDB, and MySQL</b>. I also have hands-on experience in 
            <b> Data Structures & Algorithms</b>, which helps me write 
            optimized and efficient code.
          </p>

          {/* Info Cards */}
          <div className="about-info fade-in delay-4">
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
          <a 
            href="/resume.pdf" 
            className="btn fade-in delay-5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
