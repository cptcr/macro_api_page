import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Code, Zap, CheckCircle, Settings, Database, Shield, ArrowRight, Play, Terminal, Sparkles, Globe, Lock } from 'lucide-react';

const BasicUsageDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('patterns');
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

  const individualApiCode = `import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize individual API clients
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
});

// Use the APIs
async function basicExample() {
  // Generate AI response
  const aiResponse = await gpt.chat(
    'Explain the benefits of API wrappers',
    'You are a helpful programming assistant'
  );
  
  // Search for music
  const tracks = await spotify.search('Daft Punk', ['track'], { limit: 5 });
  
  // Create a customer
  const customer = await stripe.createCustomer({
    email: 'user@example.com',
    name: 'John Doe'
  });
  
  return { aiResponse, tracks, customer };
}`;

  const unifiedClientCode = `import { MacroAPIClient, ChatGPT, SpotifyAPI } from 'macro_api';

// Create unified client with advanced features
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 3600, // 1 hour
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000
  }
});

// Initialize API clients
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

// Use APIs with unified client for enhanced features
async function advancedExample() {
  // API call with automatic caching and retries
  const aiResponse = await client.execute(
    () => gpt.chat('What is TypeScript?'),
    {
      service: 'openai',
      method: 'chat',
      params: { prompt: 'typescript-explanation' },
      cacheTtl: 1800 // Cache for 30 minutes
    }
  );
  
  // Multiple operations with automatic error handling
  const results = await Promise.allSettled([
    client.execute(() => gpt.chat('Generate a motivational quote')),
    client.execute(() => spotify.search('productivity music', ['playlist']))
  ]);
  
  return { aiResponse, results };
}`;

  const errorHandlingCode = `import { ChatGPT, MacroApiError, AuthenticationError, RateLimitError } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

async function handleErrors() {
  try {
    const response = await gpt.chat('Hello, world!');
    return response;
  } catch (error) {
    // Handle specific macro_api errors
    if (error instanceof AuthenticationError) {
      console.error('Invalid API key:', error.message);
      // Handle authentication issues
    } else if (error instanceof RateLimitError) {
      console.error('Rate limit exceeded:', error.retryAfter);
      // Implement backoff strategy
    } else if (error instanceof MacroApiError) {
      console.error('API Error:', {
        service: error.service,
        code: error.code,
        message: error.message,
        statusCode: error.statusCode
      });
    } else {
      console.error('Unexpected error:', error);
    }
    
    throw error; // Re-throw if needed
  }
}

// Using try-catch with async/await
async function robustApiCall() {
  const maxRetries = 3;
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      const result = await gpt.chat('Generate a fun fact');
      return result;
    } catch (error) {
      attempt++;
      
      if (error instanceof RateLimitError && attempt < maxRetries) {
        // Wait before retrying
        await new Promise(resolve => 
          setTimeout(resolve, error.retryAfter * 1000)
        );
        continue;
      }
      
      throw error;
    }
  }
}`;

  const asyncPatternsCode = `import { ChatGPT, SpotifyAPI } from 'macro_api';

const gpt = new ChatGPT({ apiKey: process.env.OPENAI_API_KEY });
const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

// Async/await pattern (recommended)
async function useAsyncAwait() {
  try {
    const aiResponse = await gpt.chat('What is machine learning?');
    const musicResults = await spotify.search('ambient music', ['track']);
    
    return {
      explanation: aiResponse,
      tracks: musicResults.tracks.items
    };
  } catch (error) {
    console.error('Error in async/await:', error);
    throw error;
  }
}

// Promise chaining (alternative)
function usePromises() {
  return gpt.chat('What is machine learning?')
    .then(aiResponse => {
      return spotify.search('ambient music', ['track'])
        .then(musicResults => ({
          explanation: aiResponse,
          tracks: musicResults.tracks.items
        }));
    })
    .catch(error => {
      console.error('Error in promise chain:', error);
      throw error;
    });
}

// Parallel execution with Promise.all
async function parallelExecution() {
  try {
    const [aiResponse, musicResults, weatherData] = await Promise.all([
      gpt.chat('Explain quantum computing briefly'),
      spotify.search('focus music', ['playlist']),
      gpt.chat('What is the weather like in a general sense?')
    ]);
    
    return { aiResponse, musicResults, weatherData };
  } catch (error) {
    // If any promise fails, this catch block runs
    console.error('One or more parallel operations failed:', error);
    throw error;
  }
}

// Handling partial failures with Promise.allSettled
async function parallelWithPartialFailures() {
  const operations = [
    gpt.chat('Generate a programming tip'),
    spotify.search('coding music', ['playlist']),
    gpt.chat('What is the best programming language?')
  ];
  
  const results = await Promise.allSettled(operations);
  
  const successful = results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);
    
  const failed = results
    .filter(result => result.status === 'rejected')
    .map(result => result.reason);
  
  return { successful, failed };
}`;

  const nextjsCode = `// pages/api/ai-music.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ChatGPT, SpotifyAPI } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { mood } = req.body;

  try {
    // Generate AI response about the mood
    const moodDescription = await gpt.chat(
      \`Describe music that fits this mood: \${mood}\`,
      'You are a music expert. Provide a brief, helpful description.'
    );

    // Search for music based on the mood
    const searchResults = await spotify.search(
      \`\${mood} music\`,
      ['track', 'playlist'],
      { limit: 10 }
    );

    res.status(200).json({
      mood,
      description: moodDescription,
      tracks: searchResults.tracks?.items || [],
      playlists: searchResults.playlists?.items || []
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate music recommendations' 
    });
  }
}

// pages/music-ai.tsx
import { useState } from 'react';

export default function MusicAI() {
  const [mood, setMood] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/ai-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood })
      });

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Music Recommendations</h1>
      
      <div className="mb-8">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood (e.g., happy, relaxed, energetic)"
          className="w-full p-3 border rounded-lg"
        />
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="mt-3 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          {loading ? 'Getting Recommendations...' : 'Get Music'}
        </button>
      </div>

      {recommendations && (
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Music for {recommendations.mood}
          </h2>
          <p className="mb-4">{recommendations.description}</p>
          {/* Render tracks and playlists */}
        </div>
      )}
    </div>
  );
}`;

  const expressCode = `import express from 'express';
import { ChatGPT, SlackAPI, MacroAPIClient } from 'macro_api';

const app = express();
app.use(express.json());

// Initialize APIs
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN!
});

// Initialize unified client with caching
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 1800, // 30 minutes
    maxSize: 500
  }
});

// AI-powered Slack notifications endpoint
app.post('/api/notify', async (req, res) => {
  try {
    const { channel, topic, urgent } = req.body;

    // Generate contextual message using AI
    const message = await client.execute(
      () => gpt.chat(
        \`Create a brief, professional notification about: \${topic}\`,
        \`You are a helpful assistant. Keep messages concise and \${urgent ? 'urgent' : 'informative'}.\`
      ),
      {
        service: 'openai',
        method: 'chat',
        params: { topic, urgent },
        cacheTtl: urgent ? 0 : 3600 // Don't cache urgent messages
      }
    );

    // Send to Slack
    await slack.sendMessage(channel, message, {
      username: 'AI Assistant',
      icon_emoji: urgent ? ':warning:' : ':robot_face:'
    });

    res.json({ 
      success: true, 
      message: 'Notification sent successfully' 
    });
  } catch (error) {
    console.error('Notification error:', error);
    res.status(500).json({ 
      error: 'Failed to send notification' 
    });
  }
});

// AI chat endpoint with conversation history
const conversations = new Map();

app.post('/api/chat', async (req, res) => {
  try {
    const { userId, message, conversationId } = req.body;
    
    // Get or create conversation history
    const convId = conversationId || \`conv_\${userId}_\${Date.now()}\`;
    let history = conversations.get(convId) || [];

    // Add user message to history
    history.push({ role: 'user', content: message });

    // Generate AI response with context
    const response = await gpt.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant. Keep responses concise and friendly.'
        },
        ...history
      ],
      max_tokens: 500
    });

    const aiMessage = response.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Add AI response to history
    history.push({ role: 'assistant', content: aiMessage });

    // Limit conversation history (keep last 20 messages)
    if (history.length > 20) {
      history = history.slice(-20);
    }

    conversations.set(convId, history);

    res.json({
      conversationId: convId,
      response: aiMessage,
      messageCount: history.length
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to process chat message' 
    });
  }
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    // Check if APIs are accessible
    const checks = await Promise.allSettled([
      client.getCacheStats(),
      // Add more health checks as needed
    ]);

    const cacheStats = checks[0].status === 'fulfilled' ? checks[0].value : null;

    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      cache: cacheStats,
      conversations: conversations.size
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'unhealthy', 
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`;

  const environmentCode = `// config/environment.ts
import { z } from 'zod';

// Define schema for type-safe environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // API Keys
  OPENAI_API_KEY: z.string().min(1, 'OpenAI API key is required'),
  SPOTIFY_CLIENT_ID: z.string().optional(),
  SPOTIFY_CLIENT_SECRET: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  
  // Optional configuration
  CACHE_TTL: z.string().transform(Number).default('3600'),
  MAX_RETRIES: z.string().transform(Number).default('3'),
});

export type Environment = z.infer<typeof envSchema>;

export function getEnvironment(): Environment {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error('Environment validation failed:', error);
    process.exit(1);
  }
}

// usage.ts
import { getEnvironment } from './config/environment';
import { ChatGPT, MacroAPIClient } from 'macro_api';

const env = getEnvironment();

const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: env.CACHE_TTL,
    maxSize: 1000
  },
  retries: {
    maxRetries: env.MAX_RETRIES,
    baseDelay: 1000
  }
});

const gpt = new ChatGPT({
  apiKey: env.OPENAI_API_KEY
});`;

  const gracefulDegradationCode = `import { ChatGPT, SpotifyAPI, MacroApiError } from 'macro_api';

class RobustMusicService {
  private gpt: ChatGPT;
  private spotify: SpotifyAPI;

  constructor() {
    this.gpt = new ChatGPT({
      apiKey: process.env.OPENAI_API_KEY!
    });
    
    this.spotify = new SpotifyAPI({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
    });
  }

  async getMusicRecommendations(mood: string) {
    const results = {
      aiDescription: null as string | null,
      tracks: [] as any[],
      error: null as string | null
    };

    // Try to get AI description with fallback
    try {
      results.aiDescription = await this.gpt.chat(
        \`Describe music that fits this mood: \${mood}\`,
        'You are a music expert. Be brief and helpful.'
      );
    } catch (error) {
      console.warn('AI description failed:', error);
      results.aiDescription = \`Music recommendations for \${mood} mood\`;
    }

    // Try to get Spotify tracks with fallback
    try {
      const searchResults = await this.spotify.search(
        \`\${mood} music\`,
        ['track'],
        { limit: 10 }
      );
      results.tracks = searchResults.tracks?.items || [];
    } catch (error) {
      console.warn('Spotify search failed:', error);
      results.error = 'Music search temporarily unavailable';
      // Could fallback to a local database or different service
    }

    return results;
  }

  async withFallback<T>(
    primary: () => Promise<T>,
    fallback: () => Promise<T> | T,
    errorMessage: string
  ): Promise<T> {
    try {
      return await primary();
    } catch (error) {
      console.warn(\`Primary operation failed: \${errorMessage}\`, error);
      return await Promise.resolve(fallback());
    }
  }
}

// Usage example
const musicService = new RobustMusicService();

async function handleMusicRequest(mood: string) {
  const recommendations = await musicService.getMusicRecommendations(mood);
  
  return {
    success: true,
    description: recommendations.aiDescription,
    tracks: recommendations.tracks,
    hasMusic: recommendations.tracks.length > 0,
    warning: recommendations.error
  };
}`;

  const coreFeatures = [
    {
      name: 'Unified Interface',
      description: 'Same patterns across all API services for consistency',
      icon: <Zap className="h-4 w-4" />
    },
    {
      name: 'Built-in Safety',
      description: 'Automatic error handling and retry mechanisms',
      icon: <Shield className="h-4 w-4" />
    },
    {
      name: 'Smart Caching',
      description: 'Intelligent response caching to improve performance',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'TypeScript First',
      description: 'Complete type safety and IntelliSense support',
      icon: <Settings className="h-4 w-4" />
    }
  ];

  const bestPractices = [
    {
      category: 'Performance',
      icon: <Zap className="h-5 w-5" />,
      color: 'blue',
      tips: 'Use the unified client for automatic caching and retries, implement proper error handling for production applications, cache frequently accessed data to reduce API calls'
    },
    {
      category: 'Security',
      icon: <Shield className="h-5 w-5" />,
      color: 'green',
      tips: 'Use environment variables for all API keys and secrets, implement rate limiting, validate all inputs before processing'
    },
    {
      category: 'Reliability',
      icon: <CheckCircle className="h-5 w-5" />,
      color: 'purple',
      tips: 'Implement graceful degradation, use circuit breakers for external services, log errors appropriately for debugging'
    },
    {
      category: 'Development',
      icon: <Code className="h-5 w-5" />,
      color: 'orange',
      tips: 'Use TypeScript for better development experience, implement comprehensive testing, follow consistent coding patterns'
    }
  ];

  const nextSteps = [
    {
      title: 'Authentication Guide',
      description: 'Learn how to securely manage API keys and OAuth flows',
      icon: <Shield className="h-5 w-5" />,
      href: '/documentation?section=authentication',
      color: 'green'
    },
    {
      title: 'Error Handling',
      description: 'Master robust error handling and retry strategies',
      icon: <Settings className="h-5 w-5" />,
      href: '/documentation?section=error-handling',
      color: 'orange'
    },
    {
      title: 'Caching System',
      description: 'Optimize performance with intelligent caching',
      icon: <Database className="h-5 w-5" />,
      href: '/documentation?section=caching',
      color: 'purple'
    },
    {
      title: 'API Guides',
      description: 'Deep dive into specific API integrations',
      icon: <Terminal className="h-5 w-5" />,
      href: '/documentation?section=chatgpt',
      color: 'blue'
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
        {/* Header */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <Code className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Getting Started
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Basic Usage
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Learn the fundamentals of using macro_api in your applications
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            macro_api provides a unified interface for working with multiple APIs. This guide covers the essential patterns you'll use in 90% of your integrations, from basic setup to advanced features like caching and error handling.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Quick Start</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Examples</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Best Practices</span>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Core Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreFeatures.map((feature, index) => (
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
                onClick={() => setActiveTab('patterns')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'patterns' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Common Patterns
              </button>
              <button
                onClick={() => setActiveTab('setup')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'setup' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Basic Setup
              </button>
              <button
                onClick={() => setActiveTab('error-handling')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'error-handling' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Error Handling
              </button>
              <button
                onClick={() => setActiveTab('async-patterns')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'async-patterns' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Async Patterns
              </button>
              <button
                onClick={() => setActiveTab('frameworks')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'frameworks' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Framework Integration
              </button>
              <button
                onClick={() => setActiveTab('best-practices')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'best-practices' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Best Practices
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'patterns' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Individual API Classes</h3>
                <p className="text-muted-foreground mb-4">The most straightforward way to use macro_api is to import and initialize the API classes you need:</p>
                <CodeBlock code={individualApiCode} id="individual-api" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'setup' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Using the Unified Client
                </h3>
                <p className="text-muted-foreground mb-4">For more advanced use cases, you can use the MacroAPIClient which provides built-in caching, retry logic, and error handling:</p>
                <CodeBlock code={unifiedClientCode} id="unified-client" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'error-handling' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Error Handling Patterns
                </h3>
                <p className="text-muted-foreground mb-4">macro_api provides built-in error handling, but you can also implement custom error handling:</p>
                <CodeBlock code={errorHandlingCode} id="error-handling" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'async-patterns' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Play className="h-5 w-5 mr-2 text-primary" />
                  Async/Await vs Promises
                </h3>
                <p className="text-muted-foreground mb-4">Learn different patterns for handling asynchronous operations with macro_api:</p>
                <CodeBlock code={asyncPatternsCode} id="async-patterns" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'frameworks' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Next.js Integration
                </h3>
                <p className="text-muted-foreground mb-4">Complete example of using macro_api in a Next.js application:</p>
                <CodeBlock code={nextjsCode} id="nextjs" />
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 mt-8 flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-primary" />
                  Express.js Integration
                </h3>
                <p className="text-muted-foreground mb-4">Building a robust Express.js server with macro_api:</p>
                <CodeBlock code={expressCode} id="express" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'best-practices' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  Environment Variables Management
                </h3>
                <p className="text-muted-foreground mb-4">Type-safe environment variable handling with validation:</p>
                <CodeBlock code={environmentCode} id="environment" />
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 mt-8 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Graceful Degradation
                </h3>
                <p className="text-muted-foreground mb-4">Building resilient services that handle failures gracefully:</p>
                <CodeBlock code={gracefulDegradationCode} id="graceful-degradation" />
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Summary */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className={`glass-card bg-gradient-to-r from-${practice.color}-500/10 to-${practice.color}-600/10 border-${practice.color}-500/20`}>
                <h4 className={`font-semibold text-${practice.color}-600 mb-4 flex items-center`}>
                  {practice.icon}
                  <span className="ml-2">{practice.category}</span>
                </h4>
                <p className="text-sm text-muted-foreground">{practice.tips}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            Now that you understand the basic usage patterns, explore these advanced topics to master macro_api:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((step, index) => (
              <a key={index} href={step.href} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <div className={`text-${step.color}-600`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 mt-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Ready to Build!</h3>
                <p className="text-sm text-muted-foreground">
                  You now have the foundation to build powerful applications with macro_api. Start with simple integrations and gradually add more complex features as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicUsageDocs;