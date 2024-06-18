import React from 'react';

export default function TextArab({children}) {
  return (
    <>
    <div
      style={{
        fontSize: 'xx-large',
        padding: '0.2rem',
        textAlign: 'right',
        direction: 'rtl',
        fontFamily: 'lpmq',
      }}>
      {children}
    </div>
  <hr />
      </>
  );
}
