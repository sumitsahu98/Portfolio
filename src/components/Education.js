import React from "react";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2 className="edu-title">🎓 Education</h2>
      <div className="timeline">

        {/* B.Tech */}
        <div className="timeline-item left">
          <div className="content">
            <h3>B.Tech. in Computer Science & Engineering</h3>
            <p className="institute">Sagar Group of Institutions – SISTec GN</p>
            <p className="year">2022 – 2026</p>
            <p className="details">CGPA: 7.05 / 10</p>
          </div>
        </div>

        {/* 12th */}
        <div className="timeline-item right">
          <div className="content">
            <h3>Senior Secondary (12th)</h3>
            <p className="institute">Govt. HS School, Maksudangarh</p>
            <p className="year">2021</p>
            <p className="details">Percentage: 93.60%</p>
          </div>
        </div>

        {/* 10th */}
        <div className="timeline-item left">
          <div className="content">
            <h3>Secondary (10th)</h3>
            <p className="institute">SSVM School, Maksudangarh</p>
            <p className="year">2019</p>
            <p className="details">Percentage: 92.80%</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
