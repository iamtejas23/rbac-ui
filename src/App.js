import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

function App() {
  const [selectedTab, setSelectedTab] = React.useState('Users');

  return (
    <div className="flex h-screen">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="p-4">
          {selectedTab === 'Users' && <UserManagement />}
          {selectedTab === 'Roles' && <RoleManagement />}
          {selectedTab === 'Permissions' && <PermissionManagement />}
        </div>
      </div>
    </div>
  );
}

export default App;
