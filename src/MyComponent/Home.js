import React from "react";
import profilePic from "./PKY1.jpg"; // Replace with your image path
import { FaWhatsapp, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Home.css";

const Profile = () => {
  return (
    <section id="home-section" className="profile-section">
      <div className="profile-container">
        <div className="profile-text">
          <h2><span className="highlight">Hello,</span> I'm</h2>
          <h1>Praveen <span className="highlight">Kumar</span></h1>
          <p>a passionate Frontend Developer and UI/UX Designer with strong expertise in creating responsive, user-friendly, and visually appealing web interfaces. Experienced in modern frontend technologies and highly skilled in Figma for wireframing, prototyping, design systems, and crafting intuitive digital experiences that combine functionality with modern design aesthetics.



          </p>

         
          <div className="social-icons">
            <FaWhatsapp className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
            <FaMailBulk className="icon" />
          </div>
          <button className="glow-button">More About Me</button>
        </div>
        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
