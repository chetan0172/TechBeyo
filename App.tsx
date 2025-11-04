"use client"

import type React from "react"
import { useState, useEffect, Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import {
  Menu,
  X,
  ChevronRight,
  Cloud,
  GitBranch,
  Terminal,
  MessageSquare,
  Shield,
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  Clock,
  Server,
  Database,
  Globe,
  Rocket,
  Code,
  HeadsetIcon,
  Instagram,
  Facebook,
} from "lucide-react"
import { PortfolioHeader } from "./components/PortfolioHeader"
import { SuccessStory3D } from "./components/SuccessStory3D"

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })
  const [showModal, setShowModal] = useState<"terms" | "privacy" | "cookies" | "contact" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for scheduling a consultation! We will contact you shortly.")
    setShowConsultationModal(false)
    setConsultationForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    })
  }

  const services = [
    {
      icon: <GitBranch size={32} />,
      title: "DevOps Consulting",
      description:
        "Strategic DevOps transformation with expert guidance on tools, practices, and culture change for accelerated delivery and improved collaboration.",
    },
    {
      icon: <Cloud size={32} />,
      title: "AWS Cloud Services",
      description:
        "Comprehensive AWS cloud solutions including architecture design, migration, optimization, and managed services for scalable infrastructure.",
    },
    {
      icon: <Server size={32} />,
      title: "Kubernetes Solutions",
      description:
        "Enterprise-grade Kubernetes implementations with automated deployment, scaling, and management of containerized applications.",
    },
    {
      icon: <Terminal size={32} />,
      title: "CI/CD Implementation",
      description:
        "Advanced CI/CD pipeline design and implementation using modern tools like Jenkins, GitLab, and GitHub Actions for automated delivery.",
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description:
        "DevSecOps implementation with automated security scanning, compliance checks, and secure infrastructure as code practices.",
    },
    {
      icon: <Database size={32} />,
      title: "Infrastructure as Code",
      description:
        "Automated infrastructure provisioning using Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Cloud Migration",
      description:
        "Seamless transition of your applications and infrastructure to the cloud, optimizing performance and reducing costs.",
    },
    {
      icon: <Code size={32} />,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, from web applications to complex enterprise systems.",
    },
    {
      icon: <HeadsetIcon size={32} />,
      title: "Technical Support 24/7",
      description:
        "Round-the-clock technical assistance to ensure your systems run smoothly and issues are resolved promptly.",
    },
  ]

  const portfolio = [
    {
      title: "Global E-commerce Platform Migration to AWS",
      category: "Cloud Migration & DevOps",
      description:
        "Migrated a high-traffic e-commerce platform to AWS, implementing auto-scaling groups with EC2, utilizing S3 for static assets, and RDS for databases. Implemented a CI/CD pipeline using AWS CodePipeline and CodeBuild. This resulted in a 40% reduction in operational costs, 60% improvement in load times, and 99.99% uptime.",
      technologies: ["AWS EC2", "AWS S3", "AWS RDS", "AWS CodePipeline", "Docker"],
      type: "cloud",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Microservices Architecture with Kubernetes",
      category: "Container Orchestration",
      description:
        "Redesigned a monolithic application into a microservices architecture deployed on Kubernetes. Utilized Helm for package management and Istio for service mesh. This transformation resulted in 85% faster deployment times, improved scalability, and enabled the team to release new features 3x faster.",
      technologies: ["Kubernetes", "Docker", "Helm", "Istio", "Microservices"],
      type: "kubernetes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DevOps Transformation for FinTech Startup",
      category: "DevOps Implementation",
      description:
        "Implemented a comprehensive DevOps strategy for a FinTech startup, including infrastructure as code using Terraform, automated testing, and continuous deployment. This reduced deployment errors by 75%, increased deployment frequency from bi-weekly to daily, and improved overall system reliability.",
      technologies: ["Terraform", "Jenkins", "Docker", "AWS", "Ansible"],
      type: "devops",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Serverless Data Processing Pipeline",
      category: "Serverless Architecture",
      description:
        "Developed a scalable, event-driven data processing system using AWS Lambda, S3, and DynamoDB. This serverless approach reduced operational costs by 60%, improved processing speed by 75%, and allowed the system to handle 10x more data volume without performance degradation.",
      technologies: ["AWS Lambda", "AWS S3", "AWS DynamoDB", "AWS Step Functions"],
      type: "serverless",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Kubernetes-based Machine Learning Platform",
      category: "AI/ML Infrastructure",
      description:
        "Built a Kubernetes-based platform for machine learning model training and deployment. Integrated with Kubeflow for ML workflows and Istio for traffic management. This solution reduced model training time by 50% and enabled seamless deployment of models to production.",
      technologies: ["Kubernetes", "Kubeflow", "Istio", "Docker", "TensorFlow"],
      type: "ml",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Scalable Web Application with Microservices",
      category: "Software Development",
      description:
        "Developed a highly scalable web application using a microservices architecture. Utilized Node.js for backend services, React for the frontend, and MongoDB for data storage. Deployed on AWS ECS with Docker containers. This architecture allowed the application to handle 10 million daily active users with sub-second response times.",
      technologies: ["Node.js", "React", "MongoDB", "AWS ECS", "Docker"],
      type: "webapp",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const blogPosts = [
    {
      title: "Mastering AWS ECS: A Comprehensive Guide",
      date: "March 15, 2024",
      preview:
        "Dive deep into AWS Elastic Container Service (ECS) and learn how to optimize your containerized applications for maximum performance and cost-efficiency.",
    },
    {
      title: "Docker Best Practices for Production Environments",
      date: "March 10, 2024",
      preview:
        "Explore essential Docker techniques and strategies to ensure your containerized applications are secure, efficient, and ready for production deployment.",
    },
    {
      title: "Kubernetes Operators: Extending Kubernetes Capabilities",
      date: "March 5, 2024",
      preview:
        "Understand how Kubernetes Operators work and how they can be used to automate complex application management tasks in your Kubernetes clusters.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                TechBeyo
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                onClick={() => scrollToSection("blog")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <button
                onClick={() => setShowModal("contact")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Schedule Consultation
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a
                onClick={() => {
                  scrollToSection("home")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => {
                  scrollToSection("about")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => {
                  scrollToSection("services")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => {
                  scrollToSection("portfolio")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                onClick={() => {
                  scrollToSection("blog")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <button
                onClick={() => {
                  setShowModal("contact")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setShowConsultationModal(true)
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Accelerate Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                DevOps Journey
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Transform your development pipeline with cutting-edge automation, cloud infrastructure, and continuous
              delivery solutions.
            </p>
            <button
              onClick={() => setShowConsultationModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Schedule Consultation <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Pioneering DevOps Excellence</h2>
              <p className="text-gray-300 mb-6">
                At TechBeyo, we're not just another IT company – we're your strategic partner in digital transformation.
                With over a decade of experience, we've been at the forefront of DevOps innovation, helping hundreds of
                companies accelerate their journey to efficient, scalable, and secure IT operations.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of expert engineers brings together deep knowledge in cloud technologies, containerization, and
                automation. We don't just implement tools; we architect comprehensive solutions that align with your
                business goals, foster collaboration between development and operations, and drive continuous
                improvement in your software delivery lifecycle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <div className="text-gray-400">Expert Engineers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1800"
                alt="DevOps Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Comprehensive DevOps and Cloud Solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-black border border-blue-900/30 hover:border-blue-500/50 transition-all wave"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Header Section */}
      <section id="portfolio" className="min-h-screen relative overflow-hidden">
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <PortfolioHeader />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Expertise</h1>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">AWS Cloud Solutions</h2>
                <p className="text-gray-300">
                  We leverage AWS's powerful suite of services to build scalable, secure, and efficient cloud
                  infrastructures. Our expertise includes:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>EC2 for flexible compute capacity</li>
                  <li>S3 for scalable storage solutions</li>
                  <li>RDS for managed database services</li>
                  <li>Lambda for serverless computing</li>
                  <li>CloudFormation for infrastructure as code</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">CI/CD Pipelines</h2>
                <p className="text-gray-300">
                  Our CI/CD pipelines automate your software delivery process, ensuring faster, more reliable
                  deployments:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Continuous Integration with Jenkins or GitLab CI</li>
                  <li>Automated testing and code quality checks</li>
                  <li>Continuous Deployment to various environments</li>
                  <li>Rollback strategies for quick recovery</li>
                  <li>Monitoring and alerting integration</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Docker Containerization</h2>
                <p className="text-gray-300">
                  We use Docker to create consistent, portable, and efficient application environments:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Custom Dockerfile creation for your applications</li>
                  <li>Multi-stage builds for optimized images</li>
                  <li>Docker Compose for multi-container applications</li>
                  <li>Image security scanning and best practices</li>
                  <li>Integration with CI/CD pipelines</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Kubernetes Orchestration</h2>
                <p className="text-gray-300">
                  Our Kubernetes expertise ensures efficient container orchestration and management:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Cluster setup and management (EKS, GKE, AKS)</li>
                  <li>Deployment strategies (Rolling updates, Blue/Green)</li>
                  <li>Auto-scaling and load balancing</li>
                  <li>Persistent storage management</li>
                  <li>Monitoring and logging solutions (Prometheus, ELK)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with 3D elements and images */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black/30 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Real-world Cloud, DevOps, and Software Development transformations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-[200px]">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Canvas>
                      <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <SuccessStory3D type={item.type} />
                        <OrbitControls enableZoom={false} enablePan={false} />
                      </Suspense>
                    </Canvas>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.category}</p>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                </div>
                <div className="p-6 bg-gray-900">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-400">Stay updated with DevOps trends and best practices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-900/20 to-black rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer p-6"
              >
                <div className="text-blue-500 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.preview}</p>
                <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                TechBeyo
              </span>
              <p className="mt-4 text-gray-400">Accelerating DevOps Excellence</p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://www.instagram.com/techbeyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/techbeyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Globe size={20} />
                  <span className="sr-only">Website</span>
                </a>
                <a href="mailto:support@techbeyo.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-blue-500">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-blue-500">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-blue-500">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("blog")} className="text-gray-400 hover:text-blue-500">
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setShowModal("terms")} className="text-gray-400 hover:text-blue-500">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowModal("privacy")} className="text-gray-400 hover:text-blue-500">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowModal("cookies")} className="text-gray-400 hover:text-blue-500">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> Support@techbeyo.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +91 9988230172
                </li>
                <li className="flex items-center gap-2">
                  <Building size={16} /> Bahar 4 JBR The walk, Dubai
                </li>
              </ul>
              {/* Remove or comment out this button */}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-900/30 text-center text-gray-400">
            <p>© 2024 TechBeyo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Legal and Contact Modals */}
      {showModal && (
        <div className="fixed inset-0 bg"use client"

import type React from "react"
import { useState, useEffect, Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Menu, X, ChevronRight, Cloud, GitBranch, Terminal, MessageSquare, Shield, User, Mail, Phone, Building, Calendar, Clock, Server, Database, Globe, Rocket, Code, HeadsetIcon, Instagram, Facebook } from 'lucide-react'
import { PortfolioHeader } from "./components/PortfolioHeader"
import { SuccessStory3D } from "./components/SuccessStory3D"

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })
  const [showModal, setShowModal] = useState<"terms" | "privacy" | "cookies" | "contact" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for scheduling a consultation! We will contact you shortly.")
    setShowConsultationModal(false)
    setConsultationForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    })
  }

  const services = [
    {
      icon: <GitBranch size={32} />,
      title: "DevOps Consulting",
      description:
        "Strategic DevOps transformation with expert guidance on tools, practices, and culture change for accelerated delivery and improved collaboration.",
    },
    {
      icon: <Cloud size={32} />,
      title: "AWS Cloud Services",
      description:
        "Comprehensive AWS cloud solutions including architecture design, migration, optimization, and managed services for scalable infrastructure.",
    },
    {
      icon: <Server size={32} />,
      title: "Kubernetes Solutions",
      description:
        "Enterprise-grade Kubernetes implementations with automated deployment, scaling, and management of containerized applications.",
    },
    {
      icon: <Terminal size={32} />,
      title: "CI/CD Implementation",
      description:
        "Advanced CI/CD pipeline design and implementation using modern tools like Jenkins, GitLab, and GitHub Actions for automated delivery.",
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description:
        "DevSecOps implementation with automated security scanning, compliance checks, and secure infrastructure as code practices.",
    },
    {
      icon: <Database size={32} />,
      title: "Infrastructure as Code",
      description:
        "Automated infrastructure provisioning using Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Cloud Migration",
      description:
        "Seamless transition of your applications and infrastructure to the cloud, optimizing performance and reducing costs.",
    },
    {
      icon: <Code size={32} />,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, from web applications to complex enterprise systems.",
    },
    {
      icon: <HeadsetIcon size={32} />,
      title: "Technical Support 24/7",
      description:
        "Round-the-clock technical assistance to ensure your systems run smoothly and issues are resolved promptly.",
    },
  ]

  const portfolio = [
    {
      title: "Global E-commerce Platform Migration to AWS",
      category: "Cloud Migration & DevOps",
      description:
        "Migrated a high-traffic e-commerce platform to AWS, implementing auto-scaling groups with EC2, utilizing S3 for static assets, and RDS for databases. Implemented a CI/CD pipeline using AWS CodePipeline and CodeBuild. This resulted in a 40% reduction in operational costs, 60% improvement in load times, and 99.99% uptime.",
      technologies: ["AWS EC2", "AWS S3", "AWS RDS", "AWS CodePipeline", "Docker"],
      type: "cloud",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Microservices Architecture with Kubernetes",
      category: "Container Orchestration",
      description:
        "Redesigned a monolithic application into a microservices architecture deployed on Kubernetes. Utilized Helm for package management and Istio for service mesh. This transformation resulted in 85% faster deployment times, improved scalability, and enabled the team to release new features 3x faster.",
      technologies: ["Kubernetes", "Docker", "Helm", "Istio", "Microservices"],
      type: "kubernetes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DevOps Transformation for FinTech Startup",
      category: "DevOps Implementation",
      description:
        "Implemented a comprehensive DevOps strategy for a FinTech startup, including infrastructure as code using Terraform, automated testing, and continuous deployment. This reduced deployment errors by 75%, increased deployment frequency from bi-weekly to daily, and improved overall system reliability.",
      technologies: ["Terraform", "Jenkins", "Docker", "AWS", "Ansible"],
      type: "devops",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Serverless Data Processing Pipeline",
      category: "Serverless Architecture",
      description:
        "Developed a scalable, event-driven data processing system using AWS Lambda, S3, and DynamoDB. This serverless approach reduced operational costs by 60%, improved processing speed by 75%, and allowed the system to handle 10x more data volume without performance degradation.",
      technologies: ["AWS Lambda", "AWS S3", "AWS DynamoDB", "AWS Step Functions"],
      type: "serverless",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Kubernetes-based Machine Learning Platform",
      category: "AI/ML Infrastructure",
      description:
        "Built a Kubernetes-based platform for machine learning model training and deployment. Integrated with Kubeflow for ML workflows and Istio for traffic management. This solution reduced model training time by 50% and enabled seamless deployment of models to production.",
      technologies: ["Kubernetes", "Kubeflow", "Istio", "Docker", "TensorFlow"],
      type: "ml",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Scalable Web Application with Microservices",
      category: "Software Development",
      description:
        "Developed a highly scalable web application using a microservices architecture. Utilized Node.js for backend services, React for the frontend, and MongoDB for data storage. Deployed on AWS ECS with Docker containers. This architecture allowed the application to handle 10 million daily active users with sub-second response times.",
      technologies: ["Node.js", "React", "MongoDB", "AWS ECS", "Docker"],
      type: "webapp",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const blogPosts = [
    {
      title: "Mastering AWS ECS: A Comprehensive Guide",
      date: "March 15, 2024",
      preview:
        "Dive deep into AWS Elastic Container Service (ECS) and learn how to optimize your containerized applications for maximum performance and cost-efficiency.",
    },
    {
      title: "Docker Best Practices for Production Environments",
      date: "March 10, 2024",
      preview:
        "Explore essential Docker techniques and strategies to ensure your containerized applications are secure, efficient, and ready for production deployment.",
    },
    {
      title: "Kubernetes Operators: Extending Kubernetes Capabilities",
      date: "March 5, 2024",
      preview:
        "Understand how Kubernetes Operators work and how they can be used to automate complex application management tasks in your Kubernetes clusters.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                TechBeyo
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                onClick={() => scrollToSection("blog")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <button
                onClick={() => setShowModal("contact")}
                className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Schedule Consultation
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a
                onClick={() => {
                  scrollToSection("home")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => {
                  scrollToSection("about")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => {
                  scrollToSection("services")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => {
                  scrollToSection("portfolio")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                onClick={() => {
                  scrollToSection("blog")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <button
                onClick={() => {
                  setShowModal("contact")
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setShowConsultationModal(true)
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Accelerate Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                DevOps Journey
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Transform your development pipeline with cutting-edge automation, cloud infrastructure, and continuous
              delivery solutions.
            </p>
            <button
              onClick={() => setShowConsultationModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Schedule Consultation <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Pioneering DevOps Excellence</h2>
              <p className="text-gray-300 mb-6">
                At TechBeyo, we're not just another IT company – we're your strategic partner in digital transformation.
                With over a decade of experience, we've been at the forefront of DevOps innovation, helping hundreds of
                companies accelerate their journey to efficient, scalable, and secure IT operations.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of expert engineers brings together deep knowledge in cloud technologies, containerization, and
                automation. We don't just implement tools; we architect comprehensive solutions that align with your
                business goals, foster collaboration between development and operations, and drive continuous
                improvement in your software delivery lifecycle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <div className="text-gray-400">Expert Engineers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1800"
                alt="DevOps Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Comprehensive DevOps and Cloud Solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-black border border-blue-900/30 hover:border-blue-500/50 transition-all wave"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Header Section */}
      <section id="portfolio" className="min-h-screen relative overflow-hidden">
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <PortfolioHeader />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Expertise</h1>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">AWS Cloud Solutions</h2>
                <p className="text-gray-300">
                  We leverage AWS's powerful suite of services to build scalable, secure, and efficient cloud
                  infrastructures. Our expertise includes:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>EC2 for flexible compute capacity</li>
                  <li>S3 for scalable storage solutions</li>
                  <li>RDS for managed database services</li>
                  <li>Lambda for serverless computing</li>
                  <li>CloudFormation for infrastructure as code</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">CI/CD Pipelines</h2>
                <p className="text-gray-300">
                  Our CI/CD pipelines automate your software delivery process, ensuring faster, more reliable
                  deployments:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Continuous Integration with Jenkins or GitLab CI</li>
                  <li>Automated testing and code quality checks</li>
                  <li>Continuous Deployment to various environments</li>
                  <li>Rollback strategies for quick recovery</li>
                  <li>Monitoring and alerting integration</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Docker Containerization</h2>
                <p className="text-gray-300">
                  We use Docker to create consistent, portable, and efficient application environments:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Custom Dockerfile creation for your applications</li>
                  <li>Multi-stage builds for optimized images</li>
                  <li>Docker Compose for multi-container applications</li>
                  <li>Image security scanning and best practices</li>
                  <li>Integration with CI/CD pipelines</li>
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Kubernetes Orchestration</h2>
                <p className="text-gray-300">
                  Our Kubernetes expertise ensures efficient container orchestration and management:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Cluster setup and management (EKS, GKE, AKS)</li>
                  <li>Deployment strategies (Rolling updates, Blue/Green)</li>
                  <li>Auto-scaling and load balancing</li>
                  <li>Persistent storage management</li>
                  <li>Monitoring and logging solutions (Prometheus, ELK)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with 3D elements and images */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black/30 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Real-world Cloud, DevOps, and Software Development transformations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-[200px]">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Canvas>
                      <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <SuccessStory3D type={item.type} />
                        <OrbitControls enableZoom={false} enablePan={false} />
                      </Suspense>
                    </Canvas>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.category}</p>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                </div>
                <div className="p-6 bg-gray-900">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-400">Stay updated with DevOps trends and best practices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-900/20 to-black rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer p-6"
              >
                <div className="text-blue-500 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.preview}</p>
                <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                TechBeyo
              </span>
              <p className="mt-4 text-gray-400">Accelerating DevOps Excellence</p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://www.instagram.com/techbeyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/techbeyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Globe size={20} />
                  <span className="sr-only">Website</span>
                </a>
                <a href="mailto:support@techbeyo.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-blue-500">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-blue-500">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-blue-500">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("blog")} className="text-gray-400 hover:text-blue-500">
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setShowModal("terms")} className="text-gray-400 hover:text-blue-500">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowModal("privacy")} className="text-gray-400 hover:text-blue-500">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowModal("cookies")} className="text-gray-400 hover:text-blue-500">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> Support@techbeyo.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +91 9988230172
                </li>
                <li className="flex items-center gap-2">
                  <Building size={16} /> Bahar 4 JBR The walk, Dubai
                </li>
              </ul>
              {/* Remove or comment out this button */}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-900/30 text-center text-gray-400">
            <p>© 2024 TechBeyo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Legal and Contact Modals */}
      {showModal && (
        <div className="fixed inset-0 bgblack/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] rounded-2xl p-8 max-w-2xl w-full border border-blue-500/30 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">
                {showModal === "terms" && "Terms & Conditions"}
                {showModal === "privacy" && "Privacy Policy"}
                {showModal === "cookies" && "Cookie Policy"}
                {showModal === "contact" && "Contact Us"}{" "}
              </h3>
              <button onClick={() => setShowModal(null)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="text-gray-300 space-y-4">
              {showModal === "terms" && (
                <>
                  <p>
                    Welcome to TechBeyo. By accessing our website and using our services, you agree to comply with and
                    be bound by the following terms and conditions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      The content of this website is for general information and use only. It is subject to change
                      without notice.
                    </li>
                    <li>
                      Your use of any information or materials on this website is entirely at your own risk, for which
                      we shall not be liable.
                    </li>
                    <li>
                      This website contains material which is owned by or licensed to us. Reproduction is prohibited
                      other thanin accordance with the copyright notice, which forms part of these terms and conditions.
                    </li>
                    <li>
                      Unauthorized use of this website may give rise to a claim for damages and/or be acriminal offense.
                    </li>
                  </ul>
                </>
              )}
              {showModal === "privacy" && (
                <>
                  <p>
                    At TechBeyo, we are committed to protecting your privacy. This Privacy Policy explains how we
                    collect, use, and safeguard your personal information:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      We collect personal information that you voluntarily provide to us when you use our services,
                      subscribe to our newsletter, or contact us.
                    </li>
                    <li>
                      The information we collect may include your name, email address, phone number, and company
                      details.
                    </li>
                    <li>
                      We use this information to provide and improve our services, communicate with you, and send you
                      relevant updates and marketing materials.
                    </li>
                    <li>
                      We do not sell or share your personal information with third parties for their marketing purposes
                      without your explicit consent.
                    </li>
                    <li>
                      We implement appropriate security measures to protect your personal information from unauthorized
                      access or disclosure.
                    </li>
                  </ul>
                </>
              )}
              {showModal === "cookies" && (
                <>
                  <p>
                    TechBeyo uses cookies to enhance your browsing experience and provide personalized services. Here's
                    what you need to know about our use of cookies:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cookies are small text files that are placed on your device when you visit our website.</li>
                    <li>
                      We use both session cookies and persistent cookies to improve our services and your experience.
                    </li>
                    <li>
                      These cookies help us understand how you use our site, remember your preferences, and tailor
                      content to your interests.
                    </li>
                    <li>
                      You can control and/or delete cookies as you wish. You can delete all cookies that are already on
                      your computer and you can set most browsers to prevent them from being placed.
                    </li>
                    <li>
                      However, if you do this, you may have to manually adjust some preferences every time you visit our
                      site, and some services and functionalities may not work.
                    </li>
                  </ul>
                </>
              )}
              {showModal === "contact" && (
                <>
                  <p>We'd love to hear fromyou! Here's how you can reach us:</p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Email:</strong> Support@techbeyo.com
                    </li>
                    <li>
                      <strong>Phone:</strong> +91 9988230172
                    </li>
                    <li>
                      <strong>Address:</strong> Bahar 4 JBR The walk, Dubai
                    </li>
                  </ul>
                  <p className="mt-4">
                    Our team is available to assist you with any questions, concerns, or inquiries you may have about
                    our services. We strive to respond to all messages within 24 hours during business days.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] rounded-2xl p-8 max-w-2xl w-full border border-blue-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Schedule Your Consultation</h3>
              <button onClick={() => setShowConsultationModal(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="John Doe"
                      value={consultationForm.name}
                      onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="john@company.com"
                      value={consultationForm.email}
                      onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={consultationForm.phone}
                      onChange={(e) => setConsultationForm({ ...consultationForm, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <div className="relative">
                    {" "}
                    <Building size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Company Name"
                      value={consultationForm.company}
                      onChange={(e) => setConsultationForm({ ...consultationForm, company: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={consultationForm.preferredDate}
                      onChange={(e) => setConsultationForm({ ...consultationForm, preferredDate: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="time"
                      required
                      className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={consultationForm.preferredTime}
                      onChange={(e) => setConsultationForm({ ...consultationForm, preferredTime: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  required
                  className="w-full bg-black/50 border border-blue-900/50 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  rows={4}
                  placeholder="Tell us about your project and requirements..."
                  value={consultationForm.message}
                  onChange={(e) => setConsultationForm({ ...consultationForm, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Consultation <Calendar size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  const memoizedScene = useMemo(() => scene.clone(), [scene])
  return <primitive object={memoizedScene} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
}

useGLTF.preload("/assets/3d/duck.glb")

export default App

