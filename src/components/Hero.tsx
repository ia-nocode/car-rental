import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Drive Your Dreams with Our Premium Car Collection
            </h1>
            <p className="text-lg text-gray-600">
              Experience the freedom of the open road with our extensive fleet of luxury and economy vehicles. Book your perfect ride today.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                See All Cars
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738"
                alt="Tesla Model S"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}