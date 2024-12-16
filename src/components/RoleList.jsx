import React, { useState } from 'react';

const RoleList = () => {
  const [roles] = useState([
    { id: 1, name: 'Admin', permissions: 'Read, Write, Delete' },
    { id: 2, name: 'Editor', permissions: 'Read, Write' },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Role Management</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-6">Role Name</th>
            <th className="py-3 px-6">Permissions</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="py-3 px-6">{role.name}</td>
              <td className="py-3 px-6">{role.permissions}</td>
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

export default RoleList;
