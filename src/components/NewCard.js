import React from 'react';

export default function NewCard({children}) {
  return (
    <>
    <div
      style={{
        fontSize: 'xx-large',
        padding: '0.2rem',
        textAlign: 'right',
        direction: 'rtl',
        width: '50vw',
        border: 'thin solid green',
      }}>
      {children}
    </div>
  <hr />
      </>
  );
}
