import React from 'react';
import './EndOfAyahNumber.css';

const EndOfAyahNumber = ({ number }) => {
  return (
    <div className="end-of-ayah-container">
      {number}
      <span className="end-of-ayah-symbol">۝</span>
    </div>
  );
};

export default EndOfAyahNumber;
