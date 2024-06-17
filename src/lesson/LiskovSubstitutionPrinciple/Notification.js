import React from 'react';

const Notification = ({ message }) => {
  // console.log('Notification', message);

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;