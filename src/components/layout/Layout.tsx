import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { services } from '../../data/services';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">TechBeyo</h3>
              <p className="text-gray-400 mb-4">Empowering businesses with cutting-edge DevOps solutions.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link 
                      to={`/services/${service.id}`} 
                      className="text-gray-400 hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  Bahar 4 JBR, The Walk, Dubai
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 (998) 823-0172
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@techbeyo.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">© 2024 TechBeyo. All Rights Reserved</p>
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}