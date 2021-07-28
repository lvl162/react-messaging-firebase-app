import React from 'react';

const Dashboard = ({ handleLogout }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
