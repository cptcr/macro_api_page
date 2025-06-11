// src/components/home/Features.tsx
'use client';

import React, { useState } from 'react';
import { 
  Command, 
  FileCode, 
  CheckCircle, 
  ShieldAlert, 
  Layers, 
  Clock,
  Zap,
  Code,
  Database,
  Globe,
  ArrowRight
} from 'lucide-react';
import { features } from '@/data/features';
import { useRealtimeStats, formatNumber, formatDownloads } from '@/hooks/useRealtimeStats';

interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  codeExample?: string;
}

const featuresDetails: FeatureDetail[] = [
  {
    id: 'unified-interface',
    title: 'Unified Interface',
    description: 'Access multiple APIs through a consistent and intuitive interface design, reducing learning curves.',
    longDescription: 'Our unified interface provides consistent patterns across all API integrations, making it easier to work with multiple services without learning different paradigms for each.',
    benefits: [
      'Consistent method naming across all APIs',
      'Standardized error handling patterns',
      'Unified authentication flows',
      'Shared configuration patterns'
    ],
    codeExample: `// Same pattern for all APIs
const gpt = new ChatGPT({ apiKey: 'your-key' });
const spotify = new SpotifyAPI({ clientId: 'id', clientSecret: 'secret' });
const stripe = new StripeAPI({ secretKey: 'key' });

// Consistent error handling
try {
  const result = await gpt.chat('Hello');
} catch (error) {
  console.log(error.service); // 'openai'
  console.log(error.code);    // 'rate_limit_exceeded'
}`
  },
  {
    id: 'typescript-support',
    title: 'TypeScript Support',
    description: 'Built with TypeScript from the ground up, providing robust type definitions for all API operations.',
    longDescription: 'Complete TypeScript definitions ensure type safety, better IDE support, and catch errors at compile time rather than runtime.',
    benefits: [
      'Full IntelliSense support in VS Code',
      'Compile-time error detection',
      'Auto-completion for all methods',
      'Type-safe API responses'
    ],
    codeExample: `// Full type safety
interface ChatResponse {
  content: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

const response: ChatResponse = await gpt.chat('Hello');
//    ^-- Fully typed response`
  },
  {
    id: 'comprehensive-coverage',
    title: 'Comprehensive Coverage',
    description: 'Support for major platforms and services with detailed method implementations and documentation.',
    longDescription: 'We support the most popular APIs with comprehensive method coverage, not just basic operations.',
    benefits: [
      '10+ major API services supported',
      '100+ methods across all services',
      'Advanced features like streaming, webhooks',
      'Regular updates for new API features'
    ]
  },
  {
    id: 'error-handling',
    title: 'Production-Ready Error Handling',
    description: 'Robust error management with detailed error information for efficient debugging and troubleshooting.',
    longDescription: 'Built-in error handling with retry logic, circuit breakers, and detailed error information helps you build resilient applications.',
    benefits: [
      'Automatic retry with exponential backoff',
      'Circuit breaker pattern implementation',
      'Detailed error context and suggestions',
      'Rate limit handling and queuing'
    ],
    codeExample: `// Automatic error handling
try {
  const result = await client.execute(
    () => gpt.chat('Hello'),
    {
      retries: 3,
      circuitBreaker: true,
      timeout: 30000
    }
  );
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(\`Retry after: \${error.retryAfter}s\`);
  }
}`
  },
  {
    id: 'promise-based',
    title: 'Modern Promise-Based Architecture',
    description: 'Built on modern promise-based architecture, making it easy to integrate with async/await patterns.',
    longDescription: 'Fully async/await compatible with support for streaming, parallel execution, and advanced flow control.',
    benefits: [
      'Native async/await support',
      'Promise.all() compatibility',
      'Streaming support for real-time responses',
      'Cancellable operations'
    ]
  },
  {
    id: 'caching',
    title: 'Intelligent Caching System',
    description: 'Intelligent token caching for APIs that use OAuth, reducing unnecessary authentication requests.',
    longDescription: 'Built-in caching system with support for memory, Redis, and hybrid caching strategies to optimize performance and reduce API costs.',
    benefits: [
      'Memory and Redis cache providers',
      'Automatic cache invalidation',
      'Configurable TTL policies',
      'Cache warming strategies'
    ],
    codeExample: `// Configure intelligent caching
const client = new MacroAPIClient({
  cache: {
    type: 'hybrid',
    ttl: 3600,
    redis: { url: process.env.REDIS_URL }
  }
});

// Automatic caching
const result = await client.execute(
  () => spotify.search('Daft Punk', ['track']),
  { cacheTtl: 1800 } // 30 minutes
);`
  }
];

const FeatureIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'h-8 w-8' }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Command: <Command className={className} />,
    FileCode: <FileCode className={className} />,
    CheckCircle: <CheckCircle className={className} />,
    ShieldAlert: <ShieldAlert className={className} />,
    Layers: <Layers className={className} />,
    Clock: <Clock className={className} />,
  };

  return (
    <div className="text-primary-600 dark:text-primary-400">
      {iconMap[icon] || <Command className={className} />}
    </div>
  );
};

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);
  const stats = useRealtimeStats();

  return (
    <div id="features" className="py-24 px-4 md:px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Zap className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Built for Developers
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            macro_api provides a consistent interface to multiple APIs, 
            making your development workflow smoother and more efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const featureDetail = featuresDetails.find(f => f.id === feature.id);
            return (
              <div 
                key={feature.id}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                onClick={() => setSelectedFeature(featureDetail || null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon icon={feature.icon} className="h-12 w-12" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive stats section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Developers Worldwide
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of developers who have simplified their API integrations with macro_api
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">API Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stats.loading ? (
                    <div className="animate-pulse bg-white/20 h-12 w-20 mx-auto rounded" />
                  ) : stats.github ? (
                    formatNumber(stats.github.stargazers_count)
                  ) : (
                    '1.2K+'
                  )}
                </div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stats.loading ? (
                    <div className="animate-pulse bg-white/20 h-12 w-20 mx-auto rounded" />
                  ) : stats.npm ? (
                    formatDownloads(stats.npm.downloads)
                  ) : (
                    '10K+'
                  )}
                </div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">Weekly Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100 uppercase tracking-wide text-sm">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedFeature(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedFeature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedFeature.longDescription}</p>
              </div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                {selectedFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedFeature.codeExample && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Example</h4>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{selectedFeature.codeExample}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;