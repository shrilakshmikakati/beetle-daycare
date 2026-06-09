import React, { useState } from 'react';
import './PageStyles.css';

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:info@BeetleDayCare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="page-section">
      <div className="page-header-bg blob"></div>
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-green)', left: '-5%', bottom: '10%', top: 'auto', width: '250px', height: '250px' }}></div>
      <div className="container page-container">
        <div className="page-content">
          <h1 className="page-title">FAQ</h1>
          <h2 className="page-subtitle">Welcome to the <em>home of happy, healthy kids!</em></h2>
          
          <p className="page-text">We provide the following information concerning your child care needs:</p>
          
          <div className="faq-list" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="faq-item">Answers to <strong style={{ color: '#3FC380' }}>FAQ</strong></div>
            <div className="faq-item">Information on our Website link pages</div>
            <div className="faq-item">Resources listed on the right-hand sidebar of our Website</div>
            <div className="faq-item">Child care counselling by our experienced day care personnel</div>
          </div>
          <div className="page-contact-box" style={{ marginTop: '40px' }}>
            <h3 className="page-subtitle" style={{ marginBottom: '15px', color: 'var(--text-dark)' }}>Get In Touch</h3>
            <p className="page-text" style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Have a question not listed here? Send us a message!</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px 20px', borderRadius: '10px', border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email Address" 
                required 
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px 20px', borderRadius: '10px', border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }}
              />
              <textarea 
                name="message" 
                placeholder="How can we help?" 
                required 
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px 20px', borderRadius: '10px', border: 'none', outline: 'none', minHeight: '120px', fontFamily: 'inherit', fontSize: '16px', resize: 'vertical' }}
              />
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', border: 'none' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
