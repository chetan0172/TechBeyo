import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of DevOps: AI-Driven Automation',
    excerpt: 'Exploring how artificial intelligence is revolutionizing DevOps practices and automation.',
    content: `
      The integration of AI in DevOps is transforming how teams approach software delivery and infrastructure management. 
      From predictive analytics to automated incident response, AI is becoming an essential tool in the modern DevOps toolkit.
      
      Key areas where AI is making an impact:
      1. Predictive Analytics for Infrastructure
      2. Automated Incident Response
      3. Smart Resource Optimization
      4. Code Quality Analysis
      
      Organizations implementing AI-driven DevOps practices are seeing:
      - 45% reduction in incident response time
      - 30% improvement in resource utilization
      - 60% faster bug detection and resolution
    `,
    author: {
      name: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      role: 'DevOps Architect'
    },
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Automation', 'DevOps', 'Machine Learning']
  },
  {
    id: '2',
    title: 'Kubernetes Best Practices for 2024',
    excerpt: 'Essential guidelines for running production-grade Kubernetes clusters.',
    content: `
      As Kubernetes continues to evolve, staying updated with best practices is crucial. This guide covers essential topics 
      including security, scalability, and resource management for modern Kubernetes deployments.
      
      Key focus areas:
      1. Security Hardening
      2. Resource Management
      3. High Availability
      4. Monitoring and Observability
      
      Implementation results:
      - 99.99% uptime achievement
      - 40% reduction in operational costs
      - Enhanced security posture
    `,
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      role: 'Cloud Platform Engineer'
    },
    date: '2024-03-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    tags: ['Kubernetes', 'DevOps', 'Cloud Native', 'Security']
  },
  {
    id: '3',
    title: 'GitOps: The Future of Infrastructure Management',
    excerpt: 'How GitOps is changing the way we manage infrastructure and deployments.',
    content: `
      GitOps represents a paradigm shift in how we approach infrastructure management. By using Git as the single source 
      of truth, teams can achieve better consistency, reliability, and automation in their deployment processes.
      
      Benefits of GitOps:
      1. Version Control for Infrastructure
      2. Automated Deployments
      3. Enhanced Collaboration
      4. Improved Compliance
      
      Real-world impact:
      - 70% faster deployment cycles
      - 50% reduction in configuration errors
      - Improved audit compliance
    `,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      role: 'DevOps Consultant'
    },
    date: '2024-03-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
    tags: ['GitOps', 'Infrastructure', 'Automation', 'DevOps']
  }
];