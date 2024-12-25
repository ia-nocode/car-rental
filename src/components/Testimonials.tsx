import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vick Robert',
    role: 'Business Owner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    text: 'Outstanding service! The car was in perfect condition and the booking process was seamless. Will definitely use again.',
  },
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    text: 'Fantastic experience from start to finish. The staff was incredibly helpful and the car exceeded my expectations.',
  },
  {
    name: 'James Wilson',
    role: 'Marketing Director',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    text: 'Best car rental service I\'ve used. Competitive prices and excellent customer support. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="mt-4 text-gray-600">
            Hear what our customers have to say about their rental experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{testimonial.rating}</span>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}