import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-icon float">⭐</div>
          <span>Beetle Day Care</span>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/tuition">Tuition Rates</Link>
          <Link to="/parents">Letter to Parents</Link>
          <Link to="/apply">Apply</Link>
        </div>
        
        <div className="nav-actions">
          <Link to="/apply" className="btn btn-primary">
            Get In Touch <span>→</span>
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
