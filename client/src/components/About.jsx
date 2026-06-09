import React from 'react';
import './About.css';
import { CheckCircle, PhoneCall } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        <div className="about-image-side">
          <div className="about-image-wrapper blob">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Teacher and students" 
              className="about-img"
            />
          </div>
          <div className="decor decor-sun float" style={{ bottom: '10%', left: '10%' }}>☀️</div>
        </div>

        <div className="about-content-side">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">A Home Away From Home</h2>
          <p className="section-desc">
            ... our philosophy of child care is based on our belief that every child deserves to be at a happy and healthy home. At Beetle Day Care we plan to provide such a home when they are away from home. We strive to provide such an environment for every child in our day care: a home away from home. That's our cherished goal. We work closely with each and every parent to attain such a goal.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <CheckCircle className="check-icon" size={24} />
              <span>Child-Friendly Learning Environment</span>
            </div>
            <div className="about-feature">
              <CheckCircle className="check-icon" size={24} />
              <span>Focus On Child-Friendly, Safe, & Quality Education</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="#about-more" className="btn btn-primary">Know More <span>→</span></a>
            <div className="call-us">
              <div className="call-icon-wrapper">
                <PhoneCall size={20} color="white" />
              </div>
              <div className="call-info">
                <span className="call-label">Call Us Now</span>
                <span className="call-number">612-709-1764</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
