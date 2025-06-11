import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Code, Zap, CheckCircle, Settings, Database, Shield, ArrowRight, Play, Terminal } from 'lucide-react';

const BasicUsageDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Code className="h-10 w-10 mr-4 text-primary-600 dark:text-primary-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Basic Usage</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn the fundamentals of using macro_api in your applications
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Quick Start
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Examples
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Best Practices
          </span>
        </div>
      </div>

      ## Overview

      macro_api provides a unified interface for working with multiple APIs. This guide covers the essential patterns you'll use in 90% of your integrations, from basic setup to advanced features like caching and error handling.

      ### Core Concepts

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Unified Interface</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Same patterns across all API services</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Shield className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Built-in Safety</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Automatic error handling and retries</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Smart Caching</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Intelligent response caching</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Settings className="h-6 w-6 text-orange-600 mb-2" />
          <h3 className="font-semibold mb-1">TypeScript First</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Complete type safety out of the box</p>
        </div>
      </div>

      ## Basic Import and Setup

      ### Individual API Classes

      The most straightforward way to use macro_api is to import and initialize the API classes you need:

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

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
}`}
        javascript={`const { ChatGPT, SpotifyAPI, StripeAPI } = require('macro_api');

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
}`}
        title="Individual API initialization"
      />

      ### Using the Unified Client

      For more advanced use cases, you can use the `MacroAPIClient` which provides built-in caching, retry logic, and error handling:

      <CodeExampleSwitcher
        typescript={`import { MacroAPIClient, ChatGPT, SpotifyAPI } from 'macro_api';

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
}`}
        javascript={`const { MacroAPIClient, ChatGPT, SpotifyAPI } = require('macro_api');

// Create unified client with advanced features
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 3600, // 1 hour
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
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

// Use APIs with unified client
async function advancedExample() {
  // API call with caching and retries
  const aiResponse = await client.execute(
    () => gpt.chat('What is TypeScript?'),
    {
      service: 'openai',
      method: 'chat',
      cacheTtl: 1800
    }
  );
  
  return aiResponse;
}`}
        title="Unified client with advanced features"
      />

      ## Common Patterns

      ### Error Handling

      macro_api provides built-in error handling, but you can also implement custom error handling:

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, MacroApiError, AuthenticationError, RateLimitError } from 'macro_api';

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
}`}
        javascript={`const { ChatGPT, MacroApiError, AuthenticationError, RateLimitError } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

async function handleErrors() {
  try {
    const response = await gpt.chat('Hello, world!');
    return response;
  } catch (error) {
    // Handle specific errors
    if (error instanceof AuthenticationError) {
      console.error('Invalid API key:', error.message);
    } else if (error instanceof RateLimitError) {
      console.error('Rate limit exceeded:', error.retryAfter);
    } else if (error instanceof MacroApiError) {
      console.error('API Error:', {
        service: error.service,
        code: error.code,
        message: error.message
      });
    }
    
    throw error;
  }
}`}
        title="Robust error handling patterns"
      />

      ### Async/Await vs Promises

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, SpotifyAPI } from 'macro_api';

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
}`}
        javascript={`const { ChatGPT, SpotifyAPI } = require('macro_api');

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
    console.error('Error:', error);
    throw error;
  }
}

// Parallel execution
async function parallelExecution() {
  try {
    const [aiResponse, musicResults] = await Promise.all([
      gpt.chat('Explain quantum computing'),
      spotify.search('focus music', ['playlist'])
    ]);
    
    return { aiResponse, musicResults };
  } catch (error) {
    console.error('Parallel operation failed:', error);
    throw error;
  }
}`}
        title="Async patterns and parallel execution"
      />

      ## Framework Integration

      ### Next.js Integration

      <CodeExampleSwitcher
        typescript={`// pages/api/ai-music.ts
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood (e.g., happy, relaxed, energetic)"
          className="w-full p-3 border rounded-lg"
          required
        />
        <button 
          type="submit"
          disabled={loading}
          className="mt-3 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          {loading ? 'Getting Recommendations...' : 'Get Music'}
        </button>
      </form>

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
}`}
        javascript={`// pages/api/ai-music.js
const { ChatGPT, SpotifyAPI } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { mood } = req.body;

  try {
    const moodDescription = await gpt.chat(
      \`Describe music for this mood: \${mood}\`,
      'You are a music expert.'
    );

    const searchResults = await spotify.search(
      \`\${mood} music\`,
      ['track'],
      { limit: 10 }
    );

    res.status(200).json({
      mood,
      description: moodDescription,
      tracks: searchResults.tracks?.items || []
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate recommendations' 
    });
  }
}`}
        title="Next.js API route with macro_api"
      />

      ### Express.js Integration

      <CodeExampleSwitcher
        typescript={`import express from 'express';
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
});`}
        javascript={`const express = require('express');
const { ChatGPT, SlackAPI, MacroAPIClient } = require('macro_api');

const app = express();
app.use(express.json());

// Initialize APIs
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN
});

const client = new MacroAPIClient({
  cache: { type: 'memory', ttl: 1800 }
});

// AI chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    const response = await client.execute(
      () => gpt.chat(message),
      { service: 'openai', cacheTtl: 300 }
    );

    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Chat failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        title="Express.js server with macro_api"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use the unified client for automatic caching and retries
        - Implement proper error handling for production applications
        - Cache frequently accessed data to reduce API calls
        - Use environment variables for all API keys and secrets
      </InfoBox>

      ### Environment Variables Management

      <CodeExampleSwitcher
        typescript={`// config/environment.ts
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
});`}
        javascript={`// config/environment.js
function validateEnvironment() {
  const required = ['OPENAI_API_KEY'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    process.exit(1);
  }
  
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    CACHE_TTL: parseInt(process.env.CACHE_TTL || '3600'),
    MAX_RETRIES: parseInt(process.env.MAX_RETRIES || '3')
  };
}

module.exports = { validateEnvironment };`}
        title="Environment variable validation"
      />

      ### Graceful Degradation

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, SpotifyAPI, MacroApiError } from 'macro_api';

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
}`}
        javascript={`const { ChatGPT, SpotifyAPI } = require('macro_api');

class RobustMusicService {
  constructor() {
    this.gpt = new ChatGPT({
      apiKey: process.env.OPENAI_API_KEY
    });
    
    this.spotify = new SpotifyAPI({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    });
  }

  async getMusicRecommendations(mood) {
    const results = {
      aiDescription: null,
      tracks: [],
      error: null
    };

    // Try AI with fallback
    try {
      results.aiDescription = await this.gpt.chat(
        \`Describe music for mood: \${mood}\`
      );
    } catch (error) {
      console.warn('AI failed:', error);
      results.aiDescription = \`Music for \${mood} mood\`;
    }

    // Try Spotify with fallback
    try {
      const searchResults = await this.spotify.search(
        \`\${mood} music\`,
        ['track'],
        { limit: 10 }
      );
      results.tracks = searchResults.tracks?.items || [];
    } catch (error) {
      console.warn('Spotify failed:', error);
      results.error = 'Music search unavailable';
    }

    return results;
  }
}

module.exports = RobustMusicService;`}
        title="Graceful degradation and fallbacks"
      />

      ## Next Steps

      Now that you understand the basic usage patterns, explore these advanced topics:

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <a href="/documentation?section=authentication" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-green-600" />
            Authentication Guide
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Learn how to securely manage API keys and OAuth flows</p>
        </a>
        <a href="/documentation?section=error-handling" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2 flex items-center">
            <Settings className="h-5 w-5 mr-2 text-orange-600" />
            Error Handling
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Master robust error handling and retry strategies</p>
        </a>
        <a href="/documentation?section=caching" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2 flex items-center">
            <Database className="h-5 w-5 mr-2 text-purple-600" />
            Caching System
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Optimize performance with intelligent caching</p>
        </a>
        <a href="/documentation?section=chatgpt" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2 flex items-center">
            <Terminal className="h-5 w-5 mr-2 text-blue-600" />
            API Guides
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Deep dive into specific API integrations</p>
        </a>
      </div>

      <InfoBox type="success" title="Ready to Build!">
        You now have the foundation to build powerful applications with macro_api. Start with simple integrations and gradually add more complex features as needed.
      </InfoBox>
    </div>
  );
};

export default BasicUsageDocs;