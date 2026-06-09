import React from 'react';
import './PageStyles.css';

const LetterToParents = () => {
  return (
    <section className="page-section">
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-green)' }}></div>
      <div className="page-header-bg blob" style={{ backgroundColor: 'var(--shape-pink)', left: '-15%', bottom: '20%', top: 'auto', width: '400px', height: '400px', opacity: 0.3 }}></div>
      <div className="container page-container">
        <div className="page-content">
          <h1 className="page-title">Letter to Parents</h1>
          <p className="page-text" style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>Dear Baby Parents,</p>
          
          <p className="page-text">
            Welcome to the “Beetle Babies”! To help make the transition from home to child care easier, we have developed a list of supplies your baby will need:
          </p>

          <div className="supplies-list" style={{ marginTop: '40px' }}>
            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Diapers</strong>
              <span className="page-text" style={{ margin: 0 }}>Most parents bring one large package a time. We will store them and let you know when they need more. Your baby will be changed every two hours or as needed.</span>
            </div>
            
            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Wipes</strong>
              <span className="page-text" style={{ margin: 0 }}>A package of wipes will last your baby about two weeks. We can store these as well if your purchase a large package. We will also let you know when your baby will need more.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Bottles</strong>
              <span className="page-text" style={{ margin: 0 }}>You will need to supply pre-made bottle each day your baby is with us. Four or five bottles (depending on your baby's appetite and length of stay each day) should be adequate. All used and unused bottles will be sent home each day to be washed/sanitized.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Formula/Food</strong>
              <span className="page-text" style={{ margin: 0 }}>We must have extra formula or breast milk available to us for emergencies. All food formulas should be prepared by parents. Lunch is also prepared by parents if the your child is 1 year old or more, or is already eating all table foods for lunch.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Cups</strong>
              <span className="page-text" style={{ margin: 0 }}>Once your baby has started using a “sippy” cup, please send three each day that your baby is with us. These will also be sent home each day to be washed/sanitized.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Shoes</strong>
              <span className="page-text" style={{ margin: 0 }}>Please bring indoor shoes and socks for your baby every day they come to day care.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Clothes/Bibs</strong>
              <span className="page-text" style={{ margin: 0 }}>Two extra outfits should be sufficient for any spit-ups or diaper leaks or any other unforeseen messiness. Bibs are great for the teething or drooling phase.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Blanket</strong>
              <span className="page-text" style={{ margin: 0 }}>You should provide sheets for your baby's crib. You have to launder these items at the end of each week.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Nuk or Pacifier</strong>
              <span className="page-text" style={{ margin: 0 }}>One nuk is fine but two are better if your baby uses one regularly. We will keep at least one labeled nuk in our class room.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Diaper Cream</strong>
              <span className="page-text" style={{ margin: 0 }}>OTC diaper rash ointment or a prescription cream (with a medication form) can be used.</span>
            </div>

            <div className="letter-row">
              <strong style={{ color: 'var(--text-dark)', fontSize: '18px' }}>Baby Photo</strong>
              <span className="page-text" style={{ margin: 0 }}>Please bring one baby or family photo for us to display in our class room.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterToParents;
