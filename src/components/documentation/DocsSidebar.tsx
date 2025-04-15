'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as LucideIcons from 'lucide-react';
import apiServices from '@/data/apiServices';
import { BookOpen, Download, Code } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className = 'h-5 w-5' }) => {
  // Safe way to access icon components
  const IconComponent = React.useMemo(() => {
    // Cast to unknown first, then to any
    const icons = LucideIcons as unknown as Record<string, any>;
    return icons[name] || icons.Code;
  }, [name]);

  return <IconComponent className={className} />;
};

const DocsSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle clicking a sidebar link
  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="sticky top-24 w-64 pr-4 hidden lg:block">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <h4 className="font-semibold text-lg mb-4">Documentation</h4>
        
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleClick('getting-started')}
              className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm transition-colors ${
                activeSection === 'getting-started' 
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Getting Started
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('installation')}
              className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm transition-colors ${
                activeSection === 'installation' 
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Download className="h-4 w-4 mr-2" />
              Installation
            </button>
          </li>
          
          <li className="pt-2 pb-1">
            <div className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
              API Services
            </div>
          </li>
          
          {apiServices.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => handleClick(service.id)}
                className={`w-full text-left px-3 py-2 rounded-md flex items-center text-sm transition-colors ${
                  activeSection === service.id 
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-medium' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <DynamicIcon name={service.icon} className="h-4 w-4 mr-2" />
                {service.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocsSidebar;