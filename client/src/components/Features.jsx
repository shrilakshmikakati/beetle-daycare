import React from 'react';
import './Features.css';
import { BookOpen, Users, ShieldCheck, MonitorPlay } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Active Learning',
      icon: <BookOpen size={32} color="#E85D75" />,
      bgColor: 'var(--shape-pink)',
    },
    {
      id: 2,
      title: 'Expert Teachers',
      icon: <Users size={32} color="#4A90E2" />,
      bgColor: 'var(--shape-blue)',
    },
    {
      id: 3,
      title: '100% Safe Campus',
      icon: <ShieldCheck size={32} color="#3FC380" />,
      bgColor: 'var(--shape-green)',
    },
    {
      id: 4,
      title: 'Modern Curriculum',
      icon: <MonitorPlay size={32} color="#F5A623" />,
      bgColor: 'var(--shape-pink)', // Using pink again for the last one as per image
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card" 
              style={{ backgroundColor: feature.bgColor }}
            >
              <div className="feature-icon bg-white">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
