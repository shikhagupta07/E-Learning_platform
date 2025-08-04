import React from 'react';
import bgImage from '../../assets/bg.png';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <img className="background-image" src={bgImage} alt="Background" />
        <div className="overlay-text">
          <h1><b>450k+ Students are Learning from Us</b></h1>
          <p>Edukate aims to transform not just through words, but provide results with numbers!</p>
          <a href="#" className="subscribe-btn">Subscribe Now</a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
