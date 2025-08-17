import React from "react";
import "./Skills.css";

// Import icons
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "React", icon: <SiReact color="#61DBFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#68a063" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql color="#00758f" /> },
    { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <SiCss3 color="#264de4" /> },
    { name: "Python (Basics)", icon: <SiPython color="#3776ab" /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon-wrapper">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
