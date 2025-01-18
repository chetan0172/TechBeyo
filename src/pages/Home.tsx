import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { CTA } from '../components/sections/CTA';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}