import React from 'react';
import './CardGrid.css'; 

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

const CardGrid = ({ children }) => (
  <div className="card-grid">
    {children}
  </div>
);

export { Card, CardGrid };
