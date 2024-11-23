import React from 'react';
import UserManagement from '../components/UserManagement';

const Users = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <UserManagement />
    </div>
  );
};

export default Users;
