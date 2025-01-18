import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services';

export function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);
  
  if (!service) {
    navigate('/');
    return null;
  }

  const Icon = service.iconType;

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-white">
          <div className="flex items-center mb-6">
            <div className="text-blue-400 mr-4">
              <Icon className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <p className="text-xl text-blue-400">${service.price} - {service.pricingDetails}</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-300">{service.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}