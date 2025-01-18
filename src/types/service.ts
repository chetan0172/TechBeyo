import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  iconType: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  pricingDetails: string;
  features: string[];
  benefits: string[];
}