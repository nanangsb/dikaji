import React from 'react';

export default function FontSize({children, size}) {
  return (
    <>
    <span
      style={{
        fontSize: size,
        padding: '0.2rem',
        dir: 'ltr',
      }}>
      {children}
    </span>
  <hr />
      </>
  );
}
