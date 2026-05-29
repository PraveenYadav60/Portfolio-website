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
          <p>a passionate Full Stack Developer & Content Creator, crafting engaging web experiences and inspiring stories. With expertise in MongoDb, Express.js, React.js, Node.js, and video storytelling, I bring ideas to life through interactive websites and compelling Instagram content. Check out my projects, explore my content, or let's collaborate to build something amazing!
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
