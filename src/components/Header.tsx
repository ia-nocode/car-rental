import React from 'react';
import { Car } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Car className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">CarRent</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#rental-details" className="text-gray-700 hover:text-blue-600">Rental Details</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#register" className="text-gray-700 hover:text-blue-600">Register</a>
          </nav>
          
          <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}