import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Intelligent Vehicle Detection & Counting System",
      description:
        "A real-time system to detect and count vehicles using Python, OpenCV, and Machine Learning. Helps in traffic monitoring and analysis.",
      tech: "Python, OpenCV, NumPy, Computer Vision",
      github: "https://github.com/sumitsahu98/Real-time-vehicle-detectiona-and-counting-using-openCV", 
      demo: "#",
    },
    {
      title: "Travel Booking Website",
      description:
        "A MERN-based travel booking platform where users can explore destinations, view tour details, and book packages online.",
      tech: "React, Node.js, MongoDB, Express",
      github: "https://github.com/sumitsahu98/Travel-World", 
      demo: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "A Java Swing + MySQL application to manage hotel reservations, customer data, and payments.",
      tech: "Java Swing, MySQL",
      github: "https://github.com/sumitsahu98", 
      demo: "#",
    },
    {
      title: "Kidz World",
      description:
        "An interactive kids' website with games, quizzes, and learning materials. Designed with colorful layouts and animations.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/sumitsahu98", 
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React and deployed on Netlify.",
      tech: "React, CSS, Netlify",
      github: "https://github.com/sumitsahu98/Portfolio",
      demo: "https://portpolio-sumit-sahu.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech">
                  <b>Tech:</b> {project.tech}
                </p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
