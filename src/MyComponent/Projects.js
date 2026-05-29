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
            <h3>Plant AI Detective</h3>
            <p>
            Plant AI Detective is an advanced AI-powered tool designed to analyze plant health, detect diseases, and provide actionable insights for farmers, gardeners, and researchers.
            </p>
            <button className="project-btn">Explore</button>
          </div>
        </div>

        {/* Sneaker Store Card */}
        <div className="project-card sneaker">
          <img src="PlantAiDetective" alt="" />
          <div className="project-content">
            <h3>Sneaker Store</h3>
            <p>
              Introducing my latest endeavor: a visionary sneaker web project!
              With HTML, CSS, and JavaScript at its core, this platform seamlessly
              merges style and technology.
            </p>
            <button className="project-btn">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
