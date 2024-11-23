import React from 'react';
import { FaUsers, FaUserTag, FaKey } from 'react-icons/fa';

function Sidebar({ selectedTab, setSelectedTab }) {
  const menuItems = [
    { name: 'Users', icon: <FaUsers /> },
    { name: 'Roles', icon: <FaUserTag /> },
    { name: 'Permissions', icon: <FaKey /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-full shadow-lg">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">Admin Panel</h2>
      <ul className="p-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
              selectedTab === item.name ? 'bg-gray-700' : 'hover:bg-gray-800'
            }`}
            onClick={() => setSelectedTab(item.name)}
          >
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
