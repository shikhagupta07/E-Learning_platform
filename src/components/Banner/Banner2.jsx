import React from 'react';
import Banner2png from '../../assets/banner.png';
import './Banner2.css'; 

const Banner2 = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        
        <div className="banner-text">
          <h1>
            Join our <span className="highlight">Community</span> to Start Your Journey
          </h1>
          <p>
            Explore our YouTube Channels and subscribe to get access to quality education for free.
          </p>
          <a href="#" className="banner-button">
            Explore Now
          </a>
        </div>

        <div className="banner-image">
          <img src={Banner2png} alt="Join our learning community" />
        </div>

      </div>
    </section>
  );
};

export default Banner2;
