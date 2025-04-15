import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Heropic from '../../assets/Hero.png';
import Blob from '../../assets/blob.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-container container">
        {/* Text Section - Now on the Left */}
        <div className="hero-content">
          <h1>
            Let’s learn to build a <span>Career</span> for your future
          </h1>

          <ul className="hero-features">
            <li>📚 Expert-led learning paths</li>
            <li>🧠 Hands-on interactive lessons</li>
            <li>🚀 Career-ready skills for real jobs</li>
          </ul>

          <div className="hero-button-wrapper">
            <button className="hero-btn">
              Get Started <IoIosArrowRoundForward />
            </button>
          </div>
        </div>

        {/* Image Section - Now on the Right */}
        <div className="hero-image">
          <img src={Heropic} alt="Illustration of student learning" className="hero-main-img" />
          <img src={Blob} alt="Abstract background shape" className="hero-blob" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
