import React, { useState } from 'react';
import { Button } from '../components/ui/button';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs: JobPosition[] = [
    {
      id: "1",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead and implement DevOps practices across multiple projects, focusing on automation, CI/CD, and cloud infrastructure.",
      requirements: [
        "2+ years of DevOps experience",
        "Strong experience with AWS/Azure",
        "Expertise in Docker and Kubernetes",
        "CI/CD pipeline implementation",
        "Infrastructure as Code experience"
      ]
    },
    {
      id: "2",
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud solutions for enterprise clients, focusing on performance, security, and cost optimization.",
      requirements: [
        "2+ years of cloud architecture experience",
        "AWS/Azure certification",
        "Experience with microservices architecture",
        "Strong system design skills",
        "Security best practices knowledge"
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
    setShowApplicationForm(false);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">Help us shape the future of DevOps</p>
        </div>

        {!showApplicationForm ? (
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button onClick={() => handleApply(job)}>Apply Now</Button>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div>
                  <h3 className="font-semibold mb-2">Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowApplicationForm(false)}
              className="mb-6"
            >
              Back to Jobs
            </Button>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">
                Apply for {selectedJob?.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resume</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-1 block w-full"
                    onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}