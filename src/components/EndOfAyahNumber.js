// EndOfAyahNumber.js
import React from 'react';
import './EndOfAyahNumber.css';

const EndOfAyahNumber = ({ number }) => {
  return (
    <div className="end-of-ayah-container">
      <span className="end-of-ayah-symbol">۝</span>
      <span className="end-of-ayah-number">{number}</span>
    </div>
  );
};
