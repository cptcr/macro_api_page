import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Package, Download, CheckCircle, AlertTriangle, Terminal, FileCode, Zap } from 'lucide-react';

const InstallationDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Package className="h-10 w-10 mr-4 text-primary-600 dark:text-primary-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Installation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get macro_api up and running in your project
            </p>
          </div>
        </div>
      </div>

      ## System Requirements

      Before installing macro_api, ensure your system meets these requirements:

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Node.js Version
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Node.js 16.0.0 or higher (LTS recommended)
              </p>
              
              <h4 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Package Managers
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• npm 7.0.0+</li>
                <li>• yarn 1.22.0+</li>
                <li>• pnpm 6.0.0+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Environment
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• JavaScript ES2020+</li>
                <li>• TypeScript 4.5+ (optional)</li>
                <li>• Modern bundlers supported</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Package Installation

      ### Using npm (recommended)

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
npm install macro_api

# Install a specific version
npm install macro_api@3.0.0

# Install with exact version lock
npm install --save-exact macro_api`}
        javascript={`# Install the latest stable version
npm install macro_api

# Install a specific version
npm install macro_api@3.0.0

# Install with exact version lock
npm install --save-exact macro_api`}
        title="npm installation"
      />

      ### Using Yarn

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
yarn add macro_api

# Install a specific version
yarn add macro_api@3.0.0

# Install with exact version
yarn add --exact macro_api`}
        javascript={`# Install the latest stable version
yarn add macro_api

# Install a specific version
yarn add macro_api@3.0.0

# Install with exact version
yarn add --exact macro_api`}
        title="Yarn installation"
      />

      ### Using pnpm

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
pnpm add macro_api

# Install a specific version
pnpm add macro_api@3.0.0

# Install with exact version
pnpm add --save-exact macro_api`}
        javascript={`# Install the latest stable version
pnpm add macro_api

# Install a specific version
pnpm add macro_api@3.0.0

# Install with exact version
pnpm add --save-exact macro_api`}
        title="pnpm installation"
      />

      ## Verify Installation

      After installation, verify that macro_api is correctly installed:

      <CodeExampleSwitcher
        typescript={`// check-installation.ts
import { PACKAGE_INFO } from 'macro_api';

console.log('macro_api version:', PACKAGE_INFO.version);
console.log('Supported services:', PACKAGE_INFO.supportedServices.length);

// Test basic import
import { ChatGPT } from 'macro_api';
console.log('ChatGPT class imported successfully:', typeof ChatGPT);`}
        javascript={`// check-installation.js
const { PACKAGE_INFO } = require('macro_api');

console.log('macro_api version:', PACKAGE_INFO.version);
console.log('Supported services:', PACKAGE_INFO.supportedServices.length);

// Test basic import
const { ChatGPT } = require('macro_api');
console.log('ChatGPT class imported successfully:', typeof ChatGPT);`}
        title="Installation verification"
      />

      Run the verification script:

      <CodeExampleSwitcher
        typescript={`# Using TypeScript
npx tsx check-installation.ts

# Or compile and run
npx tsc check-installation.ts && node check-installation.js`}
        javascript={`# Using Node.js
node check-installation.js`}
        title="Running verification"
      />

      ## Framework-Specific Setup

      ### Next.js

      <InfoBox type="info" title="Next.js Compatibility">
        macro_api works seamlessly with both Pages Router and App Router in Next.js 12+.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['macro_api']
  },
  // For API routes using external APIs
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
    // Add other API keys as needed
  }
};

module.exports = nextConfig;`}
        javascript={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['macro_api']
  },
  // For API routes using external APIs
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
    // Add other API keys as needed
  }
};

module.exports = nextConfig;`}
        title="Next.js configuration"
      />

      ### Vite/React

      <CodeExampleSwitcher
        typescript={`// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Only expose public environment variables to the client
    'process.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME),
  },
  optimizeDeps: {
    include: ['macro_api']
  }
});`}
        javascript={`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Only expose public environment variables to the client
    'process.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME),
  },
  optimizeDeps: {
    include: ['macro_api']
  }
});`}
        title="Vite configuration"
      />

      ### Express.js

      <CodeExampleSwitcher
        typescript={`// package.json setup for Express.js
{
  "name": "my-express-app",
  "version": "1.0.0",
  "type": "module", // Enable ES modules (optional)
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "macro_api": "^3.0.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`}
        javascript={`// package.json setup for Express.js
{
  "name": "my-express-app",
  "version": "1.0.0",
  "type": "module", // Enable ES modules (optional)
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "macro_api": "^3.0.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`}
        title="Express.js package.json"
      />

      ## Environment Configuration

      ### Environment Variables Setup

      Create a `.env` file in your project root:

      <CodeExampleSwitcher
        typescript={`# .env
# AI Services
OPENAI_API_KEY=sk-your-openai-key-here
DEEPSEEK_API_KEY=your-deepseek-key-here

# Communication
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key

# Payment Processing
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret

# Development Tools
GITHUB_TOKEN=ghp_your-github-token
VERCEL_TOKEN=your-vercel-token

# Cloud Services
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-bucket-name

# Entertainment
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret

# Sports & Gaming
FOOTBALL_API_KEY=your-rapidapi-football-key
VALORANT_API_KEY=your-valorant-api-key

# Productivity
NOTION_API_KEY=secret_your-notion-integration-key`}
        javascript={`# .env
# AI Services
OPENAI_API_KEY=sk-your-openai-key-here
DEEPSEEK_API_KEY=your-deepseek-key-here

# Communication
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key

# Payment Processing
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret

# Development Tools
GITHUB_TOKEN=ghp_your-github-token
VERCEL_TOKEN=your-vercel-token

# Cloud Services
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-bucket-name

# Entertainment
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret

# Sports & Gaming
FOOTBALL_API_KEY=your-rapidapi-football-key
VALORANT_API_KEY=your-valorant-api-key

# Productivity
NOTION_API_KEY=secret_your-notion-integration-key`}
        title="Complete .env template"
      />

      ### Environment Variable Validation

      <CodeExampleSwitcher
        typescript={`// config/env.ts
export interface EnvConfig {
  openai?: {
    apiKey: string;
  };
  slack?: {
    botToken: string;
    signingSecret?: string;
  };
  stripe?: {
    secretKey: string;
    webhookSecret?: string;
  };
  // Add other services as needed
}

export function validateEnv(): EnvConfig {
  const config: EnvConfig = {};

  // Validate OpenAI
  if (process.env.OPENAI_API_KEY) {
    if (!process.env.OPENAI_API_KEY.startsWith('sk-')) {
      throw new Error('Invalid OpenAI API key format');
    }
    config.openai = {
      apiKey: process.env.OPENAI_API_KEY
    };
  }

  // Validate Slack
  if (process.env.SLACK_BOT_TOKEN) {
    if (!process.env.SLACK_BOT_TOKEN.startsWith('xoxb-')) {
      throw new Error('Invalid Slack bot token format');
    }
    config.slack = {
      botToken: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET
    };
  }

  // Validate Stripe
  if (process.env.STRIPE_SECRET_KEY) {
    if (!process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
      throw new Error('Invalid Stripe secret key format');
    }
    config.stripe = {
      secretKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
    };
  }

  return config;
}

// Usage
export const env = validateEnv();`}
        javascript={`// config/env.js
export function validateEnv() {
  const config = {};

  // Validate OpenAI
  if (process.env.OPENAI_API_KEY) {
    if (!process.env.OPENAI_API_KEY.startsWith('sk-')) {
      throw new Error('Invalid OpenAI API key format');
    }
    config.openai = {
      apiKey: process.env.OPENAI_API_KEY
    };
  }

  // Validate Slack
  if (process.env.SLACK_BOT_TOKEN) {
    if (!process.env.SLACK_BOT_TOKEN.startsWith('xoxb-')) {
      throw new Error('Invalid Slack bot token format');
    }
    config.slack = {
      botToken: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET
    };
  }

  // Validate Stripe
  if (process.env.STRIPE_SECRET_KEY) {
    if (!process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
      throw new Error('Invalid Stripe secret key format');
    }
    config.stripe = {
      secretKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
    };
  }

  return config;
}

// Usage
export const env = validateEnv();`}
        title="Environment validation"
      />

      ## TypeScript Configuration

      If you're using TypeScript, update your `tsconfig.json`:

      <CodeExampleSwitcher
        typescript={`{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve", // For React projects
    "types": ["node"]
  },
  "include": [
    "src/**/*",
    "*.ts",
    "*.js"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".next"
  ]
}`}
        javascript={`{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve", // For React projects
    "types": ["node"]
  },
  "include": [
    "src/**/*",
    "*.ts",
    "*.js"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".next"
  ]
}`}
        title="TypeScript configuration"
      />

      ## Troubleshooting

      ### Common Installation Issues

      <InfoBox type="warning" title="Common Issues">
        Here are solutions to the most common installation problems.
      </InfoBox>

      #### Issue: Module Resolution Error

      <CodeExampleSwitcher
        typescript={`// Error: Cannot resolve module 'macro_api'
// Solution: Clear cache and reinstall

# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Clear yarn cache
yarn cache clean
rm -rf node_modules yarn.lock
yarn install

# Clear pnpm cache
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install`}
        javascript={`// Error: Cannot resolve module 'macro_api'
// Solution: Clear cache and reinstall

# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Clear yarn cache
yarn cache clean
rm -rf node_modules yarn.lock
yarn install

# Clear pnpm cache
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install`}
        title="Module resolution fix"
      />

      #### Issue: TypeScript Errors

      <CodeExampleSwitcher
        typescript={`// Error: Type definitions not found
// Solution: Install @types/node if not present

npm install --save-dev @types/node

// Update tsconfig.json to include proper types
{
  "compilerOptions": {
    "types": ["node"],
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}`}
        javascript={`// Error: Type definitions not found
// Solution: Install @types/node if not present

npm install --save-dev @types/node

// Update tsconfig.json to include proper types
{
  "compilerOptions": {
    "types": ["node"],
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}`}
        title="TypeScript fixes"
      />

      #### Issue: Environment Variables Not Loading

      <CodeExampleSwitcher
        typescript={`// Install dotenv for manual environment loading
npm install dotenv

// Load environment variables manually
import 'dotenv/config';
// or
import dotenv from 'dotenv';
dotenv.config();

// Verify environment variables are loaded
console.log('Environment check:', {
  nodeEnv: process.env.NODE_ENV,
  hasOpenAI: !!process.env.OPENAI_API_KEY,
  hasSlack: !!process.env.SLACK_BOT_TOKEN
});`}
        javascript={`// Install dotenv for manual environment loading
npm install dotenv

// Load environment variables manually
require('dotenv').config();

// Verify environment variables are loaded
console.log('Environment check:', {
  nodeEnv: process.env.NODE_ENV,
  hasOpenAI: !!process.env.OPENAI_API_KEY,
  hasSlack: !!process.env.SLACK_BOT_TOKEN
});`}
        title="Environment variable loading"
      />

      ### Version Compatibility

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Version Compatibility Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 px-4">macro_api Version</th>
                  <th className="text-left py-2 px-4">Node.js</th>
                  <th className="text-left py-2 px-4">TypeScript</th>
                  <th className="text-left py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">3.x</td>
                  <td className="py-2 px-4">16.0.0+</td>
                  <td className="py-2 px-4">4.5+</td>
                  <td className="py-2 px-4">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">2.x</td>
                  <td className="py-2 px-4">14.0.0+</td>
                  <td className="py-2 px-4">4.0+</td>
                  <td className="py-2 px-4">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">
                      Maintenance
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-mono">1.x</td>
                  <td className="py-2 px-4">12.0.0+</td>
                  <td className="py-2 px-4">3.8+</td>
                  <td className="py-2 px-4">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                      Deprecated
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      ## Production Deployment

      ### Docker Setup

      <CodeExampleSwitcher
        typescript={`# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the app
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]`}
        javascript={`# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the app
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]`}
        title="Docker configuration"
      />

      ### Environment Variables in Production

      <InfoBox type="security" title="Production Security">
        Never include actual API keys in your Docker images or version control. Use secure environment variable injection.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN}
      - STRIPE_SECRET_KEY=\${STRIPE_SECRET_KEY}
    env_file:
      - .env.production
    restart: unless-stopped`}
        javascript={`# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN}
      - STRIPE_SECRET_KEY=\${STRIPE_SECRET_KEY}
    env_file:
      - .env.production
    restart: unless-stopped`}
        title="Docker Compose setup"
      />

      ## What's Next?

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <a href="/documentation?section=basic-usage" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <Terminal className="h-6 w-6 mb-2 text-blue-600" />
          <h3 className="font-semibold mb-2">Basic Usage</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Learn the fundamentals of using macro_api</p>
        </a>
        <a href="/documentation?section=authentication" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
          <CheckCircle className="h-6 w-6 mb-2 text-green-600" />
          <h3 className="font-semibold mb-2">Authentication</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Set up API keys for different services</p>
        </a>
      </div>

      <InfoBox type="success" title="Installation Complete!">
        macro_api is now installed and ready to use. Continue to the next section to learn basic usage patterns.
      </InfoBox>
    </div>
  );
};

export default InstallationDocs;