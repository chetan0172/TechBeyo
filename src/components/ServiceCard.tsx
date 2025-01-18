import React from 'react';
import { Button } from './ui/button';
import type { Service } from '../types/service';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const navigate = useNavigate();
  const Icon = service.iconType;

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-blue-400 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <p className="text-2xl font-bold text-blue-400 mb-4">${service.price}</p>
      <Button 
        variant="primary" 
        size="sm" 
        onClick={() => navigate(`/services/${service.id}`)}
        className="w-full"
      >
        Learn More
      </Button>
    </div>
  );
}