import React, { useEffect, useState } from 'react';
import { account, getScores } from '../authentication/server'; // Keep this for fetching user details
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    registrationDate: '',
    passwordUpdateDate: '',
  });
  const [score, setScore] = useState([]); // Initialize with dummy data
  const [render, setRender] = useState(false);

  useEffect(() => {
    const fetchScores = () => {
      getScores()
        .then((scores) => {
          console.log(scores);
          setScore(scores); // Update the state with scores
          setRender(true); // Set render flag to true
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Scores Fetched");
        });
    };

    fetchScores();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await account.get();
        setUser({
          name: userData.name || 'N/A',
          email: userData.email || 'N/A',
          registrationDate: userData.registrationDate || 'N/A',
          passwordUpdateDate: userData.passwordUpdateDate || 'N/A',
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log("User Details Fetched");
      }
    };

    fetchUserDetails();
  }, []);

  // Prepare data for Chart.js
  const chartData = {
    labels: score.map((_, index) => `Score ${index + 1}`), // Label the scores
    datasets: [
      {
        label: 'User Scores',
        data: score, // Use actual score data
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        max: 10, // Set the y-axis max to 10
        min: 0,  // Optional: Set the y-axis min to 0 (if you want it to start from 0)
      },
    },
  };

  const renderGraph = () => (
    <div className="w-full max-w-md md:max-w-lg">
      <Line data={chartData} options={options} />
    </div>
  );

  return (
    <div className="flex flex-col items-center mt-6 px-4 md:px-10 pb-10">
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
      {render ? renderGraph() : <p className="text-center">No data available for the graph</p>}
    </div>
  );
};

export default UserDashboard;
