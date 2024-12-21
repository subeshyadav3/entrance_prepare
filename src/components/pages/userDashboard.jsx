import React, { useEffect, useState } from 'react';
import { account } from '../authentication/server'; // Keep this for fetching user details
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
  const [user, setUser] = useState({
    name: '',
    email: '',
    registrationDate: '',
    passwordUpdateDate: '',
  });
  const [score, setScore] = useState([]); // Initialize with dummy data


  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const userData = await account.get();
        setUser({
          name: userData.name || 'N/A',
          email: userData.email || 'N/A',
          registrationDate: userData.registrationDate || 'N/A',
          passwordUpdateDate: userData.passwordUpdateDate || 'N/A',
        });
      
    };

    // Use dummy score data
    const generateDummyScoreData = () => {
      const dummyData = Array.from({ length: 10 }, (_, index) => ({
        date: `2024-01-${String(index + 1).padStart(2, '0')}`, // Dates from 2024-01-01 to 2024-01-10
        score: Math.floor(Math.random() * 101), // Random scores between 0 and 100
      }));
      setScore(dummyData);
    };

    fetchUserDetails();
    generateDummyScoreData();
  }, []);

  const renderGraph = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={score}>
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="flex flex-col items-center mt-6 px-4 md:px-10">
      {/* User Details Section */}
      <div className="flex flex-col bg-white shadow-lg p-5 mb-6 items-center w-full max-w-md md:max-w-lg rounded-lg">
        <h1 className="text-2xl md:text-3xl mb-4">User Details</h1>
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile Picture"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4"
        />
        <h2 className="text-lg md:text-xl">Name: {user.name}</h2>
        <h2 className="text-lg md:text-xl">Email: {user.email}</h2>
        <h2 className="text-lg md:text-xl">Registered on: {user.registrationDate}</h2>
        <h2 className="text-lg md:text-xl">Password Updated on: {user.passwordUpdateDate}</h2>
      </div>

      {/* Graph Section */}
      <div className="w-full max-w-md md:max-w-lg">
        {score.length > 0 ? renderGraph() : <p className="text-center">No data available for the graph</p>}
      </div>
    </div>
  );
};

export default UserDashboard;
