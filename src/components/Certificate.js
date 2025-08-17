import React, { useState } from "react";
import "./Certificate.css";

import certJava from "../assets/certificates/java(basic).png";
import certPy1 from "../assets/certificates/python1.jpg";
import certPy2 from "../assets/certificates/python2.jpg";
import certCyber from "../assets/certificates/cyber.jpg";
import certUdemy from "../assets/certificates/CSS.jpg";

function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Java (Basic)",
      org: "HackerRank",
      year: "April 23, 2025",
      img: certJava,
    },
    {
      title: "Python Essentials 1",
      org: "Cisco Networking Academy",
      year: "May 8, 2025",
      img: certPy1,
    },
    {
      title: "Python Essentials 2",
      org: "Cisco Networking Academy",
      year: "May 8, 2025",
      img: certPy2,
    },
    {
      title: "Introduction to Cybersecurity",
      org: "Cisco Networking Academy",
      year: "May 8, 2025",
      img: certCyber,
    },
    {
      title: "CSS, Bootstrap, JavaScript, Web Development",
      org: "Udemy (Proper Dot Institute)",
      year: "May 16, 2025",
      img: certUdemy,
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">🏆 My Certificates</h2>
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <div
              className="cert-image"
              onClick={() => setSelectedCert(cert.img)}
            >
              <img src={cert.img} alt={cert.title} />
            </div>
            <h3>{cert.title}</h3>
            <p className="org">{cert.org}</p>
            <p className="year">{cert.year}</p>
            <button
              className="btn-cert"
              onClick={() => setSelectedCert(cert.img)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal for enlarged certificate */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedCert} alt="certificate" />
        </div>
      )}
    </section>
  );
}

export default Certificate;
