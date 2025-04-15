'use client';

import React, { useState, useEffect } from 'react';
import apiServices from '@/data/apiServices';

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  
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
  
  // Handle clicking a ToC link
  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="hidden xl:block sticky top-24 w-56 pl-4">
      <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-4">
          On This Page
        </h4>
        
        <ul className="space-y-3 text-sm">
          <li>
            <button
              onClick={() => handleClick('getting-started')}
              className={`text-left hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                activeSection === 'getting-started' 
                  ? 'text-primary-600 dark:text-primary-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Getting Started
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('installation')}
              className={`text-left hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                activeSection === 'installation' 
                  ? 'text-primary-600 dark:text-primary-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Installation
            </button>
          </li>
          
          <li>
            <span className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mt-4 mb-2">
              API Services
            </span>
            <ul className="space-y-2 pl-2">
              {apiServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleClick(service.id)}
                    className={`text-left hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                      activeSection === service.id 
                        ? 'text-primary-600 dark:text-primary-400 font-medium' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;