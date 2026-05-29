import React from "react";
import "./Skill.css";

const skillsData = [
  { name: "HTML", icon: "🔶" },
  { name: "CSS", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "Next.js", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "Postgres", icon: "🐘" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "🔵" },
  { name: "C++", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "PostMan", icon: "📨" },
  { name: "Database", icon: "💾" },
  { name: "OOPs", icon: "⚙️" },
  { name: "VS Code", icon: "📝" },
  { name: "Netlify", icon: "🚀" },
  { name: "cPanel", icon: "🖥️" },
  { name: "hPanel", icon: "🔧" },
  { name: "Render", icon: "🌀" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Analytical Skills", icon: "📊" },
  { name: "Responsible", icon: "✔️" },
  { name: "Content Writing", icon: "✍️" },
  { name: "Leadership", icon: "👑" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
