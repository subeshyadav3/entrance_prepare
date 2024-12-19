import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const UserDashboard = () => {
  // Dummy data
  const name = 'John Doe';
  const gmail = 'john.doe@gmail.com';
  const registara = '2024-01-01';
  const password = '2024-12-01';
  const score = [85, 90, 78, 88, 95];
  const graphData = [
    { date: '2024-01-01', score: 85 },
    { date: '2024-02-01', score: 90 },
    { date: '2024-03-01', score: 78 },
    { date: '2024-04-01', score: 88 },
    { date: '2024-05-01', score: 95 },
  ];

  const renderGraph = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={graphData}>
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col shadow-lg p-5 mb-10 items-center">
        <h1 className="text-3xl mb-5">User Details</h1>
        <img
          src="https://via.placeholder.com/150"
          alt="User Photo"
          className="w-32 h-32 rounded-full mb-5"
        />
        <h1>Name: {name}</h1>
        <h1>Gmail: {gmail}</h1>
        <h1>Scores: [{score.join(', ')}]</h1>
        <h1>Registration at: {registara}</h1>
        <h1>Password Update at: {password}</h1>
      </div>
      <div className="w-full mb-10">
        {renderGraph()} {/* Render the graph */}
      </div>
    </div>
  );
};

export default UserDashboard;
