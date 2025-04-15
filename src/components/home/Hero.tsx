'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Github, ArrowRight } from 'lucide-react';
import CodeBlock from '../common/CodeBlock';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const sampleCode = `import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize the clients
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}`;

  if (!isMounted) {
    return null; // Avoid hydration issues
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">
              One Library
            </span>{' '}
            for All Your API Needs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive TypeScript/JavaScript wrapper for popular APIs. 
            Simplify your integrations with our unified interface.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/documentation" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Code className="h-5 w-5 mr-2" />
              <span>Documentation</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <a 
              href="https://github.com/cptcr/macro_api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <CodeBlock 
            code={sampleCode} 
            language="typescript" 
            title="Quick Example"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;