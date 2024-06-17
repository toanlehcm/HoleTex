import React, { useState } from 'react';
import Task from './Task';

const EditableTask = ({ title, onSave }) => {
  const [editTitle, setEditTitle] = useState(title);

  const handleSave = () => {
    onSave(editTitle);
  };

  return (
    <div>
      <Task title={editTitle} />
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditableTask;
