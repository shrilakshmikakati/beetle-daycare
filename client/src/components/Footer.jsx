import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> info@BeetleDayCare.com</p>
          <p><strong>Phone:</strong> 612-709-1764, 612-284-6436</p>
          <p><strong>Address:</strong> 3541 43rd Avenue South, Minneapolis, MN 55406</p>
        </div>
        
        <div className="footer-copyright">
          <p>© 2016. Beetle Day Care. All rights reserved. Powered by Agility Consulting Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
