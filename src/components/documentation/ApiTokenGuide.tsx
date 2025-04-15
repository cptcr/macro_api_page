import React from 'react';
import { ExternalLink, Key } from 'lucide-react';
import { ApiService } from '@/types/apiService';

interface ApiTokenGuideProps {
  service: ApiService;
}

const ApiTokenGuide: React.FC<ApiTokenGuideProps> = ({ service }) => {
  const { tokenGuide } = service;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex items-center mb-4">
        <Key className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
        <h3 className="text-xl font-semibold">{tokenGuide.title}</h3>
      </div>
      
      <ol className="list-decimal pl-5 space-y-3 mb-6">
        {tokenGuide.steps.map((step, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">{step}</li>
        ))}
      </ol>
      
      <a 
        href={tokenGuide.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
      >
        Visit official documentation
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

export default ApiTokenGuide;