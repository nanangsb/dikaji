import React from 'react';
import './CardGrid.css';

const Card = ({ number, title, description, itemCount, location, translation, children }) => (
  <div className="card">
    <h2>{number}. {title} - {translation}</h2>
    <p>{location} • {itemCount} ayat</p>
    <p>{description}</p>
    {children}
  </div>
);

const CardGrid = ({ children }) => (
  <div className="card-grid">
    {children}
  </div>
);

export { Card, CardGrid };

//import React from 'react';
//import './CardGrid.css'; 

//const Card = ({ children }) => (
//  <div className="card">
//    {children}
//  </div>
//);

//const CardGrid = ({ children }) => (
//  <div className="card-grid">
//    {children}
//  </div>
//);

//export { Card, CardGrid };

