// src/components/home/ApiServices.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, ExternalLink, Star, TrendingUp, CheckCircle, Users, Globe } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import apiServices, { categories } from '@/data/apiServices';

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className = 'h-8 w-8' }) => {
  const IconComponent = React.useMemo(() => {
    const icons = LucideIcons as unknown as Record<string, any>;
    return icons[name] || icons.Code;
  }, [name]);

  return <IconComponent className={className} />;
};

const ApiServices: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedServices = selectedCategory 
    ? apiServices.filter(service => 
        categories.find(cat => cat.id === selectedCategory)?.name === service.category
      )
    : apiServices;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'beta': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'alpha': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div id="api-services" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Globe className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {apiServices.length} Production-Ready APIs
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
            Integrate Everything
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From AI to payments, from music to deployment - macro_api provides 
            production-ready wrappers for all the services you need to build modern applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              !selectedCategory 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            All Services ({apiServices.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'text-white shadow-lg scale-105' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {selectedCategory === category.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full`} />
              )}
              <span className="relative z-10 flex items-center">
                <DynamicIcon name={category.icon} className="h-4 w-4 mr-2" />
                {category.name} ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* API Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                
                {/* Service header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${service.color} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <DynamicIcon name={service.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h4>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(service.difficulty)}`}>
                          {service.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-600">{service.popularity}%</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Service description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Use cases */}
                {service.useCases && (
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Popular Use Cases:</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 3).map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feature highlights */}
                {service.features && (
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature.name}</span>
                          {feature.premium && (
                            <span className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded">
                              Pro
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Methods count and pricing */}
                <div className="flex items-center justify-between mb-6">
                  {service.methods && (
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {service.methods.length}+ methods
                    </div>
                  )}
                  {service.pricing && (
                    <div className="flex items-center">
                      {service.pricing.free ? (
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                          Free Tier
                        </span>
                      ) : (
                        <span className="text-xs bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full">
                          Paid
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick code preview */}
                <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    <span className="text-xs text-gray-400">Quick Start</span>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    <code>{`const ${service.variableName} = new ${service.className}({
  ${service.authParams.slice(0, 2).join(',\n  ')}
});`}</code>
                  </pre>
                </div>

                {/* CTA */}
                <Link 
                  href={service.docsLink}
                  className="group/link flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                >
                  <span className="font-medium text-blue-800 dark:text-blue-300">
                    View Documentation
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics and Social Proof */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Developers Worldwide
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of developers who have simplified their API integrations with macro_api
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{apiServices.length}+</div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">API Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {apiServices.reduce((total, service) => total + (service.methods?.length || 0), 0)}+
                </div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">Total Methods</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">TypeScript</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start integrating these powerful APIs into your applications today with macro_api.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/documentation"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  <Code className="h-5 w-5 mr-2" />
                  Get Started
                </Link>
                <a 
                  href="https://github.com/cptcr/macro_api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiServices;