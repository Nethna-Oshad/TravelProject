import React from 'react';

const Navbar = ({ user }) => {

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/google";
  };

  const handleLogout = () => {
    window.location.href = "http://localhost:8081/logout"; 
  };

  return (
    <nav className="bg-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          ✈️ Travel App
        </h1>

        <div>
          {/* LOGIC: If 'user' exists, show Profile. Else, show Login button. */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-700 hidden sm:block">
                {user.name}
              </span>
              <img 
                src={user.picture} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border border-blue-500"
              />
              <button 
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
            >
              <img 
                src="https://www.svgrepo.com/show/475656/google-color.svg" 
                className="w-5 h-5" 
                alt="Google" 
              />
              Sign in with Google
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;