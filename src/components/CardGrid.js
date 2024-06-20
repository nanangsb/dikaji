import React from 'react';
import './CardGrid.css'; 

const CardGrid = ({ children }) => {
  return (
    <div className="card-grid">
        <div className="card">
          {children}
        </div>
    </div>
  );
};

export default CardGrid;
