// src/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
      <p className="text-xl mb-6 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Move to Home
      </Link>
    </div>
  );
};

export default NotFound;
