import React from 'react';
import './CardGrid.css'; 

const CardGrid = ({ children }) => {
  return (
    <div className="card-grid">
      {children}
    </div>
  );
};

export const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export default CardGrid;
