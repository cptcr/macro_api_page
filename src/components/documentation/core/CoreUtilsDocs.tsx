import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Settings, Shield, Zap, Code, FileCode, AlertTriangle, ArrowRight, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

const CoreUtilsDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('errorHandling');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language = 'typescript', id }: { code: string; language?: string; id: string }) => (
    <div className="relative glass-card">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{language}</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 glass-button"
          onClick={() => copyToClipboard(code, id)}
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm scrollbar-modern">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      {copiedCode === id && (
        <div className="absolute top-2 right-12 glass px-2 py-1 rounded text-xs text-green-500 border border-green-500/20">
          Copied!
        </div>
      )}
    </div>
  );

  const errorHandlingCode = `import {
  isAxiosError,
  hasAxiosResponse,
  extractErrorMessage,
  handleAxiosError
} from 'macro_api/utils/errorHandling';

// Type guard for Axios-like errors
const processError = (error: unknown) => {
  if (isAxiosError(error)) {
    console.log('This is an Axios-like error');
    console.log('Has response:', !!error.response);
    console.log('Has request:', !!error.request);
    console.log('Has config:', !!error.config);
  }
};

// Check if error has response data
const handleResponseError = (error: unknown) => {
  if (hasAxiosResponse(error)) {
    // TypeScript knows error.response exists and is non-null
    console.log('Status:', error.response.status);
    console.log('Status Text:', error.response.statusText);
    console.log('Response Data:', error.response.data);
    console.log('Headers:', error.response.headers);
  }
};

// Safe error message extraction
const getErrorMessage = (error: unknown): string => {
  const message = extractErrorMessage(error);
  console.log('Error message:', message);
  return message;
};`;

  const typeConversionCode = `import {
  toRecord,
  toString,
  toNumber,
  getProperty
} from 'macro_api/utils/errorHandling';

// Safe conversion to Record<string, unknown>
const processUnknownObject = (data: unknown) => {
  const record = toRecord(data);
  
  // Now safely access properties
  console.log('Converted record:', record);
  
  // Examples with different inputs
  console.log(toRecord({ name: 'John', age: 30 })); // { name: 'John', age: 30 }
  console.log(toRecord(['array'])); // {}
  console.log(toRecord(null)); // {}
  console.log(toRecord('string')); // {}
};

// Safe string conversion
const safeStringOperations = (value: unknown) => {
  const str = toString(value);
  console.log('String value:', str);
  
  // Examples
  console.log(toString('hello')); // 'hello'
  console.log(toString(123)); // '123'
  console.log(toString(null)); // ''
  console.log(toString(undefined)); // ''
  console.log(toString({ name: 'John' })); // '[object Object]'
};

// Safe number conversion
const safeNumberOperations = (value: unknown) => {
  const num = toNumber(value);
  console.log('Number value:', num);
  
  // Examples
  console.log(toNumber(123)); // 123
  console.log(toNumber('456')); // 456
  console.log(toNumber('abc')); // 0
  console.log(toNumber(null)); // 0
  console.log(toNumber(true)); // 1
};`;

  const mainEntryCode = `import { VERSION, PACKAGE_INFO } from 'macro_api';

// Get version information
console.log('macro_api version:', VERSION); // "3.0.0"

// Get comprehensive package information
console.log('Package info:', PACKAGE_INFO);
/*
{
  name: 'macro_api',
  version: '3.0.0',
  description: 'A comprehensive, production-ready API toolkit for various services',
  license: 'Apache-2.0',
  author: 'CPTCR',
  repository: 'https://github.com/cptcr/macro_api',
  homepage: 'https://macro-api-nine.vercel.app/',
  documentation: 'https://cptcr.github.io/macro_api/',
  features: [
    'Production-ready API wrappers',
    'Built-in error handling and retry logic',
    'Intelligent caching system',
    'TypeScript support',
    'Comprehensive testing',
    'Circuit breaker pattern',
    'Request batching',
    'Webhook verification',
    'Rate limiting protection'
  ],
  supportedServices: [
    'Stripe - Payment processing',
    'Slack - Team communication',
    'SendGrid - Email delivery',
    'Vercel - Deployment automation',
    'AWS S3 - Object storage',
    'Docker Hub - Container registry',
    'YouTube - Video platform',
    'Spotify - Music streaming',
    'Valorant - Gaming statistics',
    'DeepSeek - AI models',
    'ChatGPT - OpenAI models',
    'GitHub - Version control',
    'Notion - Productivity',
    'PayPal - Payments',
    'Football API - Sports data'
  ]
}
*/`;

  const unifiedClientCode = `import { MacroAPIClient, ChatGPT, SpotifyAPI } from 'macro_api';

// Create unified client with caching and retry logic
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 3600, // 1 hour
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 30000
  }
});

// Initialize individual service clients
const gpt = new ChatGPT({ apiKey: process.env.OPENAI_API_KEY! });
const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
});

// Execute operations with unified error handling and caching
const executeWithClient = async () => {
  // Chat completion with caching
  const chatResponse = await client.execute(
    () => gpt.chat('What is TypeScript?'),
    {
      service: 'openai',
      method: 'chat',
      params: { prompt: 'typescript-explanation' },
      cacheTtl: 1800 // Cache for 30 minutes
    }
  );
  
  console.log('Chat response (cached):', chatResponse);
  
  // Spotify search with caching
  const searchResults = await client.execute(
    () => spotify.search('Daft Punk', ['track'], { limit: 5 }),
    {
      service: 'spotify',
      method: 'search',
      params: { query: 'Daft Punk', type: 'track', limit: 5 },
      cacheTtl: 600, // Cache for 10 minutes
      skipRetry: false // Enable retries
    }
  );
  
  console.log('Search results (cached):', searchResults);
};`;

  const features = [
    {
      name: 'Type Guards',
      description: 'Safe type checking for error objects',
      icon: <Shield className="h-4 w-4" />
    },
    {
      name: 'Safe Conversions',
      description: 'Convert unknown types safely',
      icon: <Code className="h-4 w-4" />
    },
    {
      name: 'Error Extraction',
      description: 'Extract error messages safely',
      icon: <AlertTriangle className="h-4 w-4" />
    },
    {
      name: 'Axios Handling',
      description: 'Specialized Axios error processing',
      icon: <Zap className="h-4 w-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects matching main page */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div className="relative z-10 container-responsive section-padding">
        {/* Header Section */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <Settings className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Core Infrastructure
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Utility Functions & Main Entry
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Core utilities and the main entry point for macro_api
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            This section covers the utility functions (<code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/utils/errorHandling.ts</code>) and main entry point (<code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/index.ts</code>) that provide the foundation for macro_api's functionality.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Error Utilities</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Type Safety</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Main Entry</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Unified Client</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="glass-card mb-8 sm:mb-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('errorHandling')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'errorHandling' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Error Handling
              </button>
              <button
                onClick={() => setActiveTab('typeConversion')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'typeConversion' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Type Conversion
              </button>
              <button
                onClick={() => setActiveTab('mainEntry')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'mainEntry' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Main Entry Point
              </button>
              <button
                onClick={() => setActiveTab('unifiedClient')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'unifiedClient' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Unified Client
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'errorHandling' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                  Error Handling Utilities
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>File:</strong> <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/utils/errorHandling.ts</code>
                </p>
                <p className="text-muted-foreground mb-6">
                  This file provides utility functions for consistent error handling across the macro_api codebase, solving TypeScript errors and providing better type safety.
                </p>
                <CodeBlock code={errorHandlingCode} id="error-handling" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'typeConversion' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Safe Type Conversions
                </h3>
                <p className="text-muted-foreground mb-4">Convert unknown types safely with built-in utilities</p>
                <CodeBlock code={typeConversionCode} id="type-conversion" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'mainEntry' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <FileCode className="h-5 w-5 mr-2 text-primary" />
                  Package Information
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>File:</strong> <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/index.ts</code>
                </p>
                <p className="text-muted-foreground mb-6">
                  The main entry point exports all macro_api functionality and provides the unified MacroAPIClient.
                </p>
                <CodeBlock code={mainEntryCode} id="main-entry" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'unifiedClient' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Unified MacroAPIClient
                </h3>
                <p className="text-muted-foreground mb-4">Centralized client for managing multiple APIs with unified caching and error handling</p>
                <CodeBlock code={unifiedClientCode} id="unified-client" />
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices</h2>

          <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
            <h4 className="font-semibold text-green-600 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Integration Best Practices
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use the unified MacroAPIClient for consistent error handling and caching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Import only the services you need to reduce bundle size</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Configure appropriate cache TTL values based on data volatility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Always handle errors gracefully using the built-in error types</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monitor cache performance and adjust settings as needed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Cache System</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn about the intelligent caching system</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=chatgpt" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">API Integration Examples</h3>
                  <p className="text-muted-foreground text-sm mb-3">See utilities in action with real APIs</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Explore APIs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreUtilsDocs;