// src/pages/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold text-[#FBAC20] mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">Your appointment was booked successfully.</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-[#FBAC20] to-black hover:from-black hover:to-[#FBAC20] text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;
