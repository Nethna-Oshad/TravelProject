import React from 'react';

const Hero = ({ handleLogin }) => {
  return (
    <div className="relative bg-gray-900 h-[500px] text-white overflow-hidden rounded-xl shadow-2xl mb-10">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1588258524675-c61d5573e6bd?q=80&w=2070&auto=format&fit=crop" 
          alt="Sri Lanka Landscape" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Explore Sri Lanka
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200 drop-shadow-md">
          Discover the beauty of the island. Sign in to manage exclusive tour packages and adventures.
        </p>
        
        {/* Login Button (Calls the function passed from App.jsx) */}
        <button 
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            className="w-6 h-6 bg-white rounded-full p-1" 
            alt="G" 
          />
          Get Started with Google
        </button>
      </div>
    </div>
  );
};

export default Hero;