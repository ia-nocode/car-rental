import React from 'react';
import { Car, Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  const sections = {
    about: ['How it works', 'Featured', 'Partnership', 'Business Relation'],
    community: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
    socials: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center text-white mb-4">
              <Car className="h-6 w-6" />
              <span className="ml-2 text-xl font-semibold">CarRent</span>
            </div>
            <p className="text-sm">
              Premium car rental services with locations worldwide. Experience luxury and convenience.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {sections.about.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {sections.community.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">©2024 CarRent. All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}