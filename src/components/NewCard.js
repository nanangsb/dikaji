import React from 'react';

export default function NewCard({children}) {
  return (
    <div
      style={{
        fontSize: 'large',
        padding: '0.2rem',
        margin : '0.2rem',
        width: '50vw',
        border: 'thin solid green',
        borderRadius: '20px',
      }}>
      {children}
    </div>
  );
}
