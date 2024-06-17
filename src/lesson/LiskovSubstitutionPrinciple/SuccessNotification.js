import React from 'react';
import Notification from './Notification';

const SuccessNotification = ({ message }) => {
  console.log('SuccessNotification', message);

  return (
    <div className="notification success">
      <Notification message={message} />
    </div>
  );
};

export default SuccessNotification;
