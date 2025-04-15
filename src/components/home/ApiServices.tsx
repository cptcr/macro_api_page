'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import apiServices from '@/data/apiServices';

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className = 'h-8 w-8' }) => {
  // Safe way to access icon components
  const IconComponent = React.useMemo(() => {
    // Cast to unknown first, then to any
    const icons = LucideIcons as unknown as Record<string, any>;
    return icons[name] || icons.Code;
  }, [name]);

  return <IconComponent className={className} />;
};

const ApiServices: React.FC = () => {
  return (
    <div id="api-services" className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Supported API Services</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            macro_api provides wrappers for these popular services, making it easy to integrate them into your projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiServices.map((service) => (
            <Link
              key={service.id}
              href={service.docsLink}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 
                         hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="flex items-start mb-4">
                <div className={`mr-4 ${service.color}`}>
                  <DynamicIcon name={service.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                <span>View documentation</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiServices;