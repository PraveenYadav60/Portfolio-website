import React from "react";
import "./Services.css"; // Import the CSS file

const services = [
  {
    title: "Frontend Development",
    description:
      "We build responsive and interactive user interfaces using modern frontend technologies.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Our backend development ensures robust and scalable server-side applications.",
    icon: "🖥️",
  },
  {
    title: "Figma Design",
    description:
      "Creating visually stunning and user-friendly designs using Figma for wireframing, prototyping, and design systems.",
    icon: "✏️",
  },
  
  // {
  //   title: "FullStack Development",
  //   description:
  //     "End-to-end development solutions for both frontend and backend systems.",
  //   icon: "📦",
  // },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user experiences through thoughtful design.",
    icon: "🎨",
  },
  {
    title: "SEO Services",
    description:
      "Enhance your website’s visibility and search engine ranking with our SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Google Ads Campaigns",
    description:
      "Maximize your brand’s online presence with targeted Google Ads campaigns.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="title">SERVICES I OFFER</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
