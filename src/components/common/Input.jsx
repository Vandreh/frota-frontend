import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{border: '2px solid', padding: '10px', margin: '10px'}} />;
};

export default Input;
