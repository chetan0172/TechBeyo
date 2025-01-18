import React from 'react';
import { blogPosts } from '../data/blog-posts';
import { Clock, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">DevOps Insights & Best Practices</h1>
          <p className="text-xl text-gray-300">Stay updated with the latest in DevOps, Cloud, and Infrastructure</p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-4 top-3.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <img 
                    src={blogPosts[0].author.avatar}
                    alt={blogPosts[0].author.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-white font-medium">{blogPosts[0].author.name}</p>
                    <p className="text-gray-400 text-sm">{blogPosts[0].author.role}</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author.name}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}