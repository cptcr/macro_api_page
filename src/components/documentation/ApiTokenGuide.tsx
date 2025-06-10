import React from 'react';
import { ExternalLink, Key, Lightbulb } from 'lucide-react';
import { ApiService } from '@/types/apiService';

interface ApiTokenGuideProps {
  service: ApiService;
}

const ApiTokenGuide: React.FC<ApiTokenGuideProps> = ({ service }) => {
  const { tokenGuide } = service;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <Key className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
        <h3 className="text-xl font-semibold">{tokenGuide.title}</h3>
      </div>
      
      <div className="mb-6">
        <ol className="list-decimal pl-5 space-y-4">
          {tokenGuide.steps.map((step, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex">
        <div className="flex-shrink-0 mr-3">
          <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium">Tip: Security Best Practices</p>
          <p className="mt-1">Always store API keys securely as environment variables and never commit them to version control.</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <a 
          href={tokenGuide.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
        >
          Visit official documentation
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
        
        {tokenGuide.expiryInfo && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {tokenGuide.expiryInfo}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiTokenGuide;