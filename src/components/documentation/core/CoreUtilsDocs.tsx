import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Settings, Shield, Zap, Code, FileCode, AlertTriangle, ArrowRight, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

const CoreUtilsDocs: React.FC = () => {
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
          
          <div className="flex items-center justify-center mb-6">
            <Settings className="h-12 w-12 sm:h-16 sm:w-16 mr-4 sm:mr-6 text-blue-600 dark:text-blue-400" />
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold mb-2 text-gradient-secondary">
                Utility Functions & Main Entry
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Core utilities and the main entry point for macro_api
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">
              Error Utilities
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">
              Type Safety
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Main Entry
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">
              Unified Client
            </span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Overview</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            This section covers the utility functions (<code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/utils/errorHandling.ts</code>) and main entry point (<code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/index.ts</code>) that provide the foundation for macro_api's functionality.
          </p>
        </div>

        {/* Error Handling Utilities Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Error Handling Utilities</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-6">
            <strong>File:</strong> <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/utils/errorHandling.ts</code>
          </p>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            This file provides utility functions for consistent error handling across the macro_api codebase, solving TypeScript errors and providing better type safety.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-primary" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Type Guards</h4>
                    <p className="text-sm text-muted-foreground">Safe type checking for error objects</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Safe Conversions</h4>
                    <p className="text-sm text-muted-foreground">Convert unknown types safely</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Error Extraction</h4>
                    <p className="text-sm text-muted-foreground">Extract error messages safely</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Axios Handling</h4>
                    <p className="text-sm text-muted-foreground">Specialized Axios error processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Type Guards and Error Detection
            </h3>
            
            <CodeExampleSwitcher
              typescript={`import {
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
};

// Examples with different error types
const testErrorTypes = () => {
  // Standard Error
  const standardError = new Error('Something went wrong');
  console.log(extractErrorMessage(standardError)); // "Something went wrong"
  
  // String error
  const stringError = 'Simple error message';
  console.log(extractErrorMessage(stringError)); // "Simple error message"
  
  // Object with message property
  const objectError = { message: 'Object error', code: 500 };
  console.log(extractErrorMessage(objectError)); // "Object error"
  
  // Unknown error
  const unknownError = null;
  console.log(extractErrorMessage(unknownError)); // "Unknown error occurred"
};`}
              javascript={`const {
  isAxiosError,
  hasAxiosResponse,
  extractErrorMessage,
  handleAxiosError
} = require('macro_api/utils/errorHandling');

// Type guard for Axios-like errors
const processError = (error) => {
  if (isAxiosError(error)) {
    console.log('This is an Axios-like error');
    console.log('Has response:', !!error.response);
  }
};

// Safe error message extraction
const getErrorMessage = (error) => {
  const message = extractErrorMessage(error);
  console.log('Error message:', message);
  return message;
};

// Handle different error types
const testErrorTypes = () => {
  const standardError = new Error('Something went wrong');
  console.log(extractErrorMessage(standardError)); // "Something went wrong"
  
  const stringError = 'Simple error message';
  console.log(extractErrorMessage(stringError)); // "Simple error message"
  
  const objectError = { message: 'Object error', code: 500 };
  console.log(extractErrorMessage(objectError)); // "Object error"
  
  const unknownError = null;
  console.log(extractErrorMessage(unknownError)); // "Unknown error occurred"
};`}
              title="Type guards and error detection"
            />
          </div>
        </div>

        {/* Axios Error Handling Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Axios Error Handling</h2>
          
          <CodeExampleSwitcher
            typescript={`import { handleAxiosError, hasAxiosResponse } from 'macro_api/utils/errorHandling';

// Consistent Axios error handling across all API classes
class APIWrapper {
  private serviceName: string;
  
  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }
  
  async makeRequest(url: string, options?: RequestInit) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        // Simulate Axios-like error structure
        const error = new Error(\`HTTP \${response.status}: \${response.statusText}\`) as any;
        error.response = {
          status: response.status,
          statusText: response.statusText,
          data: await response.json().catch(() => null),
          headers: Object.fromEntries(response.headers.entries())
        };
        throw error;
      }
      
      return await response.json();
    } catch (error) {
      // Use utility to handle error consistently
      handleAxiosError(error, this.serviceName);
    }
  }
}

// Advanced error handling with context
const advancedErrorHandler = (error: unknown, serviceName: string, operation: string) => {
  if (hasAxiosResponse(error)) {
    const { response } = error;
    
    // Extract API-specific error information
    let apiMessage = error.message;
    
    if (response.data && typeof response.data === 'object') {
      const data = response.data as Record<string, unknown>;
      
      // Try different common error message fields
      if (typeof data.message === 'string') {
        apiMessage = data.message;
      } else if (typeof data.error === 'string') {
        apiMessage = data.error;
      } else if (typeof data.error_description === 'string') {
        apiMessage = data.error_description;
      } else if (Array.isArray(data.errors) && data.errors.length > 0) {
        const firstError = data.errors[0];
        if (typeof firstError === 'string') {
          apiMessage = firstError;
        } else if (typeof firstError === 'object' && firstError && 'message' in firstError) {
          apiMessage = String(firstError.message);
        }
      }
    }
    
    // Create detailed error message
    const detailedMessage = \`\${serviceName} API Error (\${response.status}): \${apiMessage}\`;
    
    // Add context for specific HTTP status codes
    switch (response.status) {
      case 401:
        throw new Error(\`\${detailedMessage}. Check your authentication credentials.\`);
      case 403:
        throw new Error(\`\${detailedMessage}. Insufficient permissions for \${operation}.\`);
      case 404:
        throw new Error(\`\${detailedMessage}. The requested resource was not found.\`);
      case 429:
        const retryAfter = response.headers?.['retry-after'] || response.headers?.['Retry-After'];
        throw new Error(\`\${detailedMessage}. Rate limited. \${retryAfter ? \`Retry after \${retryAfter} seconds.\` : ''}\`);
      case 500:
        throw new Error(\`\${detailedMessage}. Internal server error. Please try again later.\`);
      case 502:
      case 503:
      case 504:
        throw new Error(\`\${detailedMessage}. Service temporarily unavailable.\`);
      default:
        throw new Error(detailedMessage);
    }
  } else if (isAxiosError(error)) {
    // Handle network errors, timeouts, etc.
    if (error.code === 'ECONNABORTED' || error.code === 'TIMEOUT') {
      throw new Error(\`\${serviceName} API Timeout: \${error.message}\`);
    }
    
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      throw new Error(\`\${serviceName} API Connection Error: \${error.message}\`);
    }
    
    throw new Error(\`\${serviceName} API Network Error: \${error.message}\`);
  } else {
    // Fallback for other error types
    const message = extractErrorMessage(error);
    throw new Error(\`\${serviceName} API Error: \${message}\`);
  }
};`}
            javascript={`const { handleAxiosError, hasAxiosResponse, extractErrorMessage } = require('macro_api/utils/errorHandling');

// API wrapper with consistent error handling
class APIWrapper {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  
  async makeRequest(url, options) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        const error = new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        error.response = {
          status: response.status,
          statusText: response.statusText,
          data: await response.json().catch(() => null)
        };
        throw error;
      }
      
      return await response.json();
    } catch (error) {
      handleAxiosError(error, this.serviceName);
    }
  }
}

// Advanced error handling
const advancedErrorHandler = (error, serviceName, operation) => {
  if (hasAxiosResponse(error)) {
    const { response } = error;
    let apiMessage = error.message;
    
    // Extract API error message
    if (response.data && typeof response.data === 'object') {
      if (response.data.message) {
        apiMessage = response.data.message;
      } else if (response.data.error) {
        apiMessage = response.data.error;
      }
    }
    
    // Handle specific status codes
    switch (response.status) {
      case 401:
        throw new Error(\`\${serviceName}: Authentication failed. Check your credentials.\`);
      case 429:
        throw new Error(\`\${serviceName}: Rate limited. Please wait before retrying.\`);
      case 500:
        throw new Error(\`\${serviceName}: Server error. Try again later.\`);
      default:
        throw new Error(\`\${serviceName}: \${apiMessage}\`);
    }
  } else {
    const message = extractErrorMessage(error);
    throw new Error(\`\${serviceName}: \${message}\`);
  }
};`}
            title="Axios error handling utilities"
          />
        </div>

        {/* Safe Type Conversions Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Safe Type Conversions</h2>
          
          <CodeExampleSwitcher
            typescript={`import {
  toRecord,
  toPaginationParams,
  toRequestData,
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

// Convert pagination parameters safely
const handlePaginationParams = (params: unknown) => {
  const paginationParams = toPaginationParams(params);
  
  // Use with API calls
  const queryString = new URLSearchParams(
    Object.entries(paginationParams).map(([key, value]) => [key, String(value)])
  ).toString();
  
  console.log('Query string:', queryString);
};

// Safe request data conversion
const prepareRequestData = (data: unknown) => {
  const requestData = toRequestData(data);
  
  if (requestData instanceof FormData) {
    console.log('Data is FormData');
    // Handle FormData
  } else if (requestData) {
    console.log('Data is object:', requestData);
    // Handle regular object
  } else {
    console.log('No data to send');
  }
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
};

// Safe property access
const safePropertyAccess = (obj: unknown, key: string) => {
  const value = getProperty(obj, key);
  console.log(\`Property '\${key}':, value);
  
  // Examples
  const testObj = { name: 'John', age: 30, details: { city: 'NYC' } };
  console.log(getProperty(testObj, 'name')); // 'John'
  console.log(getProperty(testObj, 'missing')); // undefined
  console.log(getProperty(null, 'name')); // undefined
  console.log(getProperty('string', 'length')); // undefined (not an object)
};

// Practical usage in API wrapper
class SafeAPIWrapper {
  async processApiResponse(response: unknown) {
    // Safely convert response to record
    const data = toRecord(response);
    
    // Safely extract properties
    const id = toString(getProperty(data, 'id'));
    const count = toNumber(getProperty(data, 'count'));
    const metadata = toRecord(getProperty(data, 'metadata'));
    
    return {
      id,
      count,
      metadata,
      raw: data
    };
  }
  
  async makeApiCall(endpoint: string, params: unknown, body: unknown) {
    // Safely prepare parameters
    const queryParams = toPaginationParams(params);
    const requestData = toRequestData(body);
    
    // Build URL with safe query parameters
    const url = new URL(endpoint);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.set(key, toString(value));
    });
    
    // Make request with safe data
    const response = await fetch(url.toString(), {
      method: 'POST',
      body: requestData instanceof FormData ? requestData : JSON.stringify(requestData),
      headers: requestData instanceof FormData ? {} : { 'Content-Type': 'application/json' }
    });
    
    return this.processApiResponse(await response.json());
  }
}`}
            javascript={`const {
  toRecord,
  toString,
  toNumber,
  getProperty
} = require('macro_api/utils/errorHandling');

// Safe type conversions
const processUnknownData = (data) => {
  const record = toRecord(data);
  console.log('Converted record:', record);
  
  // Safe string conversion
  const str = toString(data);
  console.log('String value:', str);
  
  // Safe number conversion
  const num = toNumber(data);
  console.log('Number value:', num);
};

// Safe property access
const safePropertyAccess = (obj, key) => {
  const value = getProperty(obj, key);
  console.log(\`Property '\${key}':, value);
  
  return value;
};

// Practical usage
class SafeAPIWrapper {
  async processApiResponse(response) {
    const data = toRecord(response);
    
    const id = toString(getProperty(data, 'id'));
    const count = toNumber(getProperty(data, 'count'));
    
    return { id, count, raw: data };
  }
}`}
            title="Safe type conversion utilities"
          />
        </div>

        {/* Main Entry Point Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Main Entry Point</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-6">
            <strong>File:</strong> <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/index.ts</code>
          </p>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            The main entry point exports all macro_api functionality and provides the unified <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">MacroAPIClient</code>.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <FileCode className="h-5 w-5 mr-2 text-primary" />
              Package Information
            </h3>
            
            <CodeExampleSwitcher
              typescript={`import { VERSION, PACKAGE_INFO } from 'macro_api';

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
*/`}
              javascript={`const { VERSION, PACKAGE_INFO } = require('macro_api');

// Get version and package information
console.log('Version:', VERSION);
console.log('Package info:', PACKAGE_INFO);

// Check supported services
console.log('Supported services:');
PACKAGE_INFO.supportedServices.forEach(service => {
  console.log('-', service);
});`}
              title="Package information and metadata"
            />
          </div>
        </div>

        {/* Unified MacroAPIClient Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Unified MacroAPIClient</h2>
          
          <CodeExampleSwitcher
            typescript={`import { MacroAPIClient, ChatGPT, SpotifyAPI } from 'macro_api';

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
  
  // Operation without caching
  const liveData = await client.execute(
    () => gpt.chat('Tell me a random fact'),
    {
      service: 'openai',
      method: 'chat',
      skipCache: true // Skip caching for dynamic content
    }
  );
  
  console.log('Live data (not cached):', liveData);
};

// Advanced client configuration
const advancedClient = new MacroAPIClient({
  cache: {
    type: 'hybrid', // Memory + Redis
    ttl: 7200, // 2 hours
    maxSize: 5000,
    redis: {
      url: process.env.REDIS_URL!,
      keyPrefix: 'macro_api_advanced',
      cluster: true
    },
    compression: true,
    serialization: 'msgpack'
  },
  retries: {
    maxRetries: 5,
    baseDelay: 500,
    maxDelay: 60000
  }
});

// Batch operations with the unified client
const batchOperations = async () => {
  const operations = [
    () => gpt.chat('Explain JavaScript'),
    () => gpt.chat('Explain Python'),
    () => gpt.chat('Explain Go'),
    () => spotify.search('Beatles', ['artist']),
    () => spotify.search('Queen', ['artist'])
  ];
  
  // Execute all operations with unified error handling
  const results = await Promise.allSettled(
    operations.map((op, index) => 
      client.execute(op, {
        service: index < 3 ? 'openai' : 'spotify',
        method: index < 3 ? 'chat' : 'search',
        cacheTtl: 1800
      })
    )
  );
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`Operation \${index} succeeded:, result.value);
    } else {
      console.error(\`Operation \${index} failed:, result.reason);
    }
  });
};

// Monitor client performance
const monitorClient = async () => {
  // Get cache statistics
  const cacheStats = await client.getCacheStats();
  if (cacheStats) {
    console.log('Cache Performance:');
    console.log(\`- Hit Rate: \${(cacheStats.hitRate * 100).toFixed(2)}%\`);
    console.log(\`- Total Requests: \${cacheStats.hits + cacheStats.misses}\`);
    console.log(\`- Cache Size: \${cacheStats.size} items\`);
    console.log(\`- Evictions: \${cacheStats.evictions}\`);
  }
  
  // Clear cache if needed
  if (cacheStats && cacheStats.hitRate < 0.5) {
    console.log('Low hit rate detected, clearing cache...');
    await client.clearCache();
  }
};

// Graceful shutdown
const gracefulShutdown = async () => {
  console.log('Shutting down macro_api client...');
  await client.close();
  console.log('Client closed successfully');
};

// Handle process termination
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);`}
            javascript={`const { MacroAPIClient, ChatGPT, SpotifyAPI } = require('macro_api');

// Create unified client
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 3600,
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

// Initialize services
const gpt = new ChatGPT({ apiKey: process.env.OPENAI_API_KEY });
const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

// Execute with unified error handling and caching
const executeOperations = async () => {
  // With caching
  const chatResponse = await client.execute(
    () => gpt.chat('What is JavaScript?'),
    {
      service: 'openai',
      method: 'chat',
      cacheTtl: 1800
    }
  );
  
  // Without caching
  const liveData = await client.execute(
    () => gpt.chat('Random fact'),
    {
      service: 'openai',
      method: 'chat',
      skipCache: true
    }
  );
  
  console.log('Results:', { chatResponse, liveData });
};

// Monitor performance
const monitorClient = async () => {
  const stats = await client.getCacheStats();
  if (stats) {
    console.log(\`Hit rate: \${(stats.hitRate * 100).toFixed(2)}%\`);
    console.log(\`Cache size: \${stats.size}\`);
  }
};

// Graceful shutdown
const shutdown = async () => {
  await client.close();
  console.log('Client closed');
};

process.on('SIGTERM', shutdown);`}
            title="Unified MacroAPIClient usage"
          />
        </div>

        {/* Available Exports Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Available Exports</h2>
          
          <InfoBox type="info" title="Complete Export List">
            The main entry point exports all available classes, types, and utilities from macro_api.
          </InfoBox>

          <div className="mt-6">
            <CodeExampleSwitcher
              typescript={`// Core API Classes
import {
  YouTubeNotify,
  SpotifyAPI,
  Valorant,
  DeepSeek,
  ChatGPT,
  FootballAPI,
  GitHubAPI,
  NotionAPI,
  PayPalAPI,
  StripeAPI
} from 'macro_api';

// Production-Ready APIs
import {
  SlackAPI,
  SendGridAPI,
  VercelAPI,
  S3API,
  DockerHubAPI
} from 'macro_api';

// Core Infrastructure
import {
  CacheManager,
  MemoryCacheProvider,
  RedisCacheProvider,
  HybridCacheProvider
} from 'macro_api';

// Error Handling
import {
  MacroApiError,
  AuthenticationError,
  RateLimitError,
  NotFoundError,
  ServiceUnreachableError,
  ValidationError,
  ConfigurationError,
  PermissionError,
  QuotaExceededError,
  TimeoutError,
  NetworkError,
  ConflictError,
  ErrorFactory,
  ErrorHandler,
  RetryManager,
  CircuitBreaker
} from 'macro_api';

// Types
import type {
  CacheConfig,
  CacheEntry,
  CacheStats,
  CacheProvider,
  ValidationIssue
} from 'macro_api';

// Package Information
import {
  VERSION,
  PACKAGE_INFO,
  MacroAPIClient
} from 'macro_api';

// Usage example with multiple services
const initializeServices = () => {
  // AI Services
  const gpt = new ChatGPT({ apiKey: process.env.OPENAI_API_KEY! });
  const deepseek = new DeepSeek({ apiKey: process.env.DEEPSEEK_API_KEY! });
  
  // Communication
  const slack = new SlackAPI({ botToken: process.env.SLACK_BOT_TOKEN! });
  const sendgrid = new SendGridAPI({ apiKey: process.env.SENDGRID_API_KEY! });
  
  // Payment Processing
  const stripe = new StripeAPI({ secretKey: process.env.STRIPE_SECRET_KEY! });
  const paypal = new PayPalAPI({
    clientId: process.env.PAYPAL_CLIENT_ID!,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET!
  });
  
  // Development Tools
  const github = new GitHubAPI({ token: process.env.GITHUB_TOKEN! });
  const vercel = new VercelAPI({ accessToken: process.env.VERCEL_TOKEN! });
  
  // Cloud Services
  const s3 = new S3API({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: process.env.AWS_REGION!
  });
  
  // Entertainment
  const spotify = new SpotifyAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID!,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
  });
  
  return {
    ai: { gpt, deepseek },
    communication: { slack, sendgrid },
    payments: { stripe, paypal },
    development: { github, vercel },
    cloud: { s3 },
    entertainment: { spotify }
  };
};`}
              javascript={`// Core API Classes
const {
  ChatGPT,
  SpotifyAPI,
  StripeAPI,
  SlackAPI,
  GitHubAPI,
  // ... other classes
} = require('macro_api');

// Core Infrastructure
const {
  CacheManager,
  MemoryCacheProvider,
  MacroAPIClient
} = require('macro_api');

// Error Handling
const {
  MacroApiError,
  RateLimitError,
  ErrorHandler,
  RetryManager
} = require('macro_api');

// Package Info
const { VERSION, PACKAGE_INFO } = require('macro_api');

// Initialize multiple services
const initializeServices = () => {
  const gpt = new ChatGPT({ apiKey: process.env.OPENAI_API_KEY });
  const slack = new SlackAPI({ botToken: process.env.SLACK_BOT_TOKEN });
  const stripe = new StripeAPI({ secretKey: process.env.STRIPE_SECRET_KEY });
  
  return { gpt, slack, stripe };
};`}
              title="Complete export reference"
            />
          </div>
        </div>

        {/* Integration Patterns Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Integration Patterns</h2>
          
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Service Factory Pattern
            </h3>
            
            <CodeExampleSwitcher
              typescript={`import { MacroAPIClient } from 'macro_api';
import type { CacheConfig } from 'macro_api';

// Service factory for consistent initialization
class MacroAPIServiceFactory {
  private client: MacroAPIClient;
  private services: Map<string, any> = new Map();
  
  constructor(cacheConfig?: CacheConfig) {
    this.client = new MacroAPIClient({
      cache: cacheConfig || {
        type: 'memory',
        ttl: 3600,
        maxSize: 1000
      },
      retries: {
        maxRetries: 3,
        baseDelay: 1000,
        maxDelay: 30000
      }
    });
  }
  
  // Generic service factory method
  createService<T>(
    ServiceClass: new (config: any) => T,
    config: any,
    serviceName: string
  ): T {
    if (this.services.has(serviceName)) {
      return this.services.get(serviceName);
    }
    
    const service = new ServiceClass(config);
    this.services.set(serviceName, service);
    return service;
  }
  
  // Convenience methods for common services
  createChatGPT(apiKey: string) {
    const { ChatGPT } = require('macro_api');
    return this.createService(ChatGPT, { apiKey }, 'chatgpt');
  }
  
  createSpotify(clientId: string, clientSecret: string) {
    const { SpotifyAPI } = require('macro_api');
    return this.createService(SpotifyAPI, { clientId, clientSecret }, 'spotify');
  }
  
  createStripe(secretKey: string) {
    const { StripeAPI } = require('macro_api');
    return this.createService(StripeAPI, { secretKey }, 'stripe');
  }
  
  // Execute operations with unified client
  async execute<T>(
    operation: () => Promise<T>,
    options: {
      service: string;
      method: string;
      params?: object;
      cacheTtl?: number;
      skipCache?: boolean;
    }
  ): Promise<T> {
    return this.client.execute(operation, options);
  }
  
  // Get performance metrics
  async getMetrics() {
    const cacheStats = await this.client.getCacheStats();
    return {
      cache: cacheStats,
      services: Array.from(this.services.keys())
    };
  }
  
  // Cleanup
  async cleanup() {
    await this.client.close();
    this.services.clear();
  }
}

// Usage
const factory = new MacroAPIServiceFactory({
  type: 'hybrid',
  ttl: 7200,
  maxSize: 2000,
  redis: {
    url: process.env.REDIS_URL!
  }
});

// Create services
const gpt = factory.createChatGPT(process.env.OPENAI_API_KEY!);
const spotify = factory.createSpotify(
  process.env.SPOTIFY_CLIENT_ID!,
  process.env.SPOTIFY_CLIENT_SECRET!
);

// Use with unified execution
const result = await factory.execute(
  () => gpt.chat('Hello world'),
  {
    service: 'chatgpt',
    method: 'chat',
    cacheTtl: 1800
  }
);`}
              javascript={`const { MacroAPIClient } = require('macro_api');

// Service factory
class MacroAPIServiceFactory {
  constructor(cacheConfig) {
    this.client = new MacroAPIClient({
      cache: cacheConfig || {
        type: 'memory',
        ttl: 3600,
        maxSize: 1000
      }
    });
    this.services = new Map();
  }
  
  createService(ServiceClass, config, serviceName) {
    if (this.services.has(serviceName)) {
      return this.services.get(serviceName);
    }
    
    const service = new ServiceClass(config);
    this.services.set(serviceName, service);
    return service;
  }
  
  createChatGPT(apiKey) {
    const { ChatGPT } = require('macro_api');
    return this.createService(ChatGPT, { apiKey }, 'chatgpt');
  }
  
  async execute(operation, options) {
    return this.client.execute(operation, options);
  }
  
  async cleanup() {
    await this.client.close();
    this.services.clear();
  }
}

// Usage
const factory = new MacroAPIServiceFactory();
const gpt = factory.createChatGPT(process.env.OPENAI_API_KEY);`}
              title="Service factory pattern"
            />
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices</h2>

          <InfoBox type="tip" title="Integration Best Practices">
            <ul className="space-y-2">
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
          </InfoBox>

          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Environment Configuration
            </h3>
            
            <CodeExampleSwitcher
              typescript={`// environment.ts - Centralized environment configuration
interface EnvironmentConfig {
  // Core settings
  nodeEnv: 'development' | 'production' | 'test';
  
  // Cache configuration
  cache: {
    type: 'memory' | 'redis' | 'hybrid';
    ttl: number;
    maxSize?: number;
    redisUrl?: string;
  };
  
  // API Keys
  apiKeys: {
    openai?: string;
    spotify?: { clientId: string; clientSecret: string };
    stripe?: string;
    slack?: string;
    github?: string;
    // ... other services
  };
}

const createEnvironmentConfig = (): EnvironmentConfig => {
  const nodeEnv = (process.env.NODE_ENV as EnvironmentConfig['nodeEnv']) || 'development';
  
  return {
    nodeEnv,
    cache: {
      type: process.env.REDIS_URL ? 'redis' : 'memory',
      ttl: parseInt(process.env.CACHE_TTL || '3600'),
      maxSize: parseInt(process.env.CACHE_MAX_SIZE || '1000'),
      redisUrl: process.env.REDIS_URL
    },
    apiKeys: {
      openai: process.env.OPENAI_API_KEY,
      spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID!,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
      },
      stripe: process.env.STRIPE_SECRET_KEY,
      slack: process.env.SLACK_BOT_TOKEN,
      github: process.env.GITHUB_TOKEN
    }
  };
};

// Application factory with environment-based configuration
class MacroAPIApplication {
  private config: EnvironmentConfig;
  private client: MacroAPIClient;
  private services: Map<string, any> = new Map();
  
  constructor() {
    this.config = createEnvironmentConfig();
    this.client = this.createClient();
  }
  
  private createClient(): MacroAPIClient {
    const cacheConfig = this.config.cache.type === 'redis' 
      ? {
          type: 'redis' as const,
          ttl: this.config.cache.ttl,
          redis: { url: this.config.cache.redisUrl! }
        }
      : {
          type: 'memory' as const,
          ttl: this.config.cache.ttl,
          maxSize: this.config.cache.maxSize!
        };
    
    return new MacroAPIClient({
      cache: cacheConfig,
      retries: {
        maxRetries: this.config.nodeEnv === 'production' ? 5 : 3,
        baseDelay: 1000,
        maxDelay: this.config.nodeEnv === 'production' ? 60000 : 30000
      }
    });
  }
  
  // Initialize services based on available API keys
  async initialize() {
    if (this.config.apiKeys.openai) {
      const { ChatGPT } = await import('macro_api');
      this.services.set('chatgpt', new ChatGPT({
        apiKey: this.config.apiKeys.openai
      }));
    }
    
    if (this.config.apiKeys.spotify.clientId && this.config.apiKeys.spotify.clientSecret) {
      const { SpotifyAPI } = await import('macro_api');
      this.services.set('spotify', new SpotifyAPI(this.config.apiKeys.spotify));
    }
    
    if (this.config.apiKeys.stripe) {
      const { StripeAPI } = await import('macro_api');
      this.services.set('stripe', new StripeAPI({
        secretKey: this.config.apiKeys.stripe
      }));
    }
    
    console.log(\`Initialized \${this.services.size} services in \${this.config.nodeEnv} mode\`);
  }
  
  getService<T>(name: string): T | undefined {
    return this.services.get(name);
  }
  
  async executeWithClient<T>(
    operation: () => Promise<T>,
    options: Parameters<MacroAPIClient['execute']>[1]
  ): Promise<T> {
    return this.client.execute(operation, options);
  }
  
  async getHealthStatus() {
    const cacheStats = await this.client.getCacheStats();
    
    return {
      status: 'healthy',
      environment: this.config.nodeEnv,
      services: Array.from(this.services.keys()),
      cache: cacheStats ? {
        hitRate: cacheStats.hitRate,
        size: cacheStats.size,
        type: this.config.cache.type
      } : null
    };
  }
  
  async shutdown() {
    console.log('Shutting down MacroAPI application...');
    await this.client.close();
    this.services.clear();
    console.log('Application shutdown complete');
  }
}

// Usage
const app = new MacroAPIApplication();
await app.initialize();

// Use services
const gpt = app.getService<ChatGPT>('chatgpt');
if (gpt) {
  const response = await app.executeWithClient(
    () => gpt.chat('Hello world'),
    { service: 'chatgpt', method: 'chat' }
  );
}`}
              javascript={`// Environment configuration for JavaScript
const createEnvironmentConfig = () => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  return {
    nodeEnv,
    cache: {
      type: process.env.REDIS_URL ? 'redis' : 'memory',
      ttl: parseInt(process.env.CACHE_TTL || '3600'),
      maxSize: parseInt(process.env.CACHE_MAX_SIZE || '1000'),
      redisUrl: process.env.REDIS_URL
    },
    apiKeys: {
      openai: process.env.OPENAI_API_KEY,
      spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      },
      stripe: process.env.STRIPE_SECRET_KEY
    }
  };
};

// Application factory
class MacroAPIApplication {
  constructor() {
    this.config = createEnvironmentConfig();
    this.client = this.createClient();
    this.services = new Map();
  }
  
  createClient() {
    const cacheConfig = this.config.cache.type === 'redis' 
      ? {
          type: 'redis',
          ttl: this.config.cache.ttl,
          redis: { url: this.config.cache.redisUrl }
        }
      : {
          type: 'memory',
          ttl: this.config.cache.ttl,
          maxSize: this.config.cache.maxSize
        };
    
    return new MacroAPIClient({ cache: cacheConfig });
  }
  
  async initialize() {
    if (this.config.apiKeys.openai) {
      const { ChatGPT } = require('macro_api');
      this.services.set('chatgpt', new ChatGPT({
        apiKey: this.config.apiKeys.openai
      }));
    }
    
    console.log(\`Initialized \${this.services.size} services\`);
  }
}`}
              title="Environment-based application factory"
            />
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