import React from 'react';
import './Services.css'; // Make sure to import the CSS

const ServicesData = [
  { id: 1, title: "9th & 10th", link: "#", icon: "📘", delay: 0.2 },
  { id: 2, title: "11th & 12th", link: "#", icon: "📗", delay: 0.3 },
  { id: 3, title: "JEE", link: "#", icon: "📐", delay: 0.4 },
  { id: 4, title: "NEET", link: "#", icon: "🧬", delay: 0.5 },
  { id: 5, title: "UPSC", link: "#", icon: "📜", delay: 0.6 },
  { id: 6, title: "NDA", link: "#", icon: "🎖️", delay: 0.7 }
];

// Placeholder for animation logic
const SlideLeft = (delay) => {
  return {}; // you can integrate framer-motion or animation classes here
};

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h1 className="services-heading"><b>Services We Provide</b></h1>
        <div className="services-grid">
          {ServicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <a href={service.link} className="service-link">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
