import React from 'react';
import { ArrowRight, Star, Sun, Cloud, Palette, Music } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background shape */}
      <div className="hero-bg-shape"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-subtitle">... home of happy, healthy kids</span>
          <h1 className="hero-title">Beetle Day Care</h1>
          <p className="section-desc">
            We provide the highest standards for kids to play, learn and rest. We are State of Minnesota licensed for infants and toddlers. Our manager, Sheila Jayaswal, brings 25 years of teaching experience to this day care.
          </p>
          <div className="hero-actions">
            <a href="#enroll" className="btn btn-primary">Enroll Now <ArrowRight size={18} /></a>
            <a href="#admission" className="btn btn-secondary">Book A Visit <ArrowRight size={18} /></a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          {/* Professional Floating Icons */}
          <div className="decor float" style={{ top: '5%', left: '-5%', color: '#F5A623' }}><Sun size={48} /></div>
          <div className="decor float" style={{ top: '20%', right: '0%', color: '#4A90E2', animationDelay: '1s' }}><Cloud size={56} /></div>
          <div className="decor float" style={{ bottom: '15%', left: '-15%', color: '#E85D75', animationDelay: '2s' }}><Palette size={40} /></div>
          <div className="decor float" style={{ bottom: '5%', right: '-10%', color: '#3FC380', animationDelay: '1.5s' }}><Star size={36} fill="#3FC380" /></div>
          
          <div className="main-image-container blob">
            {/* We use a placeholder matching the girl holding book */}
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Happy student" 
              className="main-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
