import React from 'react';
import useFetchData from './useFetchData';
import fetchUsers from './fetchUsers';

const DependencyInversionPrinciple = () => {
  const { data: users, loading, error } = useFetchData(fetchUsers);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default DependencyInversionPrinciple;
