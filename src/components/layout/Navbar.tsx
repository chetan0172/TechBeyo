import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from '../../data/services';

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            TechBeyo
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center hover:text-blue-400">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
            <Link to="/blog" className="hover:text-blue-400">Blog</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}