import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function UserManagement() {
  const { users, setUsers, roles } = useAppContext();
  const [search, setSearch] = useState('');

  // Add a new user
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: '',
      role: roles[0]?.name || '',
      status: 'Active',
      isEditing: true,
    };
    setUsers([...users, newUser]);
  };

  // Save user changes
  const handleSaveUser = (user) => {
    if (!user.name.trim()) {
      alert('User name cannot be empty.');
      return;
    }

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, isEditing: false } : u
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // Edit user
  const handleEditUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isEditing: true } : user
    );
    setUsers(updatedUsers);
  };

  // Delete user
  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  // Toggle user status
  const handleToggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // Search users by name
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filtered users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>

      {/* Search and Add User */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={handleSearchChange}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) =>
              user.isEditing ? (
                <tr key={user.id} className="bg-blue-50">
                  <td className="px-4 py-2 border">
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        setUsers(
                          users.map((u) =>
                            u.id === user.id
                              ? { ...u, name: e.target.value }
                              : u
                          )
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        setUsers(
                          users.map((u) =>
                            u.id === user.id
                              ? { ...u, role: e.target.value }
                              : u
                          )
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className={`px-3 py-1 rounded-md ${
                        user.status === 'Active'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleSaveUser(user)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id}>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.role}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className={`px-3 py-1 rounded-md ${
                        user.status === 'Active'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEditUser(user.id)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
