import React from 'react';
import { MapPin, Calendar, Car } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: 'Choose Location',
      description: 'Select your pick-up and drop-off locations from our vast network of rental points.',
    },
    {
      icon: Calendar,
      title: 'Pick-up Date',
      description: 'Choose your preferred date and times for vehicle collection and return.',
    },
    {
      icon: Car,
      title: 'Book Your Car',
      description: 'Select your perfect vehicle and complete your booking in minutes.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-600">Three simple steps to start your journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}