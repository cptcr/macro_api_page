'use client';

import React from 'react';
import { Command, FileCode, CheckCircle, ShieldAlert, Layers, Clock } from 'lucide-react';
import { features } from '@/data/features';

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Command: <Command className="h-12 w-12" />,
    FileCode: <FileCode className="h-12 w-12" />,
    CheckCircle: <CheckCircle className="h-12 w-12" />,
    ShieldAlert: <ShieldAlert className="h-12 w-12" />,
    Layers: <Layers className="h-12 w-12" />,
    Clock: <Clock className="h-12 w-12" />,
  };

  return (
    <div className="text-primary-600 dark:text-primary-400">
      {iconMap[icon] || <Command className="h-12 w-12" />}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div id="features" className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            macro_api provides a consistent interface to multiple APIs, 
            making your development workflow smoother and more efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-4">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;