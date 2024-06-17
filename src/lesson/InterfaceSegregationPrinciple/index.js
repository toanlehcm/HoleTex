import React from 'react';
import DisplayTask from './DisplayTask';
import EditableTask from './EditableTask';

const InterfaceSegregationPrinciple = () => {
  const handleSave = (newTitle) => {
    console.log('New title saved:', newTitle);
  };

  return (
    <div>
      <DisplayTask title="Task 1" description="This is task 1" />
      <EditableTask title="Task 2" onSave={handleSave} />
    </div>
  );
};

export default InterfaceSegregationPrinciple;
