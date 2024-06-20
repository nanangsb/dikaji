import React from 'react';
import './CardGrid.css';

const Card = ({ number, title, description, itemCount, location, translation, children }) => (
  <div className="card">
    <h2>{number}</h2>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Item Count: {itemCount}</p>
    <p>Location: {location}</p>
    <p>Translation: {translation}</p>
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

