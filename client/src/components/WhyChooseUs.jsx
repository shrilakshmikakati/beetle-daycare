import React, { useState } from 'react';
import './WhyChooseUs.css';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('facilities');

  const stats = [
    { value: '100%', label: 'Smart Classrooms', bgColor: 'var(--shape-yellow)' },
    { value: '95%', label: 'Safe Playground', bgColor: 'transparent', isImage: true, image: 'https://images.unsplash.com/photo-1595856428258-298a002bd0b9?auto=format&fit=crop&w=300&q=80' },
    { value: '100%', label: 'Child Security', bgColor: 'var(--shape-blue)' },
    { value: '99%', label: 'Clean Environment', bgColor: 'var(--shape-pink)' }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-container">
          <div className="why-content">
            <span className="section-subtitle">Why Choose Us?</span>
            <h2 className="section-title">Why Choose Our School</h2>
            
            <div className="why-tabs">
              <button 
                className={`tab-btn ${activeTab === 'facilities' ? 'active' : ''}`}
                onClick={() => setActiveTab('facilities')}
              >
                Our Facilities
              </button>
              <button 
                className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum & Learning
              </button>
              <button 
                className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Mission & Vision
              </button>
            </div>

            <p className="why-desc">
              Qualified teachers who understand children's needs and focus on personal attention,
              through play-based and academic learning.
            </p>

            <ul className="why-list">
              <li><Check size={20} className="check-icon-small" /> Experienced & caring teachers</li>
              <li><Check size={20} className="check-icon-small" /> Safe & friendly environment</li>
              <li><Check size={20} className="check-icon-small" /> Modern learning methods</li>
              <li><Check size={20} className="check-icon-small" /> Focus on moral & social values</li>
            </ul>

            <div className="why-actions">
              <a href="#enroll" className="btn btn-primary">Enroll Now <span>→</span></a>
              <a href="#admission" className="btn btn-secondary">Book A Visit <span>→</span></a>
            </div>
          </div>

          <div className="why-image-side">
             <div className="cloud-image blob">
               <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Child drawing" />
             </div>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-circle" style={{ backgroundColor: stat.bgColor }}>
              {stat.isImage && <img src={stat.image} alt="Playground" className="stat-bg-image" />}
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
