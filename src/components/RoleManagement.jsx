import React, { useState, useEffect } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editRole, setEditRole] = useState('');

  // Mock API call or data fetch
  useEffect(() => {
    setTimeout(() => {
      setRoles([
        { name: 'Admin' },
        { name: 'Editor' },
        { name: 'Viewer' },
      ]);
    }, 1000);
  }, []);

  const handleAddRole = () => {
    if (newRole) {
      setRoles([...roles, { name: newRole }]);
      setNewRole('');
    }
  };

  const handleDeleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  const handleEditRole = (index) => {
    setEditIndex(index);
    setEditRole(roles[index].name);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editRole) {
      const updatedRoles = [...roles];
      updatedRoles[editIndex] = { name: editRole };
      setRoles(updatedRoles);
      setIsEditing(false);
      setEditIndex(null);
      setEditRole('');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditRole('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Role Management</h2>

      {/* Add Role Input */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Enter new role"
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>

      {/* Role List */}
      {roles.length === 0 ? (
        <div className="text-center text-gray-500">No roles available.</div>
      ) : (
        <ul className="space-y-3">
          {roles.map((role, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-md"
            >
              <span className="text-gray-700">{role.name}</span>
              <div className="flex space-x-2">
                <button
                  className="text-yellow-500 hover:text-yellow-600"
                  onClick={() => handleEditRole(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteRole(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Role Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Role</h3>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={editRole}
              onChange={(e) => setEditRole(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
