import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals</p>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={() => navigate('/contact')}
        >
          Contact Us Today
        </Button>
      </div>
    </section>
  );
}