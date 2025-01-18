import React from 'react';

export function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Services</h2>
            <p className="text-gray-600 mb-4">
              TechBeyo provides DevOps consulting and implementation services. By engaging our services,
              you agree to cooperate and provide necessary access and information for service delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All intellectual property rights in our services, methodologies, and documentation remain
              with TechBeyo. Clients receive a license to use deliverables for their internal business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality of all client information and expect the same regarding
              our proprietary information and methodologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms are specified in individual service agreements. Standard payment terms
              require 50% upfront and the remainder upon project completion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Liability</h2>
            <p className="text-gray-600 mb-4">
              Our liability is limited to the fees paid for the specific service in question.
              We are not liable for indirect or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Tools and Services</h2>
            <p className="text-gray-600">
              Our services may involve integrating or using third-party tools. We are not responsible for any issues or liabilities arising from the use of such tools
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}