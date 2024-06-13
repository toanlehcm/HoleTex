import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default function UserInformation() {
  const { user } = useContext(AppContext)

  return user && (
    <div>
      <h5>User Information</h5>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
    </ div>
  )
}

