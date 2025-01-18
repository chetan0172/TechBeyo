import React from 'react';
import { Button } from '../components/ui/button';

const projects = [
  {
    title: "Enterprise DevOps Transformation",
    client: "Global Corp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Implemented comprehensive DevOps transformation with CI/CD pipeline optimization, reducing deployment time by 85% and increasing release frequency by 300%. Automated testing coverage improved to 95%, leading to a 70% reduction in post-deployment issues.",
    tags: ["Jenkins", "Docker", "Kubernetes", "AWS"],
    results: [
      "Deployment frequency increased by 300%",
      "Lead time reduced from weeks to hours",
      "Zero-downtime deployments achieved"
    ]
  },
  {
    title: "Microservices Migration",
    client: "E-commerce Solutions Inc",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    description: "Successfully migrated a monolithic e-commerce platform to a microservices architecture, improving system scalability by 200%. Implemented GitOps practices and automated deployment pipelines, resulting in 99.99% uptime and 40% reduction in operational costs.",
    tags: ["Docker", "Kubernetes", "Microservices", "GitOps"],
    results: [
      "System scalability improved by 200%",
      "Resource utilization optimized by 40%",
      "Deployment time reduced to minutes"
    ]
  },
  {
    title: "Cloud-Native Security Implementation",
    client: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Developed and implemented a comprehensive cloud security framework for a healthcare technology provider. Achieved HIPAA compliance while maintaining system performance. Implemented zero-trust architecture and automated security scanning, reducing security incidents by 80%.",
    tags: ["Security", "Compliance", "AWS", "Zero Trust"],
    results: [
      "HIPAA compliance achieved",
      "Security incidents reduced by 80%",
      "Automated security scanning implemented"
    ]
  }
];

export function Portfolio() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Success Stories</h1>
          <p className="text-xl text-gray-300">Real-world transformations through DevOps excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-2">{project.client}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline"
                  className="w-full text-white border-white hover:bg-white/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  Discuss Your Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}