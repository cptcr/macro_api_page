// src/data/features.ts

export interface Feature {
  id: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  benefits: string[];
  technicalDetails: string[];
  codeExample?: string;
  category: 'core' | 'developer-experience' | 'production' | 'performance';
  importance: 'high' | 'medium' | 'low';
}

export const features: Feature[] = [
  {
    id: 'unified-interface',
    title: 'Unified Interface',
    icon: 'Command',
    description: 'Access multiple APIs through a consistent and intuitive interface design, reducing learning curves.',
    longDescription: 'Our unified interface provides consistent patterns across all API integrations, making it easier to work with multiple services without learning different paradigms for each. Every API follows the same initialization, method naming, and error handling patterns.',
    benefits: [
      'Consistent method naming across all APIs',
      'Standardized error handling patterns',
      'Unified authentication flows',
      'Shared configuration patterns',
      'Reduced learning curve for new APIs',
      'Faster development time'
    ],
    technicalDetails: [
      'Abstract base classes ensure consistency',
      'Standardized response formats',
      'Common error types across all services',
      'Shared middleware and interceptors',
      'Consistent async/await patterns'
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
  console.log(error.retryAfter); // 60 (seconds)
}`,
    category: 'core',
    importance: 'high'
  },
  {
    id: 'typescript-support',
    title: 'TypeScript Support',
    icon: 'FileCode',
    description: 'Built with TypeScript from the ground up, providing robust type definitions for all API operations.',
    longDescription: 'Complete TypeScript definitions ensure type safety, better IDE support, and catch errors at compile time rather than runtime. Every method, response, and configuration option is fully typed.',
    benefits: [
      'Full IntelliSense support in VS Code',
      'Compile-time error detection',
      'Auto-completion for all methods and properties',
      'Type-safe API responses',
      'Better refactoring support',
      'Self-documenting code through types'
    ],
    technicalDetails: [
      'Strict TypeScript configuration',
      'Generic types for flexible API responses',
      'Discriminated unions for different response types',
      'Branded types for ID validation',
      'Conditional types for advanced use cases'
    ],
    codeExample: `// Full type safety
interface ChatResponse {
  content: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  created: number;
}

const response: ChatResponse = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello' }],
  temperature: 0.7
});
//    ^-- Fully typed response with IntelliSense`,
    category: 'developer-experience',
    importance: 'high'
  },
  {
    id: 'comprehensive-coverage',
    title: 'Comprehensive Coverage',
    icon: 'Layers',
    description: 'Support for major platforms and services with detailed method implementations and documentation.',
    longDescription: 'We support the most popular APIs with comprehensive method coverage, not just basic operations. Each service includes advanced features like webhooks, streaming, and batch operations.',
    benefits: [
      '15+ major API services supported',
      '200+ methods across all services',
      'Advanced features like streaming and webhooks',
      'Regular updates for new API features',
      'Complete endpoint coverage',
      'Batch operation support'
    ],
    technicalDetails: [
      'Full REST API coverage',
      'WebSocket and Server-Sent Events support',
      'Pagination handling',
      'File upload/download capabilities',
      'Webhook signature verification',
      'Real-time data streaming'
    ],
    category: 'core',
    importance: 'high'
  },
  {
    id: 'error-handling',
    title: 'Production-Ready Error Handling',
    icon: 'ShieldAlert',
    description: 'Robust error management with detailed error information for efficient debugging and troubleshooting.',
    longDescription: 'Built-in error handling with retry logic, circuit breakers, and detailed error information helps you build resilient applications. Errors include context, suggestions, and automatic retry strategies.',
    benefits: [
      'Automatic retry with exponential backoff',
      'Circuit breaker pattern implementation',
      'Detailed error context and suggestions',
      'Rate limit handling and queuing',
      'Custom error types for different scenarios',
      'Error logging and monitoring integration'
    ],
    technicalDetails: [
      'Hierarchical error types',
      'Configurable retry strategies',
      'Jitter in backoff calculations',
      'Request timeout handling',
      'Dead letter queue for failed requests',
      'Error metrics collection'
    ],
    codeExample: `import { RateLimitError, NetworkError, RetryManager } from 'macro_api';

const retryManager = new RetryManager({
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 30000
});

try {
  const result = await retryManager.execute(
    () => gpt.chat('Hello'),
    'chatgpt-completion'
  );
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(\`Rate limited. Retry after: \${error.retryAfter}s\`);
  } else if (error instanceof NetworkError) {
    console.log(\`Network issue: \${error.message}\`);
  }
}`,
    category: 'production',
    importance: 'high'
  },
  {
    id: 'promise-based',
    title: 'Modern Promise-Based Architecture',
    icon: 'Clock',
    description: 'Built on modern promise-based architecture, making it easy to integrate with async/await patterns.',
    longDescription: 'Fully async/await compatible with support for streaming, parallel execution, and advanced flow control. All operations return promises and support cancellation.',
    benefits: [
      'Native async/await support',
      'Promise.all() and Promise.allSettled() compatibility',
      'Streaming support for real-time responses',
      'Cancellable operations with AbortController',
      'Parallel request execution',
      'Generator functions for pagination'
    ],
    technicalDetails: [
      'AbortController integration',
      'Stream processing with async iterators',
      'Promise timeout handling',
      'Memory-efficient streaming',
      'Backpressure handling',
      'Connection pooling'
    ],
    codeExample: `// Modern async/await patterns
const controller = new AbortController();

// Parallel execution
const [weather, news, stocks] = await Promise.all([
  weatherAPI.getCurrent('London'),
  newsAPI.getHeadlines(),
  stockAPI.getQuotes(['AAPL', 'GOOGL'])
]);

// Streaming responses
for await (const chunk of gpt.streamChat('Tell me a story')) {
  process.stdout.write(chunk);
}

// Cancellable operations
setTimeout(() => controller.abort(), 5000);
const result = await api.longRunningOperation({ signal: controller.signal });`,
    category: 'developer-experience',
    importance: 'medium'
  },
  {
    id: 'caching',
    title: 'Intelligent Caching System',
    icon: 'CheckCircle',
    description: 'Built-in caching system with support for memory, Redis, and hybrid caching strategies.',
    longDescription: 'Intelligent caching system with support for memory, Redis, and hybrid caching strategies to optimize performance and reduce API costs. Includes cache warming, invalidation, and analytics.',
    benefits: [
      'Memory and Redis cache providers',
      'Hybrid caching for optimal performance',
      'Automatic cache invalidation',
      'Configurable TTL policies',
      'Cache warming strategies',
      'Cache hit/miss analytics'
    ],
    technicalDetails: [
      'LRU eviction policy',
      'Cache compression support',
      'Distributed caching with Redis Cluster',
      'Cache stampede protection',
      'Probabilistic cache warming',
      'Cache metrics and monitoring'
    ],
    codeExample: `// Configure intelligent caching
const client = new MacroAPIClient({
  cache: {
    type: 'hybrid',
    ttl: 3600, // 1 hour default
    maxSize: 1000, // Memory cache size
    redis: { 
      url: process.env.REDIS_URL,
      keyPrefix: 'myapp',
      cluster: true
    },
    compression: true
  }
});

// Automatic caching with custom TTL
const result = await client.execute(
  () => spotify.search('Daft Punk', ['track']),
  {
    service: 'spotify',
    method: 'search',
    params: { query: 'Daft Punk', types: ['track'] },
    cacheTtl: 1800 // 30 minutes
  }
);

// Cache statistics
const stats = await client.getCacheStats();
console.log(\`Hit rate: \${(stats.hitRate * 100).toFixed(2)}%\`);`,
    category: 'performance',
    importance: 'high'
  },
  {
    id: 'circuit-breaker',
    title: 'Circuit Breaker Pattern',
    icon: 'ShieldAlert',
    description: 'Built-in circuit breaker pattern to prevent cascading failures and improve system resilience.',
    longDescription: 'Implement the circuit breaker pattern to prevent cascading failures when external services are unavailable. Automatically opens circuits when failure thresholds are reached.',
    benefits: [
      'Prevents cascading failures',
      'Configurable failure thresholds',
      'Automatic recovery detection',
      'Fallback mechanism support',
      'Real-time circuit state monitoring',
      'Graceful degradation'
    ],
    technicalDetails: [
      'Three states: Closed, Open, Half-Open',
      'Configurable failure count and time windows',
      'Success threshold for recovery',
      'Metrics collection for monitoring',
      'Per-service circuit configuration',
      'Integration with monitoring systems'
    ],
    codeExample: `import { CircuitBreaker } from 'macro_api';

const breaker = new CircuitBreaker({
  failureThreshold: 5,
  recoveryTimeout: 60000, // 1 minute
  successThreshold: 3
});

// Use with fallback
const result = await breaker.execute(
  () => externalAPI.getData(),
  () => fallbackService.getCachedData() // Fallback function
);

// Monitor circuit state
console.log(\`Circuit state: \${breaker.getState()}\`);
console.log(\`Failure count: \${breaker.getFailureCount()}\`);`,
    category: 'production',
    importance: 'medium'
  },
  {
    id: 'request-batching',
    title: 'Request Batching',
    icon: 'Layers',
    description: 'Automatically batch multiple requests to reduce API calls and improve performance.',
    longDescription: 'Intelligent request batching system that automatically groups similar requests together to reduce API calls and improve performance while respecting rate limits.',
    benefits: [
      'Reduced API call count',
      'Lower latency for bulk operations',
      'Automatic request grouping',
      'Configurable batch sizes',
      'Rate limit optimization',
      'Cost reduction for paid APIs'
    ],
    technicalDetails: [
      'Automatic request deduplication',
      'Time-based and size-based batching',
      'Priority queue for urgent requests',
      'Batch splitting for large requests',
      'Partial failure handling',
      'Metrics for batch efficiency'
    ],
    codeExample: `// Automatic request batching
const batcher = new RequestBatcher({
  maxBatchSize: 100,
  maxWaitTime: 1000, // 1 second
  deduplicate: true
});

// These requests will be automatically batched
const promises = userIds.map(id => 
  batcher.execute('getUser', { id })
);

const users = await Promise.all(promises);

// Manual batching for specific use cases
const batchResult = await api.batchGetUsers({
  ids: [1, 2, 3, 4, 5],
  fields: ['name', 'email', 'avatar']
});`,
    category: 'performance',
    importance: 'medium'
  },
  {
    id: 'webhook-verification',
    title: 'Webhook Verification',
    icon: 'ShieldAlert',
    description: 'Built-in webhook signature verification for secure event handling from external services.',
    longDescription: 'Secure webhook handling with automatic signature verification, payload validation, and replay attack prevention for all supported services.',
    benefits: [
      'Automatic signature verification',
      'Replay attack prevention',
      'Payload validation',
      'Multi-service webhook support',
      'Event routing and filtering',
      'Error handling and retries'
    ],
    technicalDetails: [
      'HMAC signature verification',
      'Timestamp-based replay protection',
      'Configurable tolerance windows',
      'Event type filtering',
      'Middleware-based processing',
      'Dead letter queue for failed events'
    ],
    codeExample: `import { WebhookVerifier } from 'macro_api';

const verifier = new WebhookVerifier({
  stripe: { secret: process.env.STRIPE_WEBHOOK_SECRET },
  github: { secret: process.env.GITHUB_WEBHOOK_SECRET },
  slack: { secret: process.env.SLACK_WEBHOOK_SECRET }
});

// Express.js webhook handler
app.post('/webhooks/:service', async (req, res) => {
  try {
    const event = await verifier.verify(
      req.params.service,
      req.body,
      req.headers
    );
    
    // Process verified event
    await processWebhookEvent(event);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook verification failed:', error);
    res.status(400).send('Invalid signature');
  }
});`,
    category: 'production',
    importance: 'medium'
  },
  {
    id: 'rate-limiting',
    title: 'Advanced Rate Limiting',
    icon: 'Clock',
    description: 'Intelligent rate limiting that respects API quotas and automatically handles backoff strategies.',
    longDescription: 'Smart rate limiting system that automatically respects API rate limits, implements backoff strategies, and queues requests to maximize throughput while staying within limits.',
    benefits: [
      'Automatic rate limit detection',
      'Intelligent request queuing',
      'Per-endpoint rate limiting',
      'Adaptive backoff strategies',
      'Priority-based request handling',
      'Rate limit analytics'
    ],
    technicalDetails: [
      'Token bucket algorithm',
      'Sliding window rate limiting',
      'Distributed rate limiting with Redis',
      'Per-user and per-API key limits',
      'Rate limit header parsing',
      'Predictive rate limiting'
    ],
    codeExample: `import { RateLimiter } from 'macro_api';

const limiter = new RateLimiter({
  openai: { requestsPerMinute: 60, tokensPerMinute: 90000 },
  stripe: { requestsPerSecond: 25 },
  spotify: { requestsPerSecond: 10 }
});

// Automatic rate limiting
const client = new MacroAPIClient({
  rateLimiting: {
    enabled: true,
    strategy: 'adaptive',
    queueSize: 1000,
    priorityLevels: 3
  }
});

// High priority request
const urgentResult = await client.execute(
  () => api.criticalOperation(),
  { priority: 'high' }
);

// Get rate limit status
const status = await limiter.getStatus('openai');
console.log(\`Remaining requests: \${status.remaining}\`);
console.log(\`Reset time: \${status.resetTime}\`);`,
    category: 'production',
    importance: 'high'
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    icon: 'CheckCircle',
    description: 'Built-in metrics collection, logging, and observability features for production monitoring.',
    longDescription: 'Comprehensive monitoring and observability features including metrics collection, structured logging, distributed tracing, and integration with popular monitoring platforms.',
    benefits: [
      'Automatic metrics collection',
      'Structured logging',
      'Distributed tracing support',
      'Performance monitoring',
      'Error tracking and alerting',
      'Health check endpoints'
    ],
    technicalDetails: [
      'OpenTelemetry integration',
      'Prometheus metrics export',
      'Custom metrics and events',
      'Request/response logging',
      'Performance benchmarking',
      'Integration with APM tools'
    ],
    codeExample: `import { MacroAPIClient, MetricsCollector } from 'macro_api';

const client = new MacroAPIClient({
  monitoring: {
    enabled: true,
    metricsCollector: new MetricsCollector({
      exportInterval: 60000, // 1 minute
      labels: {
        service: 'my-app',
        environment: process.env.NODE_ENV
      }
    }),
    tracing: {
      serviceName: 'macro-api-client',
      jaegerEndpoint: process.env.JAEGER_ENDPOINT
    },
    logging: {
      level: 'info',
      format: 'json',
      includeRequestBody: false,
      includeResponseBody: false
    }
  }
});

// Automatic metrics collection
const result = await client.execute(
  () => gpt.chat('Hello'),
  {
    service: 'openai',
    method: 'chat',
    tags: { operation: 'user-query' }
  }
);

// Custom metrics
client.metrics.increment('custom.api.calls', {
  endpoint: '/chat',
  status: 'success'
});

// Health check endpoint
app.get('/health', (req, res) => {
  const health = client.getHealthStatus();
  res.status(health.status === 'healthy' ? 200 : 503).json(health);
});`,
    category: 'production',
    importance: 'high'
  },
  {
    id: 'plugin-system',
    title: 'Extensible Plugin System',
    icon: 'Layers',
    description: 'Flexible plugin architecture for extending functionality and integrating with custom services.',
    longDescription: 'Powerful plugin system that allows you to extend macro_api with custom functionality, middleware, and integrations. Create reusable plugins for common patterns and share them across projects.',
    benefits: [
      'Custom service integrations',
      'Middleware plugin support',
      'Reusable functionality components',
      'Third-party plugin ecosystem',
      'Hot-swappable plugins',
      'Plugin dependency management'
    ],
    technicalDetails: [
      'Hook-based plugin architecture',
      'Plugin lifecycle management',
      'Dependency injection system',
      'Configuration validation',
      'Plugin sandboxing',
      'Version compatibility checking'
    ],
    codeExample: `import { MacroAPIClient, Plugin } from 'macro_api';

// Custom plugin for logging
class LoggingPlugin extends Plugin {
  name = 'logging-plugin';
  version = '1.0.0';

  async onRequest(request: any) {
    console.log(\`[REQUEST] \${request.method} \${request.url}\`);
    return request;
  }

  async onResponse(response: any) {
    console.log(\`[RESPONSE] \${response.status} \${response.statusText}\`);
    return response;
  }

  async onError(error: any) {
    console.error(\`[ERROR] \${error.message}\`);
    throw error;
  }
}

// Analytics plugin
class AnalyticsPlugin extends Plugin {
  name = 'analytics-plugin';
  
  async onResponse(response: any, context: any) {
    await this.trackApiCall({
      service: context.service,
      method: context.method,
      duration: context.duration,
      success: !context.error
    });
    return response;
  }
}

// Use plugins
const client = new MacroAPIClient({
  plugins: [
    new LoggingPlugin(),
    new AnalyticsPlugin({
      endpoint: 'https://analytics.example.com',
      apiKey: process.env.ANALYTICS_KEY
    })
  ]
});`,
    category: 'developer-experience',
    importance: 'medium'
  }
];

export const featureCategories = [
  {
    id: 'core',
    name: 'Core Features',
    description: 'Essential functionality that makes macro_api powerful and easy to use',
    color: 'blue',
    features: features.filter(f => f.category === 'core')
  },
  {
    id: 'developer-experience',
    name: 'Developer Experience',
    description: 'Features that make development faster, easier, and more enjoyable',
    color: 'green',
    features: features.filter(f => f.category === 'developer-experience')
  },
  {
    id: 'production',
    name: 'Production Ready',
    description: 'Enterprise-grade features for reliable, scalable applications',
    color: 'purple',
    features: features.filter(f => f.category === 'production')
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Optimizations for speed, efficiency, and resource management',
    color: 'orange',
    features: features.filter(f => f.category === 'performance')
  }
];

export const keyMetrics = [
  {
    id: 'api-coverage',
    title: 'API Coverage',
    value: '15+',
    description: 'Major API services supported',
    trend: '+3 this quarter',
    icon: 'Globe'
  },
  {
    id: 'methods',
    title: 'Methods',
    value: '200+',
    description: 'Total API methods available',
    trend: '+50 this month',
    icon: 'Code'
  },
  {
    id: 'reliability',
    title: 'Reliability',
    value: '99.9%',
    description: 'Uptime with error handling',
    trend: 'Stable',
    icon: 'Shield'
  },
  {
    id: 'performance',
    title: 'Performance',
    value: '< 100ms',
    description: 'Average response overhead',
    trend: '-20ms this month',
    icon: 'Zap'
  },
  {
    id: 'type-safety',
    title: 'Type Safety',
    value: '100%',
    description: 'TypeScript coverage',
    trend: 'Full coverage',
    icon: 'FileCode'
  },
  {
    id: 'developer-satisfaction',
    title: 'Developer Satisfaction',
    value: '4.8/5',
    description: 'Average rating from users',
    trend: '+0.2 this quarter',
    icon: 'Heart'
  }
];

export const comparisonData = [
  {
    feature: 'TypeScript Support',
    macroApi: 'Full',
    competition1: 'Partial',
    competition2: 'None',
    advantage: 'Complete type safety and IntelliSense'
  },
  {
    feature: 'Error Handling',
    macroApi: 'Advanced',
    competition1: 'Basic',
    competition2: 'Manual',
    advantage: 'Automatic retries, circuit breakers, detailed context'
  },
  {
    feature: 'Caching',
    macroApi: 'Multi-tier',
    competition1: 'Memory only',
    competition2: 'None',
    advantage: 'Memory + Redis + Hybrid with intelligent invalidation'
  },
  {
    feature: 'API Coverage',
    macroApi: '15+ services',
    competition1: '5-8 services',
    competition2: '3-5 services',
    advantage: 'Comprehensive coverage of popular APIs'
  },
  {
    feature: 'Monitoring',
    macroApi: 'Built-in',
    competition1: 'Plugin',
    competition2: 'External',
    advantage: 'Native metrics, tracing, and observability'
  },
  {
    feature: 'Rate Limiting',
    macroApi: 'Intelligent',
    competition1: 'Basic',
    competition2: 'Manual',
    advantage: 'Adaptive algorithms with automatic queue management'
  }
];

export const useCaseExamples = [
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    description: 'Build a complete SaaS platform with user management, payments, and AI features',
    apis: ['Stripe', 'ChatGPT', 'SendGrid', 'Slack'],
    complexity: 'Advanced',
    timeToImplement: '2-4 weeks',
    features: [
      'User authentication and billing',
      'AI-powered features',
      'Email notifications',
      'Team collaboration'
    ]
  },
  {
    id: 'content-management',
    title: 'Content Management',
    description: 'Automate content creation, distribution, and analytics across multiple channels',
    apis: ['ChatGPT', 'YouTube', 'Notion', 'Slack'],
    complexity: 'Intermediate',
    timeToImplement: '1-2 weeks',
    features: [
      'AI content generation',
      'Multi-platform publishing',
      'Analytics dashboard',
      'Team notifications'
    ]
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation',
    description: 'Automate order processing, inventory management, and customer communications',
    apis: ['Stripe', 'PayPal', 'SendGrid', 'Notion'],
    complexity: 'Intermediate',
    timeToImplement: '1-3 weeks',
    features: [
      'Multi-payment processing',
      'Automated email campaigns',
      'Inventory tracking',
      'Customer analytics'
    ]
  },
  {
    id: 'devops-pipeline',
    title: 'DevOps Pipeline',
    description: 'Complete CI/CD pipeline with deployment automation and monitoring',
    apis: ['GitHub', 'Vercel', 'Docker Hub', 'Slack', 'S3'],
    complexity: 'Advanced',
    timeToImplement: '2-5 weeks',
    features: [
      'Automated deployments',
      'Container management',
      'Asset storage',
      'Team notifications'
    ]
  },
  {
    id: 'gaming-analytics',
    title: 'Gaming Analytics',
    description: 'Track player statistics, team performance, and generate leaderboards',
    apis: ['Valorant', 'Football', 'Notion', 'Slack'],
    complexity: 'Beginner',
    timeToImplement: '3-7 days',
    features: [
      'Player stat tracking',
      'Automated leaderboards',
      'Performance analytics',
      'Achievement notifications'
    ]
  },
  {
    id: 'music-platform',
    title: 'Music Platform',
    description: 'Build music discovery and playlist management features',
    apis: ['Spotify', 'ChatGPT', 'Notion'],
    complexity: 'Intermediate',
    timeToImplement: '1-2 weeks',
    features: [
      'Music search and discovery',
      'AI-powered recommendations',
      'Playlist management',
      'User preferences storage'
    ]
  }
];

export const integrationGuides = [
  {
    id: 'next-js',
    title: 'Next.js Integration',
    description: 'Complete guide for using macro_api in Next.js applications',
    difficulty: 'Beginner',
    timeToComplete: '15 minutes',
    steps: [
      'Install macro_api and dependencies',
      'Configure environment variables',
      'Set up API routes',
      'Implement client-side usage',
      'Add error handling'
    ]
  },
  {
    id: 'express-js',
    title: 'Express.js Backend',
    description: 'Build a robust backend API using Express.js and macro_api',
    difficulty: 'Intermediate',
    timeToComplete: '30 minutes',
    steps: [
      'Set up Express server',
      'Configure middleware',
      'Implement API endpoints',
      'Add authentication',
      'Set up webhook handling'
    ]
  },
  {
    id: 'serverless',
    title: 'Serverless Functions',
    description: 'Deploy macro_api in serverless environments',
    difficulty: 'Intermediate',
    timeToComplete: '20 minutes',
    steps: [
      'Configure for serverless',
      'Optimize cold starts',
      'Handle environment variables',
      'Implement caching strategies',
      'Deploy and monitor'
    ]
  },
  {
    id: 'docker',
    title: 'Docker Deployment',
    description: 'Containerize applications using macro_api',
    difficulty: 'Advanced',
    timeToComplete: '45 minutes',
    steps: [
      'Create Dockerfile',
      'Configure environment',
      'Set up health checks',
      'Implement logging',
      'Deploy with orchestration'
    ]
  }
];

export default features;