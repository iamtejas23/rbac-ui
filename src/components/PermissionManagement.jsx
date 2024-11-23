import React from 'react';
import { mockPermissions } from '../mockApi';

const PermissionManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Permission Management</h2>
      <ul className="space-y-2">
        {mockPermissions.map((permission, index) => (
          <li key={index} className="bg-gray-100 p-2 border rounded">
            {permission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
