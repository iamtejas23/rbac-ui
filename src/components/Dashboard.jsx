import React from 'react';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" value="120" />
        <Card title="Active Roles" value="15" />
        <Card title="Permissions" value="45" />
        <Card title="Pending Requests" value="8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">User Activity</h3>
          
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Role Distribution</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
