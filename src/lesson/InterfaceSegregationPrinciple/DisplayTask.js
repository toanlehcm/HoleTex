import React from 'react';
import Task from './Task';

const DisplayTask = ({ title, description }) => {
  return (
    <div>
      <Task title={title} />
      <p>{description}</p>
    </div>
  );
};

export default DisplayTask;
