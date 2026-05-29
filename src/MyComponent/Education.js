// src/MyComponent/Education.js
import React from "react";
import "./Education.css"; // Import the CSS file
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor Of Technology",
      description:
      "Having completed my Bachelor of Technology in Information Technology from Chandigarh Group of College Landran Punjab, I graduated with an 7.5 CGPA in the 2022-2026 batch. My academic journey has equipped me with a strong foundation in IT principles, programming, and system design. I am now eager to leverage my skills and knowledge to contribute to innovative technological solutions, drive digital transformation, and make a meaningful impact in the ever-evolving tech landscape." 
    },
    {
      title: "12th",
      description:
        "Having completed my 12th grade with a focus on Science from High School Dhaka, affiliated with Bihar Board, I secured 76% in the 2019-2021 batch. My academic journey has provided me with a solid foundation in key subjects like Mathematics, Physics, and Computer Science. I am now excited to apply the knowledge gained during this phase to pursue higher education in Information Technology, aiming to foster innovation and contribute to technological advancements in the future.",
    },
    {
      title: "10th",
      description:
        "Having completed my 10th grade from High School Dhaka, affiliated with Bihar Board, I secured 75% in the 2018-2019 batch. My academic journey has provided me with a solid foundation in core subjects such as Mathematics, Science, and English. I am now looking forward to applying the skills and knowledge acquired during this phase as I move forward in my educational path, particularly in Information Technology, with a focus on innovation and technology-driven solutions.",
    },
  ];

  return (
    <section id="education-section" className="education-section">
      <h2 className="section-title">
        My <span>Education</span>
      </h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <FaGraduationCap className="education-icon" />
            <h3>{edu.title}</h3>
            <p>{edu.description}</p>
            <FaArrowRight className="arrow-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
