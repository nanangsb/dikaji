import React from 'react';
import './CardGrid.css'; 

const CardGrid = ({ items, children }) => {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          {children}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
