import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Rocket, Package, Code, Zap, Shield, Database } from 'lucide-react';

const GettingStartedDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Rocket className="h-10 w-10 mr-4 text-primary-600 dark:text-primary-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Getting Started</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your journey to simplified API integration starts here
            </p>
          </div>
        </div>
      </div>

      ## What is macro_api?

      **macro_api** is a comprehensive TypeScript/JavaScript library that provides unified, production-ready wrappers for popular APIs. 
      Instead of learning different SDK patterns for each service, you get a consistent interface across all integrations.

      ### Why Choose macro_api?

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Code className="h-8 w-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Unified Interface</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Consistent API patterns across all services. Learn once, use everywhere.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built-in error handling, retry logic, and circuit breaker patterns.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-8 w-8 text-yellow-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">High Performance</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Intelligent caching, request batching, and optimized for speed.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">TypeScript First</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Full type safety with comprehensive TypeScript definitions.
          </p>
        </div>
      </div>

      ## Supported Services

      macro_api currently supports 15+ popular APIs across different categories:

      ### Communication & Collaboration
      - **Slack** - Team communication and workflow automation
      - **SendGrid** - Transactional email delivery
      - **Discord** - Community management (via webhooks)

      ### AI & Machine Learning
      - **OpenAI/ChatGPT** - Advanced language models
      - **DeepSeek** - Code generation and AI assistance

      ### Payment Processing
      - **Stripe** - Complete payment infrastructure
      - **PayPal** - Global payment solutions

      ### Development & Deployment
      - **GitHub** - Version control and repository management
      - **Vercel** - Frontend deployment and hosting
      - **Docker Hub** - Container registry management

      ### Cloud Services
      - **AWS S3** - Object storage and file management

      ### Entertainment & Media
      - **Spotify** - Music streaming and playlist management
      - **YouTube** - Video notifications and monitoring

      ### Productivity
      - **Notion** - Workspace and note management

      ### Sports & Gaming
      - **Football API** - Comprehensive football/soccer data
      - **Valorant** - Gaming statistics and player data

      ## Quick Installation

      <CodeExampleSwitcher
        typescript={`# Using npm
npm install macro_api

# Using yarn
yarn add macro_api

# Using pnpm
pnpm add macro_api`}
        javascript={`# Using npm
npm install macro_api

# Using yarn
yarn add macro_api

# Using pnpm
pnpm add macro_api`}
        title="Choose your package manager"
      />

      ## Your First API Call

      Let's start with a simple example using the ChatGPT API:

      <CodeExampleSwitcher
        typescript={`import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Make your first API call
async function firstApiCall() {
  try {
    const response = await gpt.chat(
      'Explain APIs in simple terms',
      'You are a helpful programming tutor'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

firstApiCall();`}
        javascript={`const { ChatGPT } = require('macro_api');

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Make your first API call
async function firstApiCall() {
  try {
    const response = await gpt.chat(
      'Explain APIs in simple terms',
      'You are a helpful programming tutor'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

firstApiCall();`}
        title="Hello World with ChatGPT"
      />

      <InfoBox type="tip" title="Environment Variables">
        Always store your API keys in environment variables, never in your source code. 
        Create a `.env` file in your project root and add your keys there.
      </InfoBox>

      ## Environment Setup

      Create a `.env` file in your project root:

      <CodeExampleSwitcher
        typescript={`# .env file
OPENAI_API_KEY=sk-your-openai-key-here
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key
# ... add other API keys as needed`}
        javascript={`# .env file
OPENAI_API_KEY=sk-your-openai-key-here
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key
# ... add other API keys as needed`}
        title="Environment variables setup"
      />

      ## Multi-Service Example

      Here's how easy it is to work with multiple APIs in the same application:

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, SlackAPI, SendGridAPI } from 'macro_api';

// Initialize multiple services
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN
});

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY
});

// Orchestrate multiple APIs
async function aiPoweredNotification() {
  try {
    // 1. Generate content with AI
    const aiContent = await gpt.chat(
      'Write a brief daily standup reminder',
      'You are a friendly team assistant'
    );
    
    // 2. Send to Slack
    await slack.sendMessage('#general', aiContent);
    
    // 3. Send email summary
    await sendgrid.sendEmail({
      to: 'team@company.com',
      subject: 'Daily Standup Reminder',
      text: aiContent
    });
    
    console.log('Notification sent successfully!');
  } catch (error) {
    console.error('Failed to send notification:', error);
  }
}

aiPoweredNotification();`}
        javascript={`const { ChatGPT, SlackAPI, SendGridAPI } = require('macro_api');

// Initialize multiple services
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN
});

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY
});

// Orchestrate multiple APIs
async function aiPoweredNotification() {
  try {
    // 1. Generate content with AI
    const aiContent = await gpt.chat(
      'Write a brief daily standup reminder',
      'You are a friendly team assistant'
    );
    
    // 2. Send to Slack
    await slack.sendMessage('#general', aiContent);
    
    // 3. Send email summary
    await sendgrid.sendEmail({
      to: 'team@company.com',
      subject: 'Daily Standup Reminder',
      text: aiContent
    });
    
    console.log('Notification sent successfully!');
  } catch (error) {
    console.error('Failed to send notification:', error);
  }
}

aiPoweredNotification();`}
        title="Multi-service integration example"
      />

      ## Framework Integration

      macro_api works seamlessly with popular frameworks:

      ### Next.js Integration

      <CodeExampleSwitcher
        typescript={`// pages/api/chat.ts (Next.js API route)
import { ChatGPT } from 'macro_api';
import type { NextApiRequest, NextApiResponse } from 'next';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    const response = await gpt.chat(message);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' });
  }
}`}
        javascript={`// pages/api/chat.js (Next.js API route)
const { ChatGPT } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    const response = await gpt.chat(message);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' });
  }
}`}
        title="Next.js API route example"
      />

      ### Express.js Integration

      <CodeExampleSwitcher
        typescript={`import express from 'express';
import { SlackAPI, SendGridAPI } from 'macro_api';

const app = express();
app.use(express.json());

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN!
});

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY!
});

// Webhook endpoint for Slack slash commands
app.post('/api/slack/command', async (req, res) => {
  try {
    const { text, user_name } = req.body;
    
    // Process the command
    const response = await processSlashCommand(text);
    
    // Send response back to Slack
    res.json({
      response_type: 'ephemeral',
      text: response
    });
  } catch (error) {
    res.status(500).json({ error: 'Command failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        javascript={`const express = require('express');
const { SlackAPI, SendGridAPI } = require('macro_api');

const app = express();
app.use(express.json());

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN
});

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY
});

// Webhook endpoint for Slack slash commands
app.post('/api/slack/command', async (req, res) => {
  try {
    const { text, user_name } = req.body;
    
    // Process the command
    const response = await processSlashCommand(text);
    
    // Send response back to Slack
    res.json({
      response_type: 'ephemeral',
      text: response
    });
  } catch (error) {
    res.status(500).json({ error: 'Command failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        title="Express.js server example"
      />

      ## Best Practices from the Start

      ### 1. Error Handling

      Always implement proper error handling:

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, MacroApiError } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

async function robustApiCall() {
  try {
    const response = await gpt.chat('Hello, world!');
    return response;
  } catch (error) {
    if (error instanceof MacroApiError) {
      // Handle specific macro_api errors
      console.error('API Error:', error.message);
      console.error('Error Code:', error.code);
      console.error('Status Code:', error.statusCode);
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}`}
        javascript={`const { ChatGPT, MacroApiError } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

async function robustApiCall() {
  try {
    const response = await gpt.chat('Hello, world!');
    return response;
  } catch (error) {
    if (error instanceof MacroApiError) {
      // Handle specific macro_api errors
      console.error('API Error:', error.message);
      console.error('Error Code:', error.code);
      console.error('Status Code:', error.statusCode);
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}`}
        title="Robust error handling"
      />

      ### 2. Use the Unified Client

      For advanced use cases, use the unified client with caching and retry logic:

      <CodeExampleSwitcher
        typescript={`import { MacroAPIClient, ChatGPT } from 'macro_api';

// Create unified client with caching
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 300, // 5 minutes
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

// API call with automatic caching and retries
async function cachedApiCall() {
  return await client.execute(
    () => gpt.chat('Generate a unique fact about space'),
    {
      service: 'chatgpt',
      method: 'chat',
      params: { prompt: 'space-fact' },
      cacheTtl: 600 // Cache for 10 minutes
    }
  );
}`}
        javascript={`const { MacroAPIClient, ChatGPT } = require('macro_api');

// Create unified client with caching
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 300, // 5 minutes
    maxSize: 1000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// API call with automatic caching and retries
async function cachedApiCall() {
  return await client.execute(
    () => gpt.chat('Generate a unique fact about space'),
    {
      service: 'chatgpt',
      method: 'chat',
      params: { prompt: 'space-fact' },
      cacheTtl: 600 // Cache for 10 minutes
    }
  );
}`}
        title="Using the unified client"
      />

      ## Next Steps

      Now that you have macro_api installed and running, here's what to explore next:

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <a href="/documentation?section=authentication" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2">Authentication Guide</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Learn how to set up API keys for different services</p>
        </a>
        <a href="/documentation?section=error-handling" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2">Error Handling</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Master robust error handling patterns</p>
        </a>
        <a href="/documentation?section=caching" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2">Caching System</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Improve performance with intelligent caching</p>
        </a>
        <a href="/documentation?section=football" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <h3 className="font-semibold mb-2">API Guides</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Dive deep into specific API integrations</p>
        </a>
      </div>

      <InfoBox type="success" title="Ready to Build!">
        You're all set! macro_api is designed to grow with your needs - start simple and add more services as your application evolves.
      </InfoBox>

      ## Need Help?

      - 📖 **Documentation**: Browse the complete API reference for each service
      - 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/cptcr/macro_api/issues)
      - 💬 **Community**: Join discussions and get help from other developers
      - 📧 **Support**: Reach out for enterprise support and custom integrations

      Welcome to the macro_api community! 🚀
    </div>
  );
};

export default GettingStartedDocs;