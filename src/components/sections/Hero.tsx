import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Scroll to services section if on homepage
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to services if not on homepage
      navigate('/services/1');
    }
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with
            <span className="text-blue-500"> TechBeyo</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Empowering businesses with cutting-edge DevOps solutions for faster, 
            more reliable software delivery
          </p>
          <Button 
            size="lg"
            onClick={handleGetStarted}
            className="animate-pulse hover:animate-none"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}