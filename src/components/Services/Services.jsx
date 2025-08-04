import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesData = [
  { id: 1, title: "9th & 10th", path: "9-10", icon: "📘" },
  { id: 2, title: "11th & 12th", path: "11-12", icon: "📗" },
  { id: 3, title: "JEE", path: "jee", icon: "📐" },
  { id: 4, title: "NEET", path: "neet", icon: "🧬" },
  { id: 5, title: "UPSC", path: "upsc", icon: "📜" },
  { id: 6, title: "NDA", path: "nda", icon: "🎖️" }
];

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
              <Link to={`/explore/${service.path}`} className="service-link">Explore →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
