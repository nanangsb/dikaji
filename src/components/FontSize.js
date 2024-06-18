import React from 'react';

export default function FontSize({children, size}) {
  return (
    <>
    <div
      style={{
        fontSize: size,
        padding: '0.2rem',
        textAlign: 'right',
        direction: 'rtl',
        fontFamily: 'lpmq-isyarat',
      }}>
      {children}
    </div>
  <hr />
      </>
  );
}
