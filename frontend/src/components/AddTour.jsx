import { useState } from 'react';

const AddTour = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remember to use credentials: 'include' to verify the user
    fetch("http://localhost:8081/tour", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
      // credentials: "include" // Uncomment if you add security to this endpoint later
    })
    .then(response => response.json())
    .then(data => {
      alert("Tour Added Successfully!");
      setFormData({ name: '', destination: '', price: '' });
      window.location.reload(); // Reload to show the new item
    })
    .catch(error => console.error("Error:", error));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">➕ Add New Package</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" name="name" placeholder="Tour Name" required 
          value={formData.name} onChange={handleChange} 
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" name="destination" placeholder="Destination" required 
          value={formData.destination} onChange={handleChange} 
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="number" name="price" placeholder="Price (LKR)" required 
          value={formData.price} onChange={handleChange} 
          className="w-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTour;