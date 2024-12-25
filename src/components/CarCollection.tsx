import React from 'react';
import { Star } from 'lucide-react';
import { useCarContext } from '../context/CarContext';

const categories = ['Popular', 'Large Car', 'Small Car', 'Exclusive Car'];

export default function CarCollection() {
  const { cars, activeCategory, setActiveCategory } = useCarContext();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Car Collection</h2>
          <div className="mt-8 flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{car.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {car.make} {car.model}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-blue-600">${car.price}</span>
                  <span className="text-gray-500 ml-1">/day</span>
                </div>
                <div className="mt-4 text-gray-600">
                  {car.seats} seats • {car.transmission}
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}