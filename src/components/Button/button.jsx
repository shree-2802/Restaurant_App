import React from 'react';

const Button = ({ text }) => {
  return (
    <div
      style={{
        alignSelf: 'center',
        padding: '0.5rem 1.5rem',
        fontSize: '18px',
        fontFamily: 'var(--font-base)',
        backgroundColor: 'var(--color-golden)',
        border: 'none',
        borderRadius: '2px',
        color:'black'
      }}
    >
      {text}
    </div>
  );
};

export default Button;
