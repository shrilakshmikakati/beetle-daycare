import React, { useState } from 'react';
import './AdmissionForm.css';
import { PhoneCall } from 'lucide-react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    email: '',
    phone: '',
    program: 'Play Group'
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `New Admission Application from ${formData.parentName}`;
    const body = `
Admission Details:
------------------
Parent Name: ${formData.parentName}
Child Age: ${formData.childAge}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${formData.program}
    `;
    
    window.location.href = `mailto:info@BeetleDayCare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setStatus('Redirecting to your mail client...');
    setFormData({ parentName: '', childAge: '', email: '', phone: '', program: 'Play Group' });
  };

  return (
    <section id="admission" className="admission-section">
      <div className="container admission-container">
        <div className="admission-content-box">
          <div className="admission-text-side">
            <span className="section-subtitle">Enroll Now</span>
            <h2 className="section-title">Book Admission <br/> For Your Child</h2>
            
            <div className="call-us admission-call">
              <div className="call-icon-wrapper" style={{ backgroundColor: 'var(--accent-orange)' }}>
                <PhoneCall size={20} color="white" />
              </div>
              <div className="call-info">
                <span className="call-label">Call Us Now</span>
                <span className="call-number">612-709-1764</span>
              </div>
            </div>
          </div>

          <div className="admission-form-side">
            <form onSubmit={handleSubmit} className="admission-form">
              <input 
                type="text" 
                name="parentName" 
                placeholder="Parent Name" 
                required 
                value={formData.parentName}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="childAge" 
                placeholder="Child Age" 
                required 
                value={formData.childAge}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
              <select 
                name="program" 
                value={formData.program}
                onChange={handleChange}
              >
                <option value="Play Group">Play Group Program</option>
                <option value="Nursery">Nursery Program</option>
                <option value="Kindergarten">Kindergarten Program</option>
              </select>
              
              <button type="submit" className="btn btn-primary submit-btn">Submit Request</button>
              
              {status && <p className="status-msg">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
