import React from 'react';
import './PageStyles.css';

const TuitionRate = () => {
  return (
    <section className="page-section">
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-yellow)' }}></div>
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-blue)', left: '-10%', top: '40%', width: '300px', height: '300px' }}></div>
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-pink)', right: '10%', bottom: '0', width: '200px', height: '200px', top: 'auto' }}></div>
      <div className="container page-container">
        <div className="page-content">
          <h1 className="page-title">Tuition Rate</h1>
          
          <div className="pricing-card">
            <h3 style={{ fontSize: '24px', color: 'var(--text-dark)' }}>Daily Rate</h3>
            <div className="pricing-amount">$45<span>/day</span></div>
            <p className="page-text" style={{ margin: '0' }}>Late Pick-up: <strong>$10/hr</strong></p>
          </div>

          <p className="contact-bold" style={{ fontSize: '18px', marginTop: '30px', textAlign: 'center' }}>Daycare hours: 7:00 AM to 5:00 PM</p>
          
          <p className="page-text" style={{ textAlign: 'center' }}>The daycare is not available on a part-time basis.</p>

          
        </div>
      </div>
    </section>
  );
};

export default TuitionRate;
