import React from 'react';
import './Programs.css';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Play Group Program',
      age: '3-5 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bgColor: 'var(--shape-blue)'
    },
    {
      id: 2,
      title: 'Nursery Program',
      age: '7-10 Years', // Kept from the image, although 7-10 for nursery is odd, I'll stick to the mockup text
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bgColor: 'var(--shape-yellow)'
    },
    {
      id: 3,
      title: 'Kindergarten (KG) Program',
      age: '10-2 Years', // Copied exactly from the mockup text
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bgColor: 'var(--shape-green)'
    }
  ];

  return (
    <section id="classes" className="programs-section">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Our Programs</span>
          <h2 className="section-title">Our Programs / Classes</h2>
        </div>

        <div className="programs-grid">
          {programs.map((prog) => (
            <div key={prog.id} className="program-card" style={{ backgroundColor: prog.bgColor }}>
              <div className="program-img-wrapper">
                <img src={prog.image} alt={prog.title} className="program-img" />
                <span className="program-age">{prog.age}</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">{prog.title}</h3>
                <p className="program-desc">{prog.desc}</p>
                <div className="program-duration">
                  Duration : {prog.duration}
                </div>
                <button className="program-btn">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative stars */}
      <div className="decor decor-star float" style={{ top: '20%', right: '10%' }}>⭐</div>
      <div className="decor decor-tiger float" style={{ left: '5%', top: '50%' }}>🐯</div>
    </section>
  );
};

export default Programs;
