// src/components/home/ApiServices.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, ExternalLink, Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import apiServices from '@/data/apiServices';

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

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Integrate powerful AI capabilities',
      services: apiServices.filter(s => ['chatgpt'].includes(s.id)),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Payment & Commerce',
      description: 'Handle payments and subscriptions',
      services: apiServices.filter(s => ['stripe'].includes(s.id)),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Communication & Social',
      description: 'Connect and communicate',
      services: apiServices.filter(s => ['spotify', 'slack'].includes(s.id)),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development & Cloud',
      description: 'Deploy and manage infrastructure',
      services: apiServices.filter(s => ['vercel', 'github'].includes(s.id)),
      gradient: 'from-gray-600 to-gray-700'
    }
  ];

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
            <Code className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              10+ Supported Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
            Integrate Everything
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From AI to payments, from music to deployment - macro_api provides 
            wrappers for all the services you need to build modern applications.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              <div className="mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white mb-4`}>
                  <span className="text-sm font-medium">{category.title}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{category.description}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, index) => (
                  <div
                    key={service.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Card glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                      {/* Service header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${service.color} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg`}>
                            <DynamicIcon name={service.icon} className="h-8 w-8" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-2">Production Ready</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>

                      {/* Service description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      {/* Feature highlights */}
                      {service.features && (
                        <div className="mb-6">
                          <div className="grid grid-cols-2 gap-3">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                {feature.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Methods count */}
                      {service.methods && (
                        <div className="flex items-center mb-6">
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            {service.methods.length}+ methods
                          </div>
                        </div>
                      )}

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
  ${service.authParams[0]}
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
            </div>
          ))}
        </div>

        {/* All services grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">All Supported Services</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of popular APIs with consistent interfaces and production-ready features.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {apiServices.map((service) => (
              <Link
                key={service.id}
                href={service.docsLink}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg ${service.color} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <DynamicIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
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