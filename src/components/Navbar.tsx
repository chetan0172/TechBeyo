import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, User } from 'lucide-react';

export function Navbar() {
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
            <Link to="/services" className="hover:text-blue-400">Services</Link>
            <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="secondary" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="primary" size="sm">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}