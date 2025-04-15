import React from 'react';
import './footer.css';

import whatsapp from '../../assets/whatsapp.png';
import instagram4 from '../../assets/instagram4.jpg'
import x4 from '../../assets/x4.avif'
import yt from '../../assets/yt.webp';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          {/* First section */}
          <div className="footer-section">
            <h1>Edukate</h1>
            <p>
              Edukate is a platform dedicated to empowering aspiring youths.
              Empowering learners worldwide with accessible, high-quality
              education. Join us on the journey to knowledge and growth—
              anytime, anywhere.
            </p>
          </div>

          {/* Second section */}
          <div className="footer-section">
            <h1>Entrance Exams</h1>
            <ul>
              <li>School Boards</li>
              <li>IIT JEE Exams</li>
              <li>NEET Exams</li>
              <li>Defence Exams</li>
            </ul>
          </div>

          {/* Third section */}
          <div className="footer-section">
            <h1>Get in Touch</h1>
            <div className="footer-socials">
              <img src={whatsapp} alt="WhatsApp" />
              <img src={instagram4} alt="Instagram" />
              <img src={x4} alt="X (Twitter)" />
              <img src={yt} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
