import React, { useId } from 'react';

function StudentList({ data }) {

  return (
    <div>
      <h3>StudentList</h3>

      <div>{data.map((student, index) => <div key={index}>{student}</div>)}</div>
    </div>
  );
}

export default StudentList;
