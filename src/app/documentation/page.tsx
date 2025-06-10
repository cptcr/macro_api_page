// src/app/documentation/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { 
  Search, 
  Book, 
  ChevronRight, 
  ChevronDown, 
  Copy, 
  Check, 
  ExternalLink,
  Code,
  Package,
  Zap,
  Shield,
  Layers,
  Database,
  MessageSquare,
  Music,
  CreditCard,
  FileText,
  Dribbble,
  DollarSign,
  Brain,
  Target,
  Youtube,
  Github,
  Slack,
  Mail,
  Cloud,
  Container,
  Server,
  Settings,
  AlertCircle,
  Info,
  CheckCircle,
  Home,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedSections, setExpandedSections] = useState({
    'quick-start': true,
    'api-classes': true,
    'core-features': true,
    'production-apis': true
  });
  const [copiedCode, setCopiedCode] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filteredSections, setFilteredSections] = useState([]);

  // Navigation structure
  const navigation = [
    {
      id: 'quick-start',
      title: 'Quick Start',
      icon: Zap,
      items: [
        { id: 'getting-started', title: 'Getting Started', icon: Home },
        { id: 'installation', title: 'Installation', icon: Package },
        { id: 'basic-usage', title: 'Basic Usage', icon: Code },
        { id: 'authentication', title: 'Authentication', icon: Shield }
      ]
    },
    {
      id: 'core-features',
      title: 'Core Features',
      icon: Layers,
      items: [
        { id: 'error-handling', title: 'Error Handling', icon: AlertCircle },
        { id: 'caching', title: 'Caching System', icon: Database },
        { id: 'retry-logic', title: 'Retry Logic', icon: Settings },
        { id: 'circuit-breaker', title: 'Circuit Breaker', icon: Shield }
      ]
    },
    {
      id: 'api-classes',
      title: 'API Classes',
      icon: Layers,
      items: [
        { id: 'chatgpt', title: 'ChatGPT/OpenAI', icon: MessageSquare },
        { id: 'spotify', title: 'Spotify API', icon: Music },
        { id: 'stripe', title: 'Stripe API', icon: CreditCard },
        { id: 'notion', title: 'Notion API', icon: FileText },
        { id: 'football', title: 'Football API', icon: Dribbble },
        { id: 'paypal', title: 'PayPal API', icon: DollarSign },
        { id: 'deepseek', title: 'DeepSeek API', icon: Brain },
        { id: 'valorant', title: 'Valorant API', icon: Target },
        { id: 'youtube', title: 'YouTube Notifications', icon: Youtube },
        { id: 'github', title: 'GitHub API', icon: Github }
      ]
    },
    {
      id: 'production-apis',
      title: 'Production APIs',
      icon: Server,
      items: [
        { id: 'slack', title: 'Slack API', icon: Slack },
        { id: 'sendgrid', title: 'SendGrid API', icon: Mail },
        { id: 'vercel', title: 'Vercel API', icon: Cloud },
        { id: 's3', title: 'AWS S3 API', icon: Database },
        { id: 'dockerhub', title: 'Docker Hub API', icon: Container }
      ]
    }
  ];

  // Filter sections based on search
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSections(navigation);
      return;
    }

    const filtered = navigation.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);

    setFilteredSections(filtered);
  }, [searchTerm]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const CodeBlock = ({ code, language = 'typescript', title }) => (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700 my-6">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <button
            onClick={() => copyToClipboard(code)}
            className="flex items-center text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded"
          >
            {copiedCode === code ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );

  const InfoBox = ({ type = 'info', title, children }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
      success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
      error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
    };

    const icons = {
      info: Info,
      warning: AlertCircle,
      success: CheckCircle,
      error: AlertCircle
    };

    const Icon = icons[type];

    return (
      <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
        <div className="flex items-start">
          <Icon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            {title && <div className="font-semibold mb-1">{title}</div>}
            <div className="text-sm">{children}</div>
          </div>
        </div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {(filteredSections.length > 0 ? filteredSections : navigation).map((section) => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <section.icon className="h-4 w-4 mr-2" />
              {section.title}
              {expandedSections[section.id] ? (
                <ChevronDown className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronRight className="h-4 w-4 ml-auto" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="ml-6 mt-2 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Getting Started with macro_api</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A comprehensive TypeScript/JavaScript library for unified API integrations with production-ready features.
            </p>
            
            <InfoBox type="info" title="What is macro_api?">
              macro_api is a powerful, production-ready library that provides unified interfaces for popular APIs, 
              complete with error handling, caching, retry logic, and TypeScript support.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-semibold mb-1">Production Ready</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Built-in error handling, retry logic, and circuit breakers.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-semibold mb-1">TypeScript Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full TypeScript definitions for all APIs and methods.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Database className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-semibold mb-1">Intelligent Caching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Memory, Redis, and hybrid caching strategies.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Layers className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-semibold mb-1">Unified Interface</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consistent patterns across all API integrations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Quick Example</h2>
            <CodeBlock
              title="Basic Usage"
              code={`import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize clients with your API keys
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Use them with consistent patterns
const response = await gpt.chat('Hello, world!');
const user = await spotify.getCurrentUser();
const customer = await stripe.createCustomer({ email: 'user@example.com' });`}
            />
          </div>
        );

      case 'installation':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Installation</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Package Manager</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Install macro_api using your preferred package manager:
            </p>

            <CodeBlock
              title="npm"
              code="npm install macro_api"
              language="bash"
            />

            <CodeBlock
              title="yarn"
              code="yarn add macro_api"
              language="bash"
            />

            <CodeBlock
              title="pnpm"
              code="pnpm add macro_api"
              language="bash"
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Environment Setup</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create a <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">.env</code> file to store your API credentials:
            </p>

            <CodeBlock
              title=".env"
              code={`# OpenAI/ChatGPT
OPENAI_API_KEY=your_openai_api_key

# Spotify
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# And so on for other services...`}
              language="bash"
            />

            <InfoBox type="warning" title="Security Note">
              Never commit API keys to version control. Use environment variables or secure key management systems.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">TypeScript Configuration</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For TypeScript projects, ensure your <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">tsconfig.json</code> includes:
            </p>

            <CodeBlock
              title="tsconfig.json"
              code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
              language="json"
            />
          </div>
        );

      case 'basic-usage':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Basic Usage</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Import and Initialize</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start by importing the API classes you need and initializing them with your credentials:
            </p>

            <CodeBlock
              title="Basic Setup"
              code={`import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize with environment variables
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Making API Calls</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All API methods return Promises and can be used with async/await or .then():
            </p>

            <CodeBlock
              title="Async/Await Pattern"
              code={`async function example() {
  try {
    // ChatGPT example
    const chatResponse = await gpt.chat(
      'Explain quantum computing in simple terms',
      'You are a helpful assistant'
    );
    console.log(chatResponse);

    // Stripe example
    const customer = await stripe.createCustomer({
      email: 'customer@example.com',
      name: 'John Doe'
    });
    console.log('Customer created:', customer.id);

    // Spotify example (requires OAuth)
    const user = await spotify.getCurrentUser();
    console.log('Current user:', user.display_name);
    
  } catch (error) {
    console.error('API Error:', error.message);
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Error Handling</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              macro_api provides comprehensive error handling with detailed error information:
            </p>

            <CodeBlock
              title="Error Handling"
              code={`import { 
  MacroApiError, 
  AuthenticationError, 
  RateLimitError, 
  NotFoundError 
} from 'macro_api';

async function handleErrors() {
  try {
    const result = await gpt.chat('Hello');
  } catch (error) {
    if (error instanceof AuthenticationError) {
      console.error('Invalid API key');
    } else if (error instanceof RateLimitError) {
      console.error('Rate limit exceeded, retry after:', error.retryAfter);
    } else if (error instanceof NotFoundError) {
      console.error('Resource not found');
    } else if (error instanceof MacroApiError) {
      console.error('API Error:', error.code, error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
}`}
            />

            <InfoBox type="info" title="Consistent Error Handling">
              All API classes throw consistent error types, making it easy to handle errors uniformly across your application.
            </InfoBox>
          </div>
        );

      case 'authentication':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Authentication</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Different APIs use different authentication methods. macro_api handles these automatically once configured.
            </p>

            <h2 className="text-2xl font-semibold mb-4">API Key Authentication</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Most APIs use simple API key authentication:
            </p>

            <CodeBlock
              title="API Key Examples"
              code={`// OpenAI/ChatGPT
const gpt = new ChatGPT({
  apiKey: 'sk-...'
});

// Stripe
const stripe = new StripeAPI({
  secretKey: 'sk_test_...'
});

// SendGrid
const sendgrid = new SendGridAPI({
  apiKey: 'SG...'
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">OAuth 2.0 Authentication</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For OAuth-based APIs like Spotify, the process involves multiple steps:
            </p>

            <CodeBlock
              title="OAuth Flow"
              code={`const spotify = new SpotifyAPI({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  redirectUri: 'http://localhost:3000/callback'
});

// Step 1: Get authorization URL
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'playlist-read-private'
]);

// Redirect user to authUrl...

// Step 2: Exchange code for token (in your callback handler)
async function handleCallback(code) {
  await spotify.exchangeCode(code);
  
  // Now you can make authenticated requests
  const user = await spotify.getCurrentUser();
  console.log(user);
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Token Management</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              macro_api automatically handles token refresh for supported APIs:
            </p>

            <CodeBlock
              title="Automatic Token Refresh"
              code={`// Tokens are automatically refreshed when needed
const user = await spotify.getCurrentUser(); // Works seamlessly

// Manual token management (if needed)
spotify.setAccessToken(token, expiresIn, refreshToken);

// Check if token needs refresh
if (spotify.needsTokenRefresh()) {
  await spotify.refreshAccessToken();
}`}
            />

            <InfoBox type="success" title="Automatic Handling">
              macro_api automatically handles token refresh, expiration, and retry logic for OAuth-based APIs.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Environment Variables</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Best practice is to store credentials in environment variables:
            </p>

            <CodeBlock
              title="Environment Setup"
              code={`// .env file
OPENAI_API_KEY=sk-...
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
STRIPE_SECRET_KEY=sk_test_...
SLACK_BOT_TOKEN=xoxb-...
SENDGRID_API_KEY=SG...

// In your application
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});`}
            />
          </div>
        );

      case 'error-handling':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Error Handling</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              macro_api provides a comprehensive error handling system with specific error types, 
              automatic retries, and detailed error information.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Error Types</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All errors inherit from the base <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">MacroApiError</code> class:
            </p>

            <CodeBlock
              title="Error Types"
              code={`import {
  MacroApiError,           // Base error class
  AuthenticationError,     // 401 - Invalid credentials
  PermissionError,         // 403 - Insufficient permissions
  NotFoundError,          // 404 - Resource not found
  RateLimitError,         // 429 - Rate limit exceeded
  ValidationError,        // 400 - Invalid input
  ServiceUnreachableError, // 503 - Service down
  TimeoutError,           // 408 - Request timeout
  NetworkError,           // Network issues
  ConflictError,          // 409 - Resource conflict
  QuotaExceededError      // Quota/billing limits
} from 'macro_api';`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Error Handling Patterns</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Use specific error types to handle different scenarios:
            </p>

            <CodeBlock
              title="Comprehensive Error Handling"
              code={`async function robustApiCall() {
  try {
    const result = await gpt.chat('Hello, world!');
    return result;
  } catch (error) {
    if (error instanceof AuthenticationError) {
      console.error('Authentication failed - check your API key');
      // Redirect to login or refresh credentials
    } else if (error instanceof RateLimitError) {
      console.warn(\`Rate limited. Retry after: \${error.retryAfter} seconds\`);
      // Implement exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, error.retryAfter * 1000)
      );
      return robustApiCall(); // Retry
    } else if (error instanceof ValidationError) {
      console.error('Invalid input:', error.issues);
      error.issues.forEach(issue => {
        console.error(\`Field \${issue.field}: \${issue.message}\`);
      });
    } else if (error instanceof ServiceUnreachableError) {
      console.error('Service temporarily unavailable');
      // Use cached data or fallback service
    } else if (error instanceof MacroApiError) {
      console.error(\`API Error [\${error.code}]: \${error.message}\`);
      console.error('Service:', error.service);
      console.error('Status:', error.statusCode);
      console.error('Details:', error.details);
    } else {
      console.error('Unexpected error:', error);
    }
    
    throw error; // Re-throw if you want calling code to handle it
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Global Error Handler</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Use the global error handler for consistent error processing and metrics:
            </p>

            <CodeBlock
              title="Global Error Handler"
              code={`import { ErrorHandler } from 'macro_api';

const errorHandler = ErrorHandler.getInstance();

async function makeApiCall() {
  try {
    return await gpt.chat('Hello');
  } catch (error) {
    // Convert any error to MacroApiError and log metrics
    const standardizedError = errorHandler.handle(error, {
      service: 'openai',
      operation: 'chat'
    });
    
    throw standardizedError;
  }
}

// Get error statistics
const stats = errorHandler.getErrorStats();
console.log('Error statistics:', stats);
// Output: [{ code: 'RATE_LIMIT_ERROR', service: 'openai', count: 5, lastOccurred: Date }]`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Retry Manager</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Automatic retry with exponential backoff for transient failures:
            </p>

            <CodeBlock
              title="Retry Logic"
              code={`import { RetryManager } from 'macro_api';

const retryManager = new RetryManager(
  3,      // maxRetries
  1000,   // baseDelay (ms)
  30000,  // maxDelay (ms)
  true    // jitter
);

async function reliableApiCall() {
  return await retryManager.execute(
    async () => {
      return await gpt.chat('Hello');
    },
    'chatgpt.chat',  // operation name for logging
    'openai'         // service name
  );
}

// The retry manager will automatically:
// - Retry on 5xx errors, timeouts, and network issues
// - Skip retries for 4xx errors (except rate limits)
// - Use exponential backoff with jitter
// - Log retry attempts`}
            />

            <InfoBox type="info" title="Built-in Retries">
              Most macro_api classes have built-in retry logic enabled by default. You can customize or disable it during initialization.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Circuit Breaker</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Prevent cascading failures with the circuit breaker pattern:
            </p>

            <CodeBlock
              title="Circuit Breaker"
              code={`import { CircuitBreaker } from 'macro_api';

const circuitBreaker = new CircuitBreaker(
  5,      // failureThreshold
  60000,  // recoveryTimeout (ms)
  10000,  // monitoringPeriod (ms)
  3       // successThreshold
);

async function protectedApiCall() {
  return await circuitBreaker.execute(
    async () => {
      return await gpt.chat('Hello');
    },
    async () => {
      // Fallback function when circuit is open
      return 'Service temporarily unavailable';
    }
  );
}

// Monitor circuit breaker state
console.log('Circuit state:', circuitBreaker.getState()); // CLOSED, OPEN, or HALF_OPEN
console.log('Failure count:', circuitBreaker.getFailureCount());`}
            />
          </div>
        );

      case 'caching':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Caching System</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              macro_api includes a sophisticated caching system with support for memory, Redis, 
              and hybrid caching strategies to improve performance and reduce API calls.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Cache Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Database className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Memory Cache</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fast in-memory caching with LRU eviction</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Server className="h-6 w-6 text-red-600 mb-2" />
                <h3 className="font-semibold mb-1">Redis Cache</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Distributed caching with persistence</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Layers className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-semibold mb-1">Hybrid Cache</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">L1 memory + L2 Redis for best performance</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <CodeBlock
              title="Setting up Caching"
              code={`import { CacheManager, MacroAPIClient } from 'macro_api';

// Memory cache
const memoryCache = new CacheManager({
  type: 'memory',
  ttl: 3600,        // 1 hour TTL
  maxSize: 1000     // Max 1000 entries
});

// Redis cache
const redisCache = new CacheManager({
  type: 'redis',
  ttl: 3600,
  redis: {
    url: 'redis://localhost:6379',
    keyPrefix: 'myapp',
    password: 'optional_password'
  }
});

// Hybrid cache (recommended for production)
const hybridCache = new CacheManager({
  type: 'hybrid',
  ttl: 3600,
  maxSize: 500,     // L1 cache size
  redis: {
    url: process.env.REDIS_URL,
    keyPrefix: 'myapp'
  }
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Manual Cache Operations</h2>
            <CodeBlock
              title="Cache Operations"
              code={`// Basic cache operations
await cache.set('user:123', userData, 7200); // 2 hour TTL
const user = await cache.get('user:123');
const exists = await cache.has('user:123');
await cache.delete('user:123');
await cache.clear(); // Clear all

// Generate cache keys
const key = cache.generateKey('spotify', 'getUser', { userId: '123' });

// Wrap functions with caching
const cachedResult = await cache.cached(
  'expensive-operation',
  async () => {
    // Expensive API call or computation
    return await someExpensiveOperation();
  },
  3600 // TTL in seconds
);

// Memoize functions
const memoizedFunction = cache.memoize(
  async (userId) => {
    return await fetchUserData(userId);
  },
  (userId) => \`user:\${userId}\`, // Key generator
  3600 // TTL
);

const userData = await memoizedFunction('123'); // Cached automatically`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Integrated Client</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Use the integrated client for automatic caching across all API calls:
            </p>

            <CodeBlock
              title="Cached API Client"
              code={`const client = new MacroAPIClient({
  cache: {
    type: 'hybrid',
    ttl: 3600,
    maxSize: 1000,
    redis: {
      url: process.env.REDIS_URL
    }
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

// All operations are automatically cached and retried
const chatResponse = await client.execute(
  () => gpt.chat('Hello world'),
  {
    service: 'openai',
    method: 'chat',
    params: { message: 'Hello world' },
    cacheTtl: 1800, // 30 minutes
    skipCache: false,
    skipRetry: false
  }
);

// Get cache statistics
const stats = await client.getCacheStats();
console.log(\`Hit rate: \${(stats.hitRate * 100).toFixed(1)}%\`);
console.log(\`Cache size: \${stats.size} entries\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Cache Strategies</h2>
            <CodeBlock
              title="Advanced Caching Patterns"
              code={`// Cache warming
await cache.warmUp([
  { key: 'user:popular', value: popularUserData, ttl: 7200 },
  { key: 'config:app', value: appConfig, ttl: 86400 }
]);

// Pattern-based invalidation
await cache.invalidatePattern('user:*'); // Invalidate all user cache

// Cache statistics and monitoring
const stats = await cache.getStats();
console.log({
  hits: stats.hits,
  misses: stats.misses,
  hitRate: \`\${(stats.hitRate * 100).toFixed(1)}%\`,
  size: stats.size,
  evictions: stats.evictions
});

// Cleanup and shutdown
await cache.close(); // Close Redis connections`}
            />

            <InfoBox type="success" title="Performance Boost">
              Proper caching can reduce API calls by 70-90% and improve response times significantly. 
              The hybrid cache provides the best of both worlds with L1 memory speed and L2 Redis persistence.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration Examples</h2>
            <CodeBlock
              title="Production Configuration"
              code={`// Development (memory only)
const devCache = new CacheManager({
  type: 'memory',
  ttl: 300,     // Short TTL for development
  maxSize: 100
});

// Production (hybrid with Redis cluster)
const prodCache = new CacheManager({
  type: 'hybrid',
  ttl: 3600,
  maxSize: 2000,
  redis: {
    url: process.env.REDIS_CLUSTER_URL,
    keyPrefix: \`myapp:\${process.env.NODE_ENV}\`,
    cluster: true,
    password: process.env.REDIS_PASSWORD
  },
  compression: true,        // Compress large values
  serialization: 'msgpack'  // Faster than JSON
});`}
            />
          </div>
        );

      case 'chatgpt':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <MessageSquare className="inline h-10 w-10 mr-3 text-green-500" />
              ChatGPT/OpenAI API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete OpenAI API wrapper with support for chat completions, embeddings, streaming, and function calling.
            </p>

            <InfoBox type="info" title="API Key Required">
              Get your API key from <a href="https://platform.openai.com/account/api-keys" className="text-primary-600 dark:text-primary-400 hover:underline" target="_blank">OpenAI Platform</a>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Basic Setup</h2>
            <CodeBlock
              title="ChatGPT Client Initialization"
              code={`import { ChatGPT } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: 'org-...',  // Optional
  baseUrl: 'https://api.openai.com/v1'  // Optional, for custom endpoints
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Chat Completions</h2>
            <CodeBlock
              title="Simple Chat"
              code={`// Simple chat with default settings
const response = await gpt.chat(
  'Explain quantum computing in simple terms',
  'You are a helpful assistant'
);
console.log(response);

// Advanced chat with custom parameters
const advancedResponse = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant specialized in technology.'
    },
    {
      role: 'user',
      content: 'What are the latest developments in AI?'
    }
  ],
  temperature: 0.7,
  max_tokens: 1000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Streaming Responses</h2>
            <CodeBlock
              title="Streaming Chat Completion"
              code={`// Stream responses for real-time applications
const stream = await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Write a short story about a robot' }
    ],
    temperature: 0.8,
    max_tokens: 500
  },
  // On data chunk received
  (chunk) => {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      process.stdout.write(content); // Stream to console
    }
  },
  // On error
  (error) => {
    console.error('Stream error:', error);
  },
  // On stream end
  () => {
    console.log('\\nStream completed');
  }
);

// Cancel stream if needed
// stream.destroy();`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Function Calling</h2>
            <CodeBlock
              title="Function Calling"
              code={`// Define functions that the AI can call
const functions = [
  {
    name: 'get_weather',
    description: 'Get current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'City name'
        },
        unit: {
          type: 'string',
          enum: ['celsius', 'fahrenheit']
        }
      },
      required: ['location']
    }
  }
];

const response = await gpt.withFunctions(
  'What\\'s the weather like in New York?',
  functions
);

// Check if AI wants to call a function
if (response.function_call) {
  const { name, arguments: args } = response.function_call;
  console.log(\`AI wants to call: \${name}\`);
  console.log(\`With arguments: \${args}\`);
  
  // Execute the function and send result back
  if (name === 'get_weather') {
    const weatherData = await getWeather(JSON.parse(args).location);
    
    // Continue conversation with function result
    const finalResponse = await gpt.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'user', content: 'What\\'s the weather like in New York?' },
        response.message,
        {
          role: 'function',
          name: 'get_weather',
          content: JSON.stringify(weatherData)
        }
      ]
    });
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Embeddings</h2>
            <CodeBlock
              title="Text Embeddings"
              code={`// Create embeddings for semantic search
const embeddings = await gpt.createEmbeddings({
  model: 'text-embedding-3-small',
  input: [
    'The quick brown fox jumps over the lazy dog',
    'A journey of a thousand miles begins with a single step',
    'To be or not to be, that is the question'
  ]
});

// Access individual embeddings
embeddings.data.forEach((embedding, index) => {
  console.log(\`Embedding \${index}: \${embedding.embedding.length} dimensions\`);
});

// Helper method for single text
const singleEmbedding = await gpt.embed('Hello world');
console.log('Single embedding:', singleEmbedding[0].embedding);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Conversation Management</h2>
            <CodeBlock
              title="Multi-turn Conversations"
              code={`// Maintain conversation history
const conversation = [
  {
    role: 'system',
    content: 'You are a helpful coding assistant.'
  }
];

// Add user message
conversation.push({
  role: 'user',
  content: 'How do I create a REST API in Node.js?'
});

// Get AI response
const response1 = await gpt.conversation(conversation);
conversation.push({
  role: 'assistant',
  content: response1
});

// Continue conversation
conversation.push({
  role: 'user',
  content: 'Can you show me an example with Express.js?'
});

const response2 = await gpt.conversation(conversation);
console.log('AI Response:', response2);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Advanced Features</h2>
            <CodeBlock
              title="Tool Calling (GPT-4)"
              code={`// New tool calling interface (GPT-4)
const tools = [
  {
    type: 'function',
    function: {
      name: 'calculate',
      description: 'Perform mathematical calculations',
      parameters: {
        type: 'object',
        properties: {
          expression: {
            type: 'string',
            description: 'Mathematical expression to evaluate'
          }
        },
        required: ['expression']
      }
    }
  }
];

const response = await gpt.withTools(
  'What is 15% of 240?',
  tools
);

// List available models
const models = await gpt.listModels();
console.log('Available models:', models.data.map(m => m.id));`}
            />

            <InfoBox type="warning" title="Rate Limits">
              OpenAI has rate limits based on your plan. The ChatGPT class automatically handles rate limiting and retries with exponential backoff.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration Options</h2>
            <CodeBlock
              title="ChatGPT Configuration"
              code={`interface ChatGPTConfig {
  apiKey: string;
  organizationId?: string;  // For organization accounts
  baseUrl?: string;         // Custom API endpoint
}

// Example configurations
const config = {
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: 'org-abc123',
  baseUrl: 'https://api.openai.com/v1'
};

const gpt = new ChatGPT(config);`}
            />
          </div>
        );

      case 'spotify':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <Music className="inline h-10 w-10 mr-3 text-green-500" />
              Spotify API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete Spotify Web API wrapper with OAuth2 authentication, playlist management, search, and player controls.
            </p>

            <InfoBox type="info" title="Spotify App Required">
              Create a Spotify app at <a href="https://developer.spotify.com/dashboard/" className="text-primary-600 dark:text-primary-400 hover:underline" target="_blank">Spotify Developer Dashboard</a> to get your credentials.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Authentication Setup</h2>
            <CodeBlock
              title="OAuth2 Flow"
              code={`import { SpotifyAPI } from 'macro_api';

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// Step 1: Get authorization URL
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-read-playback-state',
  'user-modify-playback-state'
]);

console.log('Redirect user to:', authUrl);

// Step 2: Handle callback and exchange code for tokens
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  
  try {
    await spotify.exchangeCode(code);
    res.send('Authentication successful!');
  } catch (error) {
    res.status(400).send('Authentication failed');
  }
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Information</h2>
            <CodeBlock
              title="User Profile"
              code={`// Get current user's profile
const user = await spotify.getCurrentUser();
console.log(\`Welcome, \${user.display_name}!\`);
console.log(\`Followers: \${user.followers.total}\`);
console.log(\`Country: \${user.country}\`);
console.log(\`Subscription: \${user.product}\`);

// Get another user's profile
const otherUser = await spotify.getUser('spotify');
console.log(\`User: \${otherUser.display_name}\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Search and Discovery</h2>
            <CodeBlock
              title="Search Content"
              code={`// Search for tracks, artists, albums, playlists
const searchResults = await spotify.search(
  'Never Gonna Give You Up',
  ['track', 'artist'],
  {
    limit: 10,
    market: 'US'
  }
);

console.log('Tracks found:', searchResults.tracks.items.length);
console.log('Artists found:', searchResults.artists.items.length);

// Search for specific content
const tracks = await spotify.search('Bohemian Rhapsody', ['track'], { limit: 5 });
tracks.tracks.items.forEach(track => {
  console.log(\`\${track.name} by \${track.artists[0].name}\`);
});

// Get recommendations
const recommendations = await spotify.getRecommendations({
  seed_artists: ['4NHQUGzhtTLFvgF5SZesLK'], // Tina Turner
  seed_tracks: ['0u2P5u6lvoDfwTYjAADbn4'],   // "What's Love Got to Do with It"
  seed_genres: ['pop', 'rock'],
  limit: 20,
  target_energy: 0.8,
  target_danceability: 0.7
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Playlist Management</h2>
            <CodeBlock
              title="Create and Manage Playlists"
              code={`// Create a new playlist
const user = await spotify.getCurrentUser();
const playlist = await spotify.createPlaylist(
  user.id,
  'My Awesome Playlist',
  false, // private
  'Created with macro_api'
);

console.log(\`Playlist created: \${playlist.external_urls.spotify}\`);

// Search for tracks to add
const searchResults = await spotify.search('Daft Punk', ['track'], { limit: 10 });
const trackUris = searchResults.tracks.items.map(track => track.uri);

// Add tracks to playlist
await spotify.addTracksToPlaylist(playlist.id, trackUris);

// Get playlist details
const playlistDetails = await spotify.getPlaylist(playlist.id);
console.log(\`Playlist has \${playlistDetails.tracks.total} tracks\`);

// Get playlist tracks with pagination
const tracks = await spotify.getPlaylistTracks(playlist.id, {
  limit: 50,
  offset: 0
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Music Library</h2>
            <CodeBlock
              title="Tracks, Albums, and Artists"
              code={`// Get track details
const track = await spotify.getTrack('4uLU6hMCjMI75M1A2tKUQC');
console.log(\`Track: \${track.name}\`);
console.log(\`Album: \${track.album.name}\`);
console.log(\`Duration: \${Math.floor(track.duration_ms / 1000)}s\`);

// Get multiple tracks
const tracks = await spotify.getTracks([
  '4uLU6hMCjMI75M1A2tKUQC',
  '1301WleyT98MSxVHPZCA6M'
]);

// Get album information
const album = await spotify.getAlbum('1DFixLWuPkv3KT3TnV35m3');
console.log(\`Album: \${album.name} by \${album.artists[0].name}\`);

// Get album tracks
const albumTracks = await spotify.getAlbumTracks(album.id, {
  limit: 50,
  market: 'US'
});

// Get artist information
const artist = await spotify.getArtist('0TnOYISbd1XYRBk9myaseg'); // Pitbull
console.log(\`Artist: \${artist.name}\`);
console.log(\`Genres: \${artist.genres.join(', ')}\`);
console.log(\`Popularity: \${artist.popularity}\`);

// Get artist's albums
const artistAlbums = await spotify.getArtistAlbums(artist.id, {
  include_groups: 'album,single',
  market: 'US',
  limit: 20
});

// Get artist's top tracks
const topTracks = await spotify.getArtistTopTracks(artist.id, 'US');
console.log('Top tracks:', topTracks.tracks.map(t => t.name));`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Player Control</h2>
            <CodeBlock
              title="Playback Control"
              code={`// Get current playback state
const playbackState = await spotify.getPlaybackState();
if (playbackState) {
  console.log(\`Currently playing: \${playbackState.item?.name}\`);
  console.log(\`Device: \${playbackState.device?.name}\`);
  console.log(\`Is playing: \${playbackState.is_playing}\`);
  console.log(\`Progress: \${playbackState.progress_ms}ms\`);
}

// Get currently playing track
const currentTrack = await spotify.getCurrentlyPlaying();
if (currentTrack && currentTrack.item) {
  console.log(\`Now playing: \${currentTrack.item.name}\`);
}

// Control playback (requires Spotify Premium)
await spotify.controlPlayback('play');    // Resume playback
await spotify.controlPlayback('pause');   // Pause playback
await spotify.controlPlayback('next');    // Next track
await spotify.controlPlayback('previous'); // Previous track

// Control playback on specific device
await spotify.controlPlayback('play', 'device_id_here');`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Token Management</h2>
            <CodeBlock
              title="Handling Tokens"
              code={`// Manual token management (if needed)
spotify.setAccessToken(
  'BQC4YhJ...',  // access token
  3600,          // expires in seconds
  'AQD5uL...'    // refresh token
);

// Check if token needs refresh
if (spotify.needsTokenRefresh()) {
  await spotify.refreshAccessToken();
}

// Automatic refresh is handled internally
// You don't need to manually refresh in most cases`}
            />

            <InfoBox type="warning" title="Premium Features">
              Playback control features require Spotify Premium. Free users can only access track information and metadata.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration</h2>
            <CodeBlock
              title="SpotifyAPI Configuration"
              code={`interface SpotifyAuthOptions {
  clientId: string;
  clientSecret: string;
  redirectUri?: string;  // Required for OAuth flow
}

// Spotify scopes for different features
const scopes = [
  // User profile
  'user-read-private',
  'user-read-email',
  
  // Playlists
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  
  // Library
  'user-library-read',
  'user-library-modify',
  
  // Playback
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  
  // Following
  'user-follow-read',
  'user-follow-modify',
  
  // Top items
  'user-top-read',
  
  // Recently played
  'user-read-recently-played'
];`}
            />
          </div>
        );

      // Add more cases for other sections...
      // I'll continue with a few more key sections

      case 'slack':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <Slack className="inline h-10 w-10 mr-3 text-purple-500" />
              Slack API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Production-ready Slack API wrapper for team communication, bot development, and workflow automation.
            </p>

            <InfoBox type="info" title="Slack App Required">
              Create a Slack app at <a href="https://api.slack.com/apps" className="text-primary-600 dark:text-primary-400 hover:underline" target="_blank">Slack API Dashboard</a> to get your bot token.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Basic Setup</h2>
            <CodeBlock
              title="Slack Client"
              code={`import { SlackAPI } from 'macro_api';

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET, // For webhook verification
  appToken: process.env.SLACK_APP_TOKEN // For socket mode (optional)
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Sending Messages</h2>
            <CodeBlock
              title="Message Operations"
              code={`// Send a simple message
await slack.sendMessage('#general', 'Hello, world!');

// Send message with rich formatting
await slack.sendMessage('#general', 'Hello team!', {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Welcome to our team!* :wave:'
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Here are some quick links:'
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Documentation'
        },
        url: 'https://example.com/docs'
      }
    }
  ],
  unfurlLinks: false
});

// Send to user DM
await slack.sendMessage('@username', 'Private message');

// Send threaded message
await slack.sendMessage('#general', 'Reply to thread', {
  threadTs: '1234567890.123456' // timestamp of parent message
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Channel Management</h2>
            <CodeBlock
              title="Channel Operations"
              code={`// Create a new channel
const channel = await slack.createChannel('project-apollo', {
  isPrivate: false,
  topic: 'Discussion about Project Apollo',
  purpose: 'Coordinate Project Apollo development'
});

// Get channel list
const channels = await slack.getChannels(true); // exclude archived
channels.forEach(ch => {
  console.log(\`Channel: #\${ch.name} (\${ch.numMembers} members)\`);
});

// Join a channel
await slack.joinChannel('#random');

// Invite users to channel
await slack.inviteUsersToChannel('#project-apollo', ['U123456', 'U789012']);

// Get channel members
const members = await slack.getChannelMembers('#project-apollo');
console.log(\`Channel has \${members.length} members\`);

// Archive/unarchive channel
await slack.archiveChannel('#old-project');
await slack.unarchiveChannel('#revived-project');

// Set channel topic and purpose
await slack.setChannelTopic('#general', 'General discussion and announcements');
await slack.setChannelPurpose('#general', 'Company-wide communication');`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">File Operations</h2>
            <CodeBlock
              title="File Upload and Sharing"
              code={`// Upload file from buffer
const fileBuffer = fs.readFileSync('./report.pdf');
const fileUpload = await slack.uploadFile(
  ['#general', '#reports'],
  fileBuffer,
  {
    filename: 'monthly-report.pdf',
    title: 'Monthly Report - December 2024',
    initialComment: 'Here\\'s the monthly report for review'
  }
);

// Upload text content as file
await slack.uploadFile(
  '#dev',
  'console.log("Hello, Slack!");',
  {
    filename: 'hello.js',
    filetype: 'javascript',
    title: 'Sample Code'
  }
);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Management</h2>
            <CodeBlock
              title="User Information"
              code={`// Get user information
const user = await slack.getUserInfo('U1234567890');
console.log(\`User: \${user.profile.displayName}\`);
console.log(\`Email: \${user.profile.email}\`);
console.log(\`Status: \${user.profile.statusText}\`);

// Get team information
const team = await slack.getTeamInfo();
console.log(\`Team: \${team.name}\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Slash Commands</h2>
            <CodeBlock
              title="Handling Slash Commands"
              code={`// Express.js route for handling slash commands
app.post('/slack/commands', express.raw({type: 'application/x-www-form-urlencoded'}), async (req, res) => {
  const signature = req.headers['x-slack-signature'];
  const timestamp = req.headers['x-slack-request-timestamp'];
  const body = req.body.toString();
  
  // Parse the payload
  const params = new URLSearchParams(body);
  const payload = {
    token: params.get('token'),
    teamId: params.get('team_id'),
    teamDomain: params.get('team_domain'),
    channelId: params.get('channel_id'),
    channelName: params.get('channel_name'),
    userId: params.get('user_id'),
    userName: params.get('user_name'),
    command: params.get('command'),
    text: params.get('text'),
    responseUrl: params.get('response_url'),
    triggerId: params.get('trigger_id')
  };
  
  try {
    const response = await slack.handleSlashCommand(
      payload,
      signature,
      timestamp,
      body
    );
    
    res.json(response);
  } catch (error) {
    res.status(400).json({
      response_type: 'ephemeral',
      text: 'Command failed to execute'
    });
  }
});

// Custom command handling
async function customCommandHandler(payload) {
  const { command, text, userId } = payload;
  
  switch (command) {
    case '/weather':
      const weather = await getWeather(text);
      return {
        response_type: 'in_channel',
        text: \`Weather in \${text}: \${weather.description}, \${weather.temp}°F\`
      };
      
    case '/deploy':
      // Trigger deployment
      triggerDeployment(text);
      return {
        response_type: 'ephemeral',
        text: \`Deployment of \${text} started!\`
      };
      
    default:
      return {
        response_type: 'ephemeral',
        text: 'Unknown command'
      };
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Interactive Components</h2>
            <CodeBlock
              title="Buttons and Interactive Elements"
              code={`// Send message with interactive buttons
await slack.sendMessage('#general', 'Choose an action:', {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Project Status Update*'
      }
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Approve'
          },
          style: 'primary',
          value: 'approve',
          action_id: 'approval_approve'
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Reject'
          },
          style: 'danger',
          value: 'reject',
          action_id: 'approval_reject'
        }
      ]
    }
  ]
});

// Handle button interactions
app.post('/slack/interactive', express.json(), async (req, res) => {
  const payload = JSON.parse(req.body.payload);
  
  if (payload.type === 'block_actions') {
    const action = payload.actions[0];
    
    if (action.action_id === 'approval_approve') {
      // Handle approval
      await processApproval(payload.user.id, 'approved');
      
      res.json({
        text: 'Request approved! ✅'
      });
    } else if (action.action_id === 'approval_reject') {
      // Handle rejection
      await processApproval(payload.user.id, 'rejected');
      
      res.json({
        text: 'Request rejected! ❌'
      });
    }
  }
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Message Management</h2>
            <CodeBlock
              title="Update and Delete Messages"
              code={`// Send message and store timestamp
const response = await slack.sendMessage('#general', 'Processing...');
const messageTs = response.ts;

// Update the message
await slack.updateMessage('#general', messageTs, 'Processing complete! ✅', [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Task completed successfully*\\nAll systems are operational.'
    }
  }
]);

// Delete message
await slack.deleteMessage('#general', messageTs);

// Add reaction to message
await slack.addReaction('#general', messageTs, 'thumbsup');

// Remove reaction
await slack.removeReaction('#general', messageTs, 'thumbsup');`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Search and Discovery</h2>
            <CodeBlock
              title="Search Messages and Content"
              code={`// Search messages
const searchResults = await slack.searchMessages('deployment status', {
  count: 20,
  highlight: true,
  sortDir: 'desc'
});

console.log(\`Found \${searchResults.messages.total} messages\`);
searchResults.messages.matches.forEach(match => {
  console.log(\`Message: \${match.text}\`);
  console.log(\`Channel: \${match.channel.name}\`);
  console.log(\`User: \${match.user}\`);
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Reminders</h2>
            <CodeBlock
              title="Setting Reminders"
              code={`// Set reminder for yourself
const reminder = await slack.setReminder(
  'Review pull requests',
  'in 2 hours'
);

// Set reminder for another user
const userReminder = await slack.setReminder(
  'Team meeting preparation',
  'tomorrow at 9am',
  'U1234567890'
);

console.log(\`Reminder set: \${reminder.text}\`);`}
            />

            <InfoBox type="success" title="Production Features">
              The Slack API wrapper includes signature verification, rate limiting, error handling, and automatic retries for production use.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration</h2>
            <CodeBlock
              title="SlackAPI Configuration"
              code={`interface SlackConfig {
  botToken: string;        // Required: Bot User OAuth Token
  appToken?: string;       // Optional: App-level token for Socket Mode
  signingSecret?: string;  // Optional: For webhook verification
}

// Bot token scopes (configure in Slack app settings)
const requiredScopes = [
  'chat:write',           // Send messages
  'channels:read',        // Read channel information
  'channels:manage',      // Create and manage channels
  'users:read',          // Read user information
  'files:write',         // Upload files
  'commands',            // Slash commands
  'reactions:write',     // Add/remove reactions
  'reminders:write'      // Set reminders
];`}
            />
          </div>
        );

      case 'sendgrid':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <Mail className="inline h-10 w-10 mr-3 text-blue-500" />
              SendGrid API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Production-ready email delivery service with templates, analytics, and advanced email management features.
            </p>

            <InfoBox type="info" title="SendGrid Account Required">
              Sign up at <a href="https://sendgrid.com" className="text-primary-600 dark:text-primary-400 hover:underline" target="_blank">SendGrid</a> and get your API key from the dashboard.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Basic Setup</h2>
            <CodeBlock
              title="SendGrid Client"
              code={`import { SendGridAPI } from 'macro_api';

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: 'noreply@yourcompany.com',
  defaultFromName: 'Your Company'
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Sending Emails</h2>
            <CodeBlock
              title="Basic Email Sending"
              code={`// Send simple email
await sendgrid.sendEmail({
  to: 'customer@example.com',
  subject: 'Welcome to our service!',
  text: 'Thank you for signing up.',
  html: '<h1>Welcome!</h1><p>Thank you for signing up.</p>'
});

// Send to multiple recipients
await sendgrid.sendEmail({
  to: ['user1@example.com', 'user2@example.com'],
  cc: ['manager@example.com'],
  bcc: ['archive@example.com'],
  subject: 'Team Update',
  html: '<p>Here\\'s the latest team update...</p>'
});

// Send with attachments
await sendgrid.sendEmail({
  to: 'client@example.com',
  subject: 'Monthly Report',
  html: '<p>Please find the monthly report attached.</p>',
  attachments: [
    {
      content: base64FileContent, // Base64 encoded file
      filename: 'report.pdf',
      type: 'application/pdf',
      disposition: 'attachment'
    }
  ]
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Email Templates</h2>
            <CodeBlock
              title="Dynamic Templates"
              code={`// Create email template
const template = await sendgrid.createTemplate(
  'Welcome Email Template',
  'dynamic'
);

// Create template version
const templateVersion = await sendgrid.createTemplateVersion(
  template.id,
  'Welcome Email v1',
  'Welcome to {{company_name}}!',
  \`
  <div style="font-family: Arial, sans-serif;">
    <h1>Welcome to {{company_name}}!</h1>
    <p>Hi {{first_name}},</p>
    <p>Thank you for joining us. Here are your next steps:</p>
    <ul>
      {{#each steps}}
      <li>{{this}}</li>
      {{/each}}
    </ul>
    <p>Best regards,<br>{{sender_name}}</p>
  </div>
  \`,
  'Welcome to {{company_name}}! Hi {{first_name}}, thank you for joining us.'
);

// Send templated email
await sendgrid.sendEmail({
  to: 'newuser@example.com',
  templateId: template.id,
  dynamicTemplateData: {
    company_name: 'Acme Corp',
    first_name: 'John',
    sender_name: 'Jane Smith',
    steps: [
      'Complete your profile',
      'Verify your email',
      'Explore our features'
    ]
  }
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Bulk Email Sending</h2>
            <CodeBlock
              title="Personalized Bulk Emails"
              code={`// Send personalized emails to multiple recipients
const recipients = [
  {
    email: 'john@example.com',
    name: 'John Doe',
    substitutions: {
      first_name: 'John',
      account_type: 'Premium',
      renewal_date: '2024-12-31'
    }
  },
  {
    email: 'jane@example.com',
    name: 'Jane Smith',
    substitutions: {
      first_name: 'Jane',
      account_type: 'Basic',
      renewal_date: '2024-11-15'
    }
  }
];

await sendgrid.sendTemplateEmail(
  'your-template-id',
  recipients,
  {
    company_name: 'Your Company',
    support_email: 'support@yourcompany.com'
  }
);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Management</h2>
            <CodeBlock
              title="Managing Contacts and Lists"
              code={`// Create contact list
const list = await sendgrid.createList('Newsletter Subscribers');

// Add contacts to list
const contacts = [
  {
    email: 'subscriber1@example.com',
    firstName: 'John',
    lastName: 'Doe',
    customFields: {
      age: 30,
      city: 'New York'
    }
  },
  {
    email: 'subscriber2@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    customFields: {
      age: 28,
      city: 'Los Angeles'
    }
  }
];

await sendgrid.addToList(list.id, contacts);

// Get all lists
const lists = await sendgrid.getLists();
lists.result.forEach(list => {
  console.log(\`List: \${list.name} (\${list.contactCount} contacts)\`);
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Email Scheduling</h2>
            <CodeBlock
              title="Scheduled Email Delivery"
              code={`// Schedule email for future delivery
const scheduleTime = new Date();
scheduleTime.setHours(scheduleTime.getHours() + 24); // Tomorrow same time

const scheduledEmail = await sendgrid.scheduleEmail({
  to: 'customer@example.com',
  subject: 'Don\\'t forget about your cart!',
  html: '<p>You have items waiting in your cart...</p>'
}, scheduleTime);

console.log(\`Email scheduled with batch ID: \${scheduledEmail.batchId}\`);

// Cancel scheduled email
await sendgrid.cancelScheduledEmail(scheduledEmail.batchId);

// Pause scheduled email
await sendgrid.pauseScheduledEmail(scheduledEmail.batchId);

// Resume scheduled email
await sendgrid.resumeScheduledEmail(scheduledEmail.batchId);

// Check status
const status = await sendgrid.getScheduledEmailStatus(scheduledEmail.batchId);
console.log(\`Email status: \${status.status}\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Email Analytics</h2>
            <CodeBlock
              title="Email Statistics and Analytics"
              code={`// Get email statistics
const stats = await sendgrid.getEmailStats(
  '2024-01-01',    // start date
  '2024-01-31',    // end date
  'day'            // aggregation: day, week, month
);

stats.forEach(stat => {
  const metrics = stat.stats[0].metrics;
  console.log(\`Date: \${stat.date}\`);
  console.log(\`Delivered: \${metrics.delivered}\`);
  console.log(\`Opens: \${metrics.opens}\`);
  console.log(\`Clicks: \${metrics.clicks}\`);
  console.log(\`Bounces: \${metrics.bounces}\`);
  console.log(\`Unsubscribes: \${metrics.unsubscribes}\`);
});

// Calculate open rate
const totalDelivered = stats.reduce((sum, stat) => 
  sum + stat.stats[0].metrics.delivered, 0);
const totalOpens = stats.reduce((sum, stat) => 
  sum + stat.stats[0].metrics.opens, 0);
const openRate = (totalOpens / totalDelivered * 100).toFixed(2);
console.log(\`Open rate: \${openRate}%\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Email Validation</h2>
            <CodeBlock
              title="Email Address Validation"
              code={`// Validate email address
const validation = await sendgrid.validateEmail('user@example.com');

console.log(\`Email: \${validation.email}\`);
console.log(\`Verdict: \${validation.verdict}\`); // Valid, Risky, or Invalid
console.log(\`Score: \${validation.score}\`);     // 0-1 confidence score

if (validation.verdict === 'Valid') {
  console.log('Email is safe to send to');
} else if (validation.verdict === 'Risky') {
  console.log('Email might bounce or be spam');
  if (validation.suggestion) {
    console.log(\`Suggestion: \${validation.suggestion}\`);
  }
} else {
  console.log('Email is invalid');
}

// Check specific validation details
console.log('Domain checks:', validation.checks.domain);
console.log('Local part checks:', validation.checks.localPart);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Suppression Management</h2>
            <CodeBlock
              title="Managing Suppressions"
              code={`// Add email to suppression list
await sendgrid.suppressEmail('spam@example.com', 1); // group ID

// Remove from suppression list
await sendgrid.unsuppressEmail('user@example.com', 1);

// Get suppression groups
const groups = await sendgrid.getSuppressionGroups();
groups.forEach(group => {
  console.log(\`Group: \${group.name} (ID: \${group.id})\`);
  console.log(\`Description: \${group.description}\`);
});`}
            />

            <InfoBox type="warning" title="Rate Limits">
              SendGrid has rate limits based on your plan. The API wrapper automatically handles rate limiting and retries.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Advanced Features</h2>
            <CodeBlock
              title="Advanced Email Options"
              code={`// Send email with advanced options
await sendgrid.sendEmail({
  to: 'customer@example.com',
  subject: 'Advanced Email Features',
  html: '<p>This email has advanced features enabled.</p>',
  customArgs: {
    campaign_id: 'spring-sale-2024',
    user_segment: 'premium'
  },
  categories: ['marketing', 'sale'],
  headers: {
    'X-Campaign-ID': 'spring-sale-2024'
  },
  trackingSettings: {
    clickTracking: { enable: true, enableText: true },
    openTracking: { enable: true },
    subscriptionTracking: { 
      enable: true,
      text: 'Unsubscribe here: [unsubscribe]',
      html: '<p><a href="[unsubscribe]">Unsubscribe</a></p>'
    }
  },
  mailSettings: {
    footer: {
      enable: true,
      text: 'This email was sent by Your Company',
      html: '<p><small>This email was sent by Your Company</small></p>'
    },
    spamCheck: {
      enable: true,
      threshold: 5
    }
  }
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration</h2>
            <CodeBlock
              title="SendGrid Configuration"
              code={`interface SendGridConfig {
  apiKey: string;
  defaultFromEmail?: string;  // Default sender email
  defaultFromName?: string;   // Default sender name
}

// Environment variables
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_FROM_EMAIL=noreply@yourcompany.com
SENDGRID_FROM_NAME="Your Company"

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: process.env.SENDGRID_FROM_EMAIL,
  defaultFromName: process.env.SENDGRID_FROM_NAME
});`}
            />
          </div>
        );

      default:
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Section Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">
              The requested documentation section could not be found.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="flex h-screen pt-20">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:block pt-20 lg:pt-0`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Menu className="h-5 w-5 mr-2" />
              <span className="font-medium">Documentation</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};