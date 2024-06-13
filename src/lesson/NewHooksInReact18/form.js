import React, { useId, useMemo, useState, useTransition, useDeferredValue } from 'react';
import StudentList from './StudentList';
import studentListData from '../../mocks/studentList.json';

function FormComponent() {
  const id = useId()
  const [searchInput, setSearchInput] = useState('')
  // const [filterText, setFilterText] = useState('')
  // const [isPending, startTransition] = useTransition()

  /*------------ useTransition --------------*/
  // const data = studentListData
  // const data = useMemo(() => {
  //   return studentListData.map((student) => {
  //     const index = student.indexOf(filterText);

  //     return index === -1
  //       ? (<p>{student}</p>) // search not find.
  //       : (
  //         <p>
  //           {student.slice(0, index)}
  //           <span style={{ backgroundColor: 'yellow' }}> {student.slice(index, index + filterText.length)} </ span>
  //           {student.slice(index + filterText.length)}
  //         </p>
  //       );
  //   });
  // }, [filterText]);

  /*------------ useDeferredValue --------------*/
  const deferedValue = useDeferredValue(searchInput)

  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(deferedValue);

      return index === -1
        ? (<p>{student}</p>) // search not find.
        : (
          <p>
            {student.slice(0, index)}
            <span style={{ backgroundColor: 'yellow' }}> {student.slice(index, index + deferedValue.length)} </ span>
            {student.slice(index + deferedValue.length)}
          </p>
        );
    });
  }, [deferedValue]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)

    // startTransition(() => {
    //   setFilterText(e.target.value)
    // })
  }

  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search name: </label>
      <input id={id} type='text' name='name' value={searchInput} onChange={handleSearchInputChange} />

      {/* {isPending ? <p>Loading...</p> : <StudentList data={data} />} */}
      <StudentList data={data} />
    </div>
  );
}

export default FormComponent;
