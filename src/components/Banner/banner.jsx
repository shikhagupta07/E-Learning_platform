import React from 'react';
import Bannerpng from '../../assets/education.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container banner-container">
        {/* Banner text - Left side */}
        <div className="banner-text">
          <h1>The World's Leading Online Learning Platform</h1>
          <ul className="banner-features">
            <li>📚 10,000+ Courses</li>
            <li>👨‍🏫 Expert Instruction</li>
            <li>🔓 Lifetime Access</li>
          </ul>
        </div>

        {/* Banner image - Right side */}
        <div className="banner-image">
          <img src={Bannerpng} alt="Online Learning Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
