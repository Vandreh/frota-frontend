import React, { useState } from 'react';

const Button = ({ type, text, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    transitionDuration: '0.4s',
    backgroundColor: hovered ? '#04AA6D' : '#008CBA', // Altera a cor conforme hover
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)} // Ativa o hover
      onMouseLeave={() => setHovered(false)} // Desativa o hover
    >
      {text}
    </button>
  );
};

export default Button;
