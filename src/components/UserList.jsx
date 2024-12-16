import React, { useState } from 'react';

const UserList = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Role</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">{user.role}</td>
              <td className="py-3 px-6">{user.status}</td>
              <td className="py-3 px-6">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
