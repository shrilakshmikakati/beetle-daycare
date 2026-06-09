import React from 'react';
import './PageStyles.css';
import AdmissionForm from '../components/AdmissionForm';

const Apply = () => {
  return (
    <>
      <section className="page-section" style={{ paddingBottom: '0' }}>
        <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-blue)' }}></div>
        <div className="container page-container">
          <div className="page-content">
            <h1 className="page-title">Applying for Admission</h1>
            <h2 className="page-subtitle">Welcome to the <em>home of happy, healthy kids!</em></h2>
            
            <p className="page-text">
              It's time for a simple follow-up if you like what you have seen and have decided to admit your kid to Beetle Day Care.
            </p>

            <p className="page-text">
              We have provided a range of easy to use resources for your entire family. They range from <strong>Application Form</strong> and parental resources provided on the Website links and the sidebar. We have also included some fun places for you and your kids to visit.
            </p>
            
            <p className="page-text">
              All that you have to do is to fill-in the <strong>Application Form</strong> below and come over to Beetle Day Care. We will take care of the rest.
            </p>

            <div className="page-contact-box">
              <p className="page-text"><strong>Call us or email us</strong> if you need any further information:</p>
              <p className="contact-email">info@BeetleDayCare.com</p>
              <p className="contact-bold">612-709-1764, 612-284-6436</p>
              <p className="contact-bold">3541 43rd Avenue South</p>
              <p className="contact-bold">Minneapolis, MN 55406</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Include the actual form below the text */}
      <AdmissionForm />
    </>
  );
};

export default Apply;
