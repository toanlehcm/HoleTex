const fetchUsers = async () => {
  const response = await fetch('https://reqres.in/api/user');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

export default fetchUsers
