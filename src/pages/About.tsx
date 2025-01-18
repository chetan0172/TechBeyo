import React from 'react';
import { Users, Target, Award, Code, GitBranch, Workflow } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our DevOps Journey</h1>
          <p className="text-xl text-gray-600">Transforming Software Delivery Through Innovation</p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Evolution in DevOps</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">The Beginning (2022)</h3>
                <p className="text-gray-600">Started as a traditional development team, facing challenges with deployment delays and integration issues.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">DevOps Transformation (2024)</h3>
                <p className="text-gray-600">Embraced automation, CI/CD, and cloud-native technologies, revolutionizing our delivery pipeline.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Today</h3>
                <p className="text-gray-600">Leading the industry with cutting-edge DevOps practices, helping businesses achieve unprecedented efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Expert Team",
              description: "DevOps engineers with 2+ years of experience in enterprise transformations"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Our Mission",
              description: "Accelerating business success through DevOps excellence and automation"
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Our Impact",
              description: "Number of successful projects, 98% client satisfaction rate"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-blue-500 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-gray-600 mb-4">
                Our team brings deep expertise in cloud platforms, containerization, and automation.
                We've helped organizations reduce deployment times from weeks to minutes and achieve
                99.99% uptime through robust DevOps practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Impact</h3>
              <p className="text-gray-600">
                Beyond technical implementation, we focus on delivering measurable business outcomes.
                Our clients have seen up to 70% reduction in operational costs and 300% improvement
                in deployment frequency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}