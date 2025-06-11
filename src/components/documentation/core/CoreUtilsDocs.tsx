import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Settings, Shield, Zap, Code, FileCode, AlertTriangle } from 'lucide-react';

const CoreUtilsDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Settings className="h-10 w-10 mr-4 text-blue-600 dark:text-blue-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Utility Functions & Main Entry</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Core utilities and the main entry point for macro_api
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Error Utilities
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Type Safety
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Main Entry
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Unified Client
          </span>
        </div>
      </div>

      ## Overview

      This section covers the utility functions (`src/utils/errorHandling.ts`) and main entry point (`src/index.ts`) that provide the foundation for macro_api's functionality.

      ## Error Handling Utilities

      **File:** `src/utils/errorHandling.ts`

      This file provides utility functions for consistent error handling across the macro_api codebase, solving TypeScript errors and providing better type safety.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Shield className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Type Guards</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Safe type checking for error objects</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Code className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Safe Conversions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Convert unknown types safely</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <AlertTriangle className="h-6 w-6 text-orange-600 mb-2" />
          <h3 className="font-semibold mb-1">Error Extraction</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Extract error messages safely</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Axios Handling</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Specialized Axios error processing</p>
        </div>
      </div>

      ### Type Guards and Error Detection

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

      ### Axios Error Handling

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

      ### Safe Type Conversions

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

      ## Main Entry Point

      **File:** `src/index.ts`

      The main entry point exports all macro_api functionality and provides the unified `MacroAPIClient`.

      ### Package Information

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

      ### Unified MacroAPIClient

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

      ### Available Exports

      <InfoBox type="info" title="Complete Export List">
        The main entry point exports all available classes, types, and utilities from macro_api.
      </InfoBox>

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

      ## Integration Patterns

      ### Service Factory Pattern

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

      ## Best Practices

      <InfoBox type="tip" title="Integration Best Practices">
        - Use the unified `MacroAPIClient` for consistent error handling and caching
        - Import only the services you need to reduce bundle size
        - Configure appropriate cache TTL values based on data volatility
        - Always handle errors gracefully using the built-in error types
        - Monitor cache performance and adjust settings as needed
      </InfoBox>

      ### Environment Configuration

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
              title="Environment-based application factory" javascript={''}      />

      ## Next Steps

      - **[Cache System](./caching)** - Learn about the intelligent caching system
      - **[Error Handling](./error-handling)** - Master robust error handling patterns  
      - **[API Integration Examples](./chatgpt)** - See utilities in action with real APIs
      - **[Best Practices](./best-practices)** - Advanced integration patterns

    </div>
  );
};

export default CoreUtilsDocs;