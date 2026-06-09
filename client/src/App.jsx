import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import TuitionRate from './pages/TuitionRate';
import LetterToParents from './pages/LetterToParents';
import Apply from './pages/Apply';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Wave shape for top hero */}
      <div className="hero-bg"></div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tuition" element={<TuitionRate />} />
          <Route path="/parents" element={<LetterToParents />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
