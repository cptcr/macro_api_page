import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Database, Zap, Shield, Settings, Clock, BarChart3, RefreshCw, Sparkles, ArrowRight, Code, CheckCircle } from 'lucide-react';

const CoreCacheDocs: React.FC = () => {
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
            <Database className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Core Infrastructure
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <Database className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Cache System
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Intelligent caching system with multiple providers and advanced features
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The cache system (<code className="glass px-2 py-1 rounded text-sm font-mono text-primary">src/core/cache.ts</code>) provides a powerful and flexible caching solution for macro_api. It supports multiple cache providers, intelligent eviction strategies, and comprehensive statistics tracking.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Memory Cache</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Redis Support</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Hybrid Mode</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">LRU Eviction</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Multiple Providers</h4>
                  <p className="text-sm text-muted-foreground">Memory, Redis, and hybrid caching options</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">LRU Eviction</h4>
                  <p className="text-sm text-muted-foreground">Intelligent cache eviction with LRU algorithm</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Statistics</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive cache performance metrics</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">TTL Support</h4>
                  <p className="text-sm text-muted-foreground">Configurable time-to-live for cache entries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Configuration</h2>
          
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              CacheConfig Interface
            </h3>
            
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
          </div>
        </div>

        {/* Memory Cache Provider Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Memory Cache Provider</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-6">
            The <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">MemoryCacheProvider</code> offers fast in-memory caching with LRU eviction.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Basic Usage
            </h3>
            
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
          </div>
        </div>

        {/* Redis Cache Provider Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Redis Cache Provider</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-6">
            The <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">RedisCacheProvider</code> provides distributed caching using Redis.
          </p>

          <InfoBox type="info" title="Redis Dependency">
            The Redis cache provider requires the <code>ioredis</code> package. Install it with: <code>npm install ioredis</code>
          </InfoBox>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Redis Configuration
            </h3>
            
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
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices</h2>

          <InfoBox type="tip" title="Performance Tips">
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use memory cache for frequently accessed, small data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use Redis cache for shared data across multiple instances</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use hybrid cache for the best of both worlds</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monitor hit rates and adjust TTL values accordingly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement proper error handling for cache failures</span>
              </li>
            </ul>
          </InfoBox>

          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Recommended Configurations
            </h3>
            
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
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=core-utils" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Error Handling System</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn about the robust error handling system</p>
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
                  <p className="text-muted-foreground text-sm mb-3">See caching in action with real APIs</p>
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

export default CoreCacheDocs;