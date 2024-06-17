import React from 'react';

const BaseButton = ({ label, onClick }) => {
  console.log('base button', label, onClick);

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default BaseButton;
