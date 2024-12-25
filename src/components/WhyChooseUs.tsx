import React from 'react';
import { Headphones, BadgeCheck, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Headphones,
      title: 'Customer Support',
      description: '24/7 dedicated support team ready to assist you with any queries or concerns',
    },
    {
      icon: BadgeCheck,
      title: 'Best Price Guaranteed',
      description: 'Most competitive rates and price matching to ensure you get the best deal',
    },
    {
      icon: MapPin,
      title: 'Many Locations',
      description: 'Convenient pickup and drop-off locations across major cities and airports',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a"
              alt="Luxury car at sunset"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="mt-4 text-gray-600">
                Experience premium car rental service with benefits that put you first
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}