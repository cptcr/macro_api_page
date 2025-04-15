'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import CodeBlock from '../common/CodeBlock';
import codeExamples from '@/data/codeExamples';

const CodeExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typescript' | 'javascript'>('typescript');
  const [activeExample, setActiveExample] = useState(codeExamples[0].id);
  
  const selectedExample = codeExamples.find(example => example.id === activeExample) || codeExamples[0];
  
  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Code Examples</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how easy it is to work with different APIs using macro_api.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {codeExamples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveExample(example.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeExample === example.id 
                  ? 'bg-primary-600 text-white dark:bg-primary-500' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
              `}
            >
              {example.title}
            </button>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">{selectedExample.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{selectedExample.description}</p>
          </div>
          
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'typescript' 
                  ? 'bg-primary-600 text-white dark:bg-primary-500' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('typescript')}
            >
              TypeScript
            </button>
            <button 
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'javascript' 
                  ? 'bg-primary-600 text-white dark:bg-primary-500' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('javascript')}
            >
              JavaScript
            </button>
          </div>
          
          <div className="p-6">
            <CodeBlock 
              code={activeTab === 'typescript' ? selectedExample.typescript : selectedExample.javascript} 
              language={activeTab}
              showLineNumbers={true}
            />
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/documentation" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            View complete documentation
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeExample;