import React, { useCallback, useEffect, useMemo, useState } from 'react';
import LearnUseCallChild from './LearnUseCallbackChild';

function LearnUseCallback(props) {
  const [users, setUsers] = useState([])

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }, [])

  const handleClick = () => {

    getData('user')
      .then((res) => res.json())
      .then((res) => {
        const usersTemp = res.data
        setUsers(usersTemp)
      })
  }

  return (
    <div >
      <div>LearnUseCallback</div>
      <div>Data</div>
      <button onClick={handleClick}> Get user</button>

      <p>{JSON.stringify(users)}</p>
      <LearnUseCallChild getData={getData} />
    </div>
  );
}

export default LearnUseCallback;