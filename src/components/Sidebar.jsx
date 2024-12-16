import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCogs, FaChartLine, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      {/* Logo Section */}
      <div className="flex items-center justify-center p-4 bg-gray-900">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow px-4 py-6">
        <ul>
          <li className="my-2">
            <Link
              to="/dashboard"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <MdDashboard size={20} className="mr-3" />
              Dashboard
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/home"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaHome size={20} className="mr-3" />
              Home
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/users"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaUser size={20} className="mr-3" />
              User Management
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/settings"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaCog size={20} className="mr-3" />
              Settings
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/analytics"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaChartLine size={20} className="mr-3" />
              Analytics
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/account"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaCogs size={20} className="mr-3" />
              Account Settings
            </Link>
          </li>

          <li className="my-2">
            <Link
              to="/logout"
              className="flex items-center text-lg text-white hover:bg-gray-700 rounded p-2"
            >
              <FaSignOutAlt size={20} className="mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 Admin Panel. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
