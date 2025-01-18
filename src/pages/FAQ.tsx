import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is DevOps and how can it benefit my organization?",
      answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and provide continuous delivery of high-quality software. Benefits include faster deployment, improved collaboration, and reduced failure rates."
    },
    {
      question: "How long does a typical DevOps transformation take?",
      answer: "The duration varies depending on your organization's size and current processes. Typically, initial implementation takes 3-6 months, with continuous improvement thereafter. We provide a detailed timeline during consultation."
    },
    {
      question: "What tools do you use for DevOps implementation?",
      answer: "We use industry-leading tools including Jenkins, Docker, Kubernetes, AWS, Azure, and GitLab. The specific toolset is customized based on your requirements and existing infrastructure."
    },
    {
      question: "How do you ensure security in DevOps practices?",
      answer: "We implement DevSecOps practices, integrating security at every stage of the development pipeline. This includes automated security testing, compliance monitoring, and vulnerability scanning."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer 24/7 technical support, regular maintenance, monitoring, and optimization services. Our team provides training and documentation to ensure your team can effectively manage the new systems."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}