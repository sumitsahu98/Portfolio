import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.9, random: false },
          size: { value: 3, random: true },
          links: { enable: true, color: "#ffffff", opacity: 0.5, width: 1 },
          move: { enable: true, speed: 1.2 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default ParticlesBackground;
