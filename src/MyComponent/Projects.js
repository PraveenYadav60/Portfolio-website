// src/MyComponent/Projects.js
import React from "react";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h2 className="section-title">
        Latest <span>Project</span>
      </h2>
      <div className="projects-grid">
        {/* Plant Card  */}
        <div className="project-card netflix">
          <div className="project-content">
            <h3>MVECT Website </h3>
            <p>
            MVECT(https://www.mvectrust.org) is a non-profit NGO working to empower underprivileged communities through education, healthcare, women empowerment, vocational training, and sustainable social development.

            </p>
            <a
              href="https://www.mvectrust.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Sneaker Store Card */}
        <div className="project-card sneaker">
          <img src="PlantAiDetective" alt="" />
          <div className="project-content">
            <h3>Plant AI Detective</h3>
            <p>
              Plant AI Detective is an advanced AI-powered tool designed to analyze plant health, detect diseases, and provide actionable insights for farmers, gardeners, and researchers.
            </p>
            <a
              href="https://github.com/PraveenYadav60/PlantAiDetective"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
