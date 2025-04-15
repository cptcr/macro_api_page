import React from 'react';
import Link from 'next/link';
import { Database, Github, Package, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Database className="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-bold">macro_api</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <Link 
              href="/#features"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#api-services"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              API Services
            </Link>
            <Link 
              href="/documentation"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Documentation
            </Link>
            <a 
              href="https://github.com/cptcr/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
            >
              <Github className="h-5 w-5 mr-1" />
              <span>GitHub</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
            <a 
              href="https://npmjs.com/package/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
            >
              <Package className="h-5 w-5 mr-1" />
              <span>NPM</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} macro_api. All rights reserved.</p>
          <p className="mt-2">A TypeScript/JavaScript library for simplified API integration.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;