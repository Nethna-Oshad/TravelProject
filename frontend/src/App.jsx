import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Fetch User Data with Credentials (Cookies)
    fetch("http://localhost:8081/user", { credentials: "include" })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Not logged in");
      })
      .then(data => {
        // 2. Only save if we got a real name
        if (data.name) {
          console.log("✅ Logged in as:", data.name);
          setUser(data);
        }
      })
      .catch(error => console.log("ℹ️ User is currently a guest"));
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/google";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 3. Pass the 'user' data to the Navbar */}
      <Navbar user={user} />

      <div className="container mx-auto px-4 pb-12">
        {user ? (
          <Dashboard user={user} />
        ) : (
          <Hero handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;