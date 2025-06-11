import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Database, Zap, Shield, Settings, Clock, BarChart3, RefreshCw } from 'lucide-react';

const CoreCacheDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Database className="h-10 w-10 mr-4 text-blue-600 dark:text-blue-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Cache System</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Intelligent caching system with multiple providers and advanced features
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Memory Cache
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Redis Support
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Hybrid Mode
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            LRU Eviction
          </span>
        </div>
      </div>

      ## Overview

      The cache system (`src/core/cache.ts`) provides a powerful and flexible caching solution for macro_api. It supports multiple cache providers, intelligent eviction strategies, and comprehensive statistics tracking.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Multiple Providers</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Memory, Redis, and hybrid caching options</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Shield className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">LRU Eviction</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Intelligent cache eviction with LRU algorithm</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <BarChart3 className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Statistics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive cache performance metrics</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Clock className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">TTL Support</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Configurable time-to-live for cache entries</p>
        </div>
      </div>

      ## Configuration

      ### CacheConfig Interface

      <CodeExampleSwitcher
        typescript={`interface CacheConfig {
  type: 'memory' | 'redis' | 'hybrid';
  ttl: number; // Time to live in seconds
  maxSize?: number; // Memory cache size limit
  redis?: {
    url: string;
    keyPrefix?: string;
    cluster?: boolean;
    password?: string;
    db?: number;
  };
  compression?: boolean;
  serialization?: 'json' | 'msgpack';
}`}
        javascript={`// CacheConfig structure for JavaScript
const cacheConfig = {
  type: 'memory', // or 'redis' or 'hybrid'
  ttl: 3600, // Time to live in seconds
  maxSize: 1000, // Memory cache size limit
  redis: {
    url: 'redis://localhost:6379',
    keyPrefix: 'myapp',
    cluster: false,
    password: 'optional-password',
    db: 0
  },
  compression: true,
  serialization: 'json' // or 'msgpack'
};`}
        title="Cache configuration structure"
      />

      ## Memory Cache Provider

      The `MemoryCacheProvider` offers fast in-memory caching with LRU eviction.

      ### Basic Usage

      <CodeExampleSwitcher
        typescript={`import { MemoryCacheProvider } from 'macro_api';

// Initialize with max size and default TTL
const cache = new MemoryCacheProvider(1000, 3600); // 1000 items, 1 hour TTL

// Set cache entry
await cache.set('user:123', { name: 'John', age: 30 }, 1800); // 30 min TTL

// Get cache entry
const user = await cache.get<{ name: string; age: number }>('user:123');
if (user) {
  console.log(\`User: \${user.name}, Age: \${user.age}\`);
}

// Check if key exists
const exists = await cache.has('user:123');
console.log('User exists in cache:', exists);

// Delete specific key
await cache.delete('user:123');

// Clear all cache
await cache.clear();

// Get cache statistics
const stats = await cache.getStats();
console.log(\`Cache hit rate: \${(stats.hitRate * 100).toFixed(2)}%\`);
console.log(\`Cache size: \${stats.size}\`);
console.log(\`Total hits: \${stats.hits}\`);
console.log(\`Total misses: \${stats.misses}\`);

// Close cache (cleanup)
await cache.close();`}
        javascript={`const { MemoryCacheProvider } = require('macro_api');

// Initialize with max size and default TTL
const cache = new MemoryCacheProvider(1000, 3600); // 1000 items, 1 hour TTL

// Set cache entry
await cache.set('user:123', { name: 'John', age: 30 }, 1800); // 30 min TTL

// Get cache entry
const user = await cache.get('user:123');
if (user) {
  console.log(\`User: \${user.name}, Age: \${user.age}\`);
}

// Check if key exists
const exists = await cache.has('user:123');
console.log('User exists in cache:', exists);

// Delete specific key
await cache.delete('user:123');

// Clear all cache
await cache.clear();

// Get cache statistics
const stats = await cache.getStats();
console.log(\`Cache hit rate: \${(stats.hitRate * 100).toFixed(2)}%\`);
console.log(\`Cache size: \${stats.size}\`);

// Close cache (cleanup)
await cache.close();`}
        title="Memory cache basic operations"
      />

      ## Redis Cache Provider

      The `RedisCacheProvider` provides distributed caching using Redis.

      <InfoBox type="info" title="Redis Dependency">
        The Redis cache provider requires the `ioredis` package. Install it with: `npm install ioredis`
      </InfoBox>

      ### Redis Configuration

      <CodeExampleSwitcher
        typescript={`import { RedisCacheProvider } from 'macro_api';

// Initialize Redis cache
const redisCache = new RedisCacheProvider({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  keyPrefix: 'macro_api', // Optional prefix for all keys
  password: process.env.REDIS_PASSWORD, // Optional
  db: 0, // Redis database number
  cluster: false // Set to true for Redis cluster
}, 3600); // Default TTL: 1 hour

// Cache operations (same interface as memory cache)
await redisCache.set('session:abc123', {
  userId: 456,
  email: 'user@example.com',
  loginTime: new Date().toISOString()
}, 7200); // 2 hours TTL

const session = await redisCache.get('session:abc123');
console.log('Session data:', session);

// Redis-specific: Key will be prefixed as 'macro_api:session:abc123'`}
        javascript={`const { RedisCacheProvider } = require('macro_api');

// Initialize Redis cache
const redisCache = new RedisCacheProvider({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  keyPrefix: 'macro_api',
  password: process.env.REDIS_PASSWORD,
  db: 0,
  cluster: false
}, 3600); // Default TTL: 1 hour

// Cache operations
await redisCache.set('session:abc123', {
  userId: 456,
  email: 'user@example.com',
  loginTime: new Date().toISOString()
}, 7200); // 2 hours TTL

const session = await redisCache.get('session:abc123');
console.log('Session data:', session);`}
        title="Redis cache configuration and usage"
      />

      ## Hybrid Cache Provider

      The `HybridCacheProvider` combines memory and Redis caching for optimal performance.

      <CodeExampleSwitcher
        typescript={`import { HybridCacheProvider } from 'macro_api';

// Initialize hybrid cache (L1: Memory, L2: Redis)
const hybridCache = new HybridCacheProvider(
  500, // Memory cache max size
  {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    keyPrefix: 'hybrid_cache'
  },
  3600 // Default TTL: 1 hour
);

// How it works:
// 1. GET: Check L1 (memory) first, then L2 (Redis) if not found
// 2. SET: Store in both L1 and L2
// 3. If L2 (Redis) fails, L1 (memory) continues to work

await hybridCache.set('api:response:123', {
  data: 'expensive computation result',
  timestamp: Date.now()
});

// This will be very fast (from memory) on subsequent calls
const cachedResponse = await hybridCache.get('api:response:123');

// Get combined statistics from both caches
const stats = await hybridCache.getStats();
console.log('Combined cache stats:', {
  totalHits: stats.hits,
  totalSize: stats.size,
  hitRate: \`\${(stats.hitRate * 100).toFixed(2)}%\`
});`}
        javascript={`const { HybridCacheProvider } = require('macro_api');

// Initialize hybrid cache
const hybridCache = new HybridCacheProvider(
  500, // Memory cache max size
  {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    keyPrefix: 'hybrid_cache'
  },
  3600 // Default TTL
);

// Set data (stored in both memory and Redis)
await hybridCache.set('api:response:123', {
  data: 'expensive computation result',
  timestamp: Date.now()
});

// Get data (from memory if available, Redis as fallback)
const cachedResponse = await hybridCache.get('api:response:123');

// Combined statistics
const stats = await hybridCache.getStats();
console.log('Hit rate:', \`\${(stats.hitRate * 100).toFixed(2)}%\`);`}
        title="Hybrid cache for best performance"
      />

      ## Cache Manager

      The `CacheManager` class provides a unified interface for working with different cache providers.

      <CodeExampleSwitcher
        typescript={`import { CacheManager } from 'macro_api';

// Initialize with memory cache
const cache = new CacheManager({
  type: 'memory',
  ttl: 3600,
  maxSize: 1000
});

// Initialize with Redis
const redisCache = new CacheManager({
  type: 'redis',
  ttl: 7200,
  redis: {
    url: process.env.REDIS_URL!,
    keyPrefix: 'app_cache'
  }
});

// Initialize with hybrid
const hybridCache = new CacheManager({
  type: 'hybrid',
  ttl: 3600,
  maxSize: 500,
  redis: {
    url: process.env.REDIS_URL!,
    keyPrefix: 'hybrid_app'
  }
});

// Generate cache keys
const cacheKey = cache.generateKey('userService', 'getProfile', {
  userId: 123,
  includeDetails: true
});
console.log('Generated key:', cacheKey); // 'macro_api:userService:getProfile:a1b2c3d4'

// Cached function execution
const result = await cache.cached(
  'expensive_operation',
  async () => {
    // Expensive operation here
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { result: 'computed value', timestamp: Date.now() };
  },
  1800 // Cache for 30 minutes
);

// Memoize a function
const memoizedFunction = cache.memoize(
  async (userId: number, includeStats: boolean) => {
    // Expensive database query
    return await getUserProfile(userId, includeStats);
  },
  (userId: number, includeStats: boolean) => \`user:\${userId}:\${includeStats}\`,
  3600 // Cache for 1 hour
);

// Use memoized function
const profile1 = await memoizedFunction(123, true); // Executes function
const profile2 = await memoizedFunction(123, true); // Returns cached result

// Cache warming
await cache.warmUp([
  { key: 'config:app', value: { theme: 'dark', lang: 'en' }, ttl: 86400 },
  { key: 'config:features', value: ['chat', 'notifications'], ttl: 86400 }
]);`}
        javascript={`const { CacheManager } = require('macro_api');

// Initialize cache manager
const cache = new CacheManager({
  type: 'memory',
  ttl: 3600,
  maxSize: 1000
});

// Generate cache keys
const cacheKey = cache.generateKey('userService', 'getProfile', {
  userId: 123,
  includeDetails: true
});

// Cached function execution
const result = await cache.cached(
  'expensive_operation',
  async () => {
    // Expensive operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { result: 'computed value', timestamp: Date.now() };
  },
  1800 // 30 minutes
);

// Memoize a function
const memoizedFunction = cache.memoize(
  async (userId, includeStats) => {
    return await getUserProfile(userId, includeStats);
  },
  (userId, includeStats) => \`user:\${userId}:\${includeStats}\`,
  3600 // 1 hour
);

const profile = await memoizedFunction(123, true);`}
        title="Cache Manager unified interface"
      />

      ## Cache Statistics

      All cache providers support comprehensive statistics tracking:

      <CodeExampleSwitcher
        typescript={`// Get detailed cache statistics
const stats = await cache.getStats();

interface CacheStats {
  hits: number;        // Number of successful cache retrievals
  misses: number;      // Number of cache misses
  sets: number;        // Number of cache writes
  deletes: number;     // Number of cache deletions
  evictions: number;   // Number of items evicted (memory cache only)
  size: number;        // Current number of items in cache
  hitRate: number;     // Hit rate as decimal (0.0 to 1.0)
}

console.log('Cache Performance Report:');
console.log(\`Hit Rate: \${(stats.hitRate * 100).toFixed(2)}%\`);
console.log(\`Total Requests: \${stats.hits + stats.misses}\`);
console.log(\`Cache Size: \${stats.size} items\`);
console.log(\`Evictions: \${stats.evictions}\`);

// Monitor cache performance
const monitorCache = (cache: CacheManager) => {
  setInterval(async () => {
    const stats = await cache.getStats();
    if (stats.hitRate < 0.8) {
      console.warn('Low cache hit rate detected:', stats.hitRate);
    }
    if (stats.size > 900) {
      console.warn('Cache approaching size limit:', stats.size);
    }
  }, 60000); // Check every minute
};`}
        javascript={`// Get cache statistics
const stats = await cache.getStats();

console.log('Cache Performance:');
console.log(\`Hit Rate: \${(stats.hitRate * 100).toFixed(2)}%\`);
console.log(\`Total Requests: \${stats.hits + stats.misses}\`);
console.log(\`Cache Size: \${stats.size} items\`);

// Monitor cache performance
const monitorCache = (cache) => {
  setInterval(async () => {
    const stats = await cache.getStats();
    if (stats.hitRate < 0.8) {
      console.warn('Low cache hit rate:', stats.hitRate);
    }
  }, 60000); // Check every minute
};`}
        title="Cache statistics and monitoring"
      />

      ## Advanced Features

      ### Cache Invalidation

      <CodeExampleSwitcher
        typescript={`// Pattern-based invalidation (simplified implementation)
await cache.invalidatePattern('user:*'); // Invalidate all user-related cache

// Selective invalidation based on tags or conditions
const invalidateUserCache = async (userId: number) => {
  const patterns = [
    \`user:\${userId}:*\`,
    \`profile:\${userId}\`,
    \`permissions:\${userId}\`
  ];
  
  for (const pattern of patterns) {
    await cache.invalidatePattern(pattern);
  }
};

// Time-based invalidation
const invalidateExpiredEntries = async () => {
  // This is handled automatically by TTL, but you can also manually clean up
  await cache.clear(); // Clear all if needed
};`}
        javascript={`// Cache invalidation patterns
await cache.invalidatePattern('user:*');

const invalidateUserCache = async (userId) => {
  const patterns = [
    \`user:\${userId}:*\`,
    \`profile:\${userId}\`,
    \`permissions:\${userId}\`
  ];
  
  for (const pattern of patterns) {
    await cache.invalidatePattern(pattern);
  }
};`}
        title="Cache invalidation strategies"
      />

      ### Error Handling and Resilience

      <CodeExampleSwitcher
        typescript={`// Graceful degradation when cache fails
const robustCacheGet = async <T>(key: string, fallback: () => Promise<T>): Promise<T> => {
  try {
    const cached = await cache.get<T>(key);
    if (cached !== null) {
      return cached;
    }
  } catch (error) {
    console.warn('Cache get failed, using fallback:', error);
  }
  
  // Execute fallback and try to cache the result
  const result = await fallback();
  
  try {
    await cache.set(key, result, 300); // Cache for 5 minutes
  } catch (error) {
    console.warn('Failed to cache result:', error);
    // Continue without caching
  }
  
  return result;
};

// Usage with error handling
const getUserData = async (userId: number) => {
  return await robustCacheGet(
    \`user:\${userId}\`,
    () => fetchUserFromDatabase(userId)
  );
};

// Cache circuit breaker pattern
class CacheCircuitBreaker {
  private failures = 0;
  private lastFailure = 0;
  private readonly maxFailures = 5;
  private readonly resetTimeout = 60000; // 1 minute

  async execute<T>(operation: () => Promise<T>): Promise<T | null> {
    if (this.isOpen()) {
      console.warn('Cache circuit breaker is open, skipping cache');
      return null;
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private isOpen(): boolean {
    return this.failures >= this.maxFailures && 
           (Date.now() - this.lastFailure) < this.resetTimeout;
  }

  private onSuccess(): void {
    this.failures = 0;
  }

  private onFailure(): void {
    this.failures++;
    this.lastFailure = Date.now();
  }
}`}
        javascript={`// Graceful cache error handling
const robustCacheGet = async (key, fallback) => {
  try {
    const cached = await cache.get(key);
    if (cached !== null) {
      return cached;
    }
  } catch (error) {
    console.warn('Cache failed, using fallback:', error);
  }
  
  const result = await fallback();
  
  try {
    await cache.set(key, result, 300);
  } catch (error) {
    console.warn('Failed to cache result:', error);
  }
  
  return result;
};

// Usage
const getUserData = async (userId) => {
  return await robustCacheGet(
    \`user:\${userId}\`,
    () => fetchUserFromDatabase(userId)
  );
};`}
        title="Error handling and resilience patterns"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use memory cache for frequently accessed, small data
        - Use Redis cache for shared data across multiple instances
        - Use hybrid cache for the best of both worlds
        - Monitor hit rates and adjust TTL values accordingly
        - Implement proper error handling for cache failures
      </InfoBox>

      ### Recommended Configurations

      <CodeExampleSwitcher
        typescript={`// Development environment
const devCache = new CacheManager({
  type: 'memory',
  ttl: 300, // 5 minutes
  maxSize: 100
});

// Production environment - Single instance
const prodCache = new CacheManager({
  type: 'memory',
  ttl: 3600, // 1 hour
  maxSize: 5000
});

// Production environment - Multiple instances
const distributedCache = new CacheManager({
  type: 'redis',
  ttl: 7200, // 2 hours
  redis: {
    url: process.env.REDIS_URL!,
    keyPrefix: 'prod_api',
    cluster: true // Use Redis cluster in production
  }
});

// High-performance production setup
const highPerfCache = new CacheManager({
  type: 'hybrid',
  ttl: 3600,
  maxSize: 2000, // L1 cache size
  redis: {
    url: process.env.REDIS_URL!,
    keyPrefix: 'hp_cache',
    cluster: true
  },
  compression: true, // Enable compression for large objects
  serialization: 'msgpack' // Faster than JSON
});`}
        javascript={`// Environment-specific configurations
const devCache = new CacheManager({
  type: 'memory',
  ttl: 300,
  maxSize: 100
});

const prodCache = new CacheManager({
  type: 'redis',
  ttl: 3600,
  redis: {
    url: process.env.REDIS_URL,
    keyPrefix: 'prod_api'
  }
});

const highPerfCache = new CacheManager({
  type: 'hybrid',
  ttl: 3600,
  maxSize: 2000,
  redis: {
    url: process.env.REDIS_URL,
    keyPrefix: 'hp_cache'
  }
});`}
        title="Environment-specific cache configurations"
      />

      ## Cleanup and Resource Management

      <InfoBox type="warning" title="Important">
        Always call `close()` on cache instances when shutting down your application to ensure proper cleanup of resources and connections.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`// Proper cleanup
process.on('SIGTERM', async () => {
  console.log('Shutting down, cleaning up cache...');
  await cache.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('Interrupted, cleaning up cache...');
  await cache.close();
  process.exit(0);
});

// In Express.js
app.on('close', async () => {
  await cache.close();
});

// In Next.js API routes, cleanup is automatic
// But for long-running operations, consider:
const cleanup = async () => {
  await cache.close();
};

// Register cleanup function
if (typeof process !== 'undefined') {
  process.on('beforeExit', cleanup);
}`}
        javascript={`// Cleanup handlers
process.on('SIGTERM', async () => {
  console.log('Shutting down...');
  await cache.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await cache.close();
  process.exit(0);
});

// Express.js cleanup
app.on('close', async () => {
  await cache.close();
});`}
        title="Resource cleanup and graceful shutdown"
      />

      ## Next Steps

      - **[Error Handling System](./error-handling)** - Learn about the robust error handling system
      - **[Retry Logic](./retry-logic)** - Understand automatic retry mechanisms
      - **[Circuit Breaker](./circuit-breaker)** - Implement circuit breaker patterns
      - **[API Integration Examples](./chatgpt)** - See caching in action with real APIs
    </div>
  );
};

export default CoreCacheDocs;