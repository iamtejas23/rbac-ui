import React from 'react';
import { FaUserShield, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md">
      <h1 className="text-lg font-bold">RBAC Dashboard</h1>
      <div className="flex items-center gap-4">
        <FaUserShield className="text-xl" />
        <button className="flex items-center bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
