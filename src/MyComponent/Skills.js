// src/MyComponent/Skills.js
import React from "react";
import "./Skills.css"; // Import the CSS file
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  // FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { icon: <FaHtml5 />, color: "#E44D26" },        // HTML5
    { icon: <FaCss3Alt />, color: "#1572B6" },      // CSS3
    { icon: <FaJs />, color: "#F0DB4F" },           // JavaScript
    { icon: <FaReact />, color: "#61DBFB" },        // React
    // { icon: <SiSpring />, color: "#6DB33F" },       // Spring
    { icon: <FaBootstrap />, color: "#563D7C" },    // Bootstrap
    // { icon: <FaDocker />, color: "#2496ED" },       // Docker
    { icon: <FaJava />, color: "#F89820" },         // Java
  ];

  return (
    <section id="skills-section" className="skills-section">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            className="skill-icon"
            key={index}
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
