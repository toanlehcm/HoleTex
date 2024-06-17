import React from 'react';
import Button from './BaseButton';

const IconButton = ({ label, onClick, icon }) => {
  console.log('IconButton', label, onClick, icon);

  return (
    <Button onClick={onClick} label={
      <>
        <img src={icon} alt="" style={{ marginRight: '8px' }} />
        {label}
      </>
    } />
  );
};

export default IconButton;
