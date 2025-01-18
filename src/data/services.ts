import { Cloud, Code, GitBranch, LineChart, Shield, Database, Server, HeadsetIcon } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: '1',
    iconType: GitBranch,
    title: "DevOps Consulting Services",
    description: "Strategic DevOps transformation and implementation",
    fullDescription: "Transform your development and operations with our comprehensive DevOps consulting services. We help organizations implement modern DevOps practices, automate workflows, and build efficient CI/CD pipelines that accelerate software delivery while maintaining high quality and reliability.",
    price: 149,
    pricingDetails: "Starting price for basic consulting package",
    features: [
      "DevOps Maturity Assessment",
      "CI/CD Pipeline Design",
      "Infrastructure as Code Implementation",
      "Monitoring & Observability Setup",
      "Team Training & Knowledge Transfer"
    ],
    benefits: [
      "Faster Time-to-Market",
      "Improved Team Collaboration",
      "Reduced Deployment Risks",
      "Enhanced System Reliability"
    ]
  },
  {
    id: '2',
    iconType: Cloud,
    title: "DevOps Implementation & Containerization",
    description: "Docker and Kubernetes solutions for modern applications",
    fullDescription: "Modernize your applications with our container-based solutions using Docker and Kubernetes. We help you containerize applications, implement orchestration, and manage microservices architecture for improved scalability and resource efficiency.",
    price: 139,
    pricingDetails: "Per environment setup and configuration",
    features: [
      "Application Containerization",
      "Kubernetes Cluster Setup",
      "Container Orchestration",
      "Microservices Architecture",
      "Auto-scaling Configuration"
    ],
    benefits: [
      "Improved Resource Utilization",
      "Easy Application Scaling",
      "Consistent Environments",
      "Simplified Deployments"
    ]
  },
  {
    id: '3',
    iconType: LineChart,
    title: "Software Development",
    description: "Real-time insights into your applications",
    fullDescription: "At TechBeyo, we specialize in delivering cutting-edge software development solutions tailored to meet the unique needs of your business. Our expertise spans across various domains, ensuring we can bring your vision to life with efficiency and precision.",
    price: 199,
    pricingDetails: "Per environment, includes setup and configuration",
    features: [
      "Custom Web Development",
      "Enterprise Software Solutions",
      "API Development and Integration",
      "Cloud-Based Solutions",
      "Custom Dashboards"
    ],
    benefits: [
      "Proactive Issue Detection",
      "Reduced Downtime",
      "Data-Driven Decisions",
      "Improved User Experience"
    ]
  },
  {
    id: '4',
    iconType: Shield,
    title: "Web Development Services",
    description: "Protect your business from cyber threats",
    fullDescription: "At TechBeyo, we craft high-performing, visually stunning, and user-friendly websites that help your business stand out in the digital landscape. Our web development services combine creativity, technical expertise, and a customer-focused approach to deliver tailored solutions that drive results.",
    price: 149,
    pricingDetails: "Perfect for growing businesses seeking a more robust online presence.",
    features: [
      "E-commerce Development",
      "CMS Development",
      "Responsive Web Design",
      "Front-End and Back-End Development",
      "Web Application Development"
    ],
    benefits: [
      "Enhanced Online Presence",
      "Improved Brand Credibility",
      "Increased Accessibility",
      "Boosted Customer Engagement"
    ]
  },
  {
    id: '5',
    iconType: Server,
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud solutions",
    fullDescription: "Build and manage robust cloud infrastructure with our expert services. We help you leverage the full potential of cloud computing with optimized architectures, automated scaling, and cost-effective solutions.",
    price: 179,
    pricingDetails: "Monthly subscription, includes cloud management",
    features: [
      "Cloud Architecture Design",
      "Multi-Cloud Strategy",
      "Infrastructure Automation",
      "Cost Optimization",
      "Disaster Recovery Planning"
    ],
    benefits: [
      "Scalable Infrastructure",
      "Reduced Operational Costs",
      "High Availability",
      "Future-Proof Architecture"
    ]
  },
  {
    id: '6',
    iconType: HeadsetIcon,
    title: "Technical Support 24/7",
    description: "Round-the-clock expert assistance",
    fullDescription: "Get peace of mind with our 24/7 technical support services. Our team of experts is always ready to help you resolve issues, maintain system stability, and ensure continuous operations.",
    price: 129,
    pricingDetails: "Monthly support package",
    features: [
      "24/7 Support Coverage",
      "Priority Response",
      "Incident Management",
      "System Monitoring",
      "Regular Health Checks"
    ],
    benefits: [
      "Immediate Issue Resolution",
      "Minimized Downtime",
      "Expert Assistance",
      "Proactive Maintenance"
    ]
  }
];