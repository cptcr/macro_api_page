import React from 'react';
import Link from 'next/link';
import { Package, Code } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-6 bg-primary-600 dark:bg-primary-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Simplify Your API Integrations?
        </h2>
        <p className="text-primary-100 text-xl mb-8 max-w-2xl mx-auto">
          Get started with macro_api today and streamline your development workflow.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="https://npmjs.com/package/macro_api" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Package className="h-5 w-5 mr-2" />
            Install from npm
          </a>
          <Link 
            href="/documentation" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Code className="h-5 w-5 mr-2" />
            Read the Docs
          </Link>
        </div>
        
        <div className="mt-10 bg-primary-700 dark:bg-primary-800 rounded-lg p-4 text-primary-100 inline-block mx-auto">
          <code className="font-mono">npm install macro_api</code>
        </div>
      </div>
    </div>
  );
};

export default Cta;