import React from 'react';
import AddTour from './AddTour';
import TourList from './TourList';

const Dashboard = ({ user }) => {
  return (
    <div>
      {/* Welcome Banner */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}! 👋</h2>
          <p className="text-gray-500">Here is your travel management dashboard.</p>
        </div>
      </div>

      {/* The Functional Parts */}
      <AddTour />
      
      <div className="my-8 border-t border-gray-300"></div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4">Current  Packages</h3>
      <TourList />
    </div>
  );
};

export default Dashboard;