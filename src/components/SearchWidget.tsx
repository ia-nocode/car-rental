import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Search } from 'lucide-react';
import { SearchFilters } from '../types/car';
import { useCarContext } from '../context/CarContext';

export default function SearchWidget() {
  const { searchFilters, setSearchFilters } = useCarContext();

  const handleSearch = () => {
    // Search is now automatic through context
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchFilters.pickupLocation || ''}
                onChange={(e) => setSearchFilters({ ...searchFilters, pickupLocation: e.target.value })}
                placeholder="Enter location"
                className="pl-10 w-full rounded-lg border border-gray-200 p-2.5"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchFilters.dropoffLocation || ''}
                onChange={(e) => setSearchFilters({ ...searchFilters, dropoffLocation: e.target.value })}
                placeholder="Enter location"
                className="pl-10 w-full rounded-lg border border-gray-200 p-2.5"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={searchFilters.pickupDate || ''}
                onChange={(e) => setSearchFilters({ ...searchFilters, pickupDate: e.target.value })}
                className="pl-10 w-full rounded-lg border border-gray-200 p-2.5"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="time"
                value={searchFilters.pickupTime || ''}
                onChange={(e) => setSearchFilters({ ...searchFilters, pickupTime: e.target.value })}
                className="pl-10 w-full rounded-lg border border-gray-200 p-2.5"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSearch}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Search className="h-5 w-5 mr-2" />
            Search Cars
          </button>
        </div>
      </div>
    </div>
  );
}