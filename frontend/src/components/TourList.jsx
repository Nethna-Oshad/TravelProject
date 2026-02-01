import { useState, useEffect } from 'react';

const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/tours")
      .then((response) => response.json())
      .then((data) => setTours(data))
      .catch((error) => console.error("Error loading tours:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.length === 0 ? (
        <p className="text-gray-500 col-span-full text-center">No tours available yet.</p>
      ) : (
        tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-400 relative">
              <span className="absolute bottom-2 left-4 text-white font-bold text-lg drop-shadow-md">
                {tour.destination}
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h2>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-blue-600">
                  LKR {tour.price.toLocaleString()}
                </span>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded font-medium transition">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TourList;