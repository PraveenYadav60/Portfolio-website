// src/MyComponent/Contact.js
import React from "react";
import "./Footer.css";
import { Mail, Instagram, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact-section" className="contact-section">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>
      <div className="contact-details">
        <div className="contact-item">
          <Mail size={20} className="contact-icon" />
          <a href="mailto:anjali@gmail.com">yadavpraveenkumar@gmail.com</a>
        </div>
        <div className="contact-item">
          <Phone size={20} className="contact-icon" />
          <a href="tel:+916203737755">+91 6203737755</a>
        </div>
      </div>

      <div className="social-icons">
        <a href="mailto:yadavpraveenkumar@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/praveen-kumar-710bb3261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
