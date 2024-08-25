// src/components/Credits.js
import React from 'react';
import './credits.css';

function Credits() {
  return (
    <div className="credits-container">
      <div className="credits-wrapper">
        <div className="credits-item">Developed by Madhukar Reddy</div>
        <div className="credits-item">© {new Date().getFullYear()} Madhukar Reddy. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Credits;