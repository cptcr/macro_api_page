import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Package, Download, CheckCircle, AlertTriangle, Terminal, FileCode, Zap, Shield, AlertCircle, RefreshCw, ExternalLink, Settings } from 'lucide-react';

const InstallationDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <Package className="h-10 w-10 mr-4 text-primary-600 dark:text-primary-400" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Installation & Setup</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete guide to installing and configuring macro_api in your project
            </p>
          </div>
        </div>
      </div>

      ## System Requirements

      Before installing macro_api, ensure your system meets these requirements:

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Minimum Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Runtime Environment
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-6">
                <li>• Node.js 16.0.0 or higher (LTS recommended)</li>
                <li>• npm 7.0.0+ or yarn 1.22.0+ or pnpm 6.0.0+</li>
                <li>• Modern browsers supporting ES2020</li>
              </ul>
              
              <h4 className="font-medium mb-3 mt-4 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Development Environment
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-6">
                <li>• TypeScript 4.5+ (recommended)</li>
                <li>• VS Code or similar IDE with TypeScript support</li>
                <li>• Git for version control</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Framework Compatibility
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-6">
                <li>• Next.js 12+ (Pages & App Router)</li>
                <li>• React 16.8+ (with hooks)</li>
                <li>• Express.js 4.0+</li>
                <li>• NestJS 8.0+</li>
                <li>• Vite, Webpack, or similar bundlers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Package Installation

      ### Method 1: npm (Recommended)

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
npm install macro_api

# Install a specific version
npm install macro_api@3.0.0

# Install with exact version lock
npm install --save-exact macro_api

# Install with development dependencies
npm install macro_api --save-dev

# For global CLI usage (if available)
npm install -g macro_api`}
        javascript={`# Install the latest stable version
npm install macro_api

# Install a specific version
npm install macro_api@3.0.0

# Install with exact version lock
npm install --save-exact macro_api

# Install with development dependencies
npm install macro_api --save-dev

# For global CLI usage (if available)
npm install -g macro_api`}
        title="npm installation commands"
      />

      ### Method 2: Yarn

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
yarn add macro_api

# Install a specific version
yarn add macro_api@3.0.0

# Install with exact version
yarn add --exact macro_api

# Install as dev dependency
yarn add macro_api --dev

# Upgrade to latest version
yarn upgrade macro_api`}
        javascript={`# Install the latest stable version
yarn add macro_api

# Install a specific version
yarn add macro_api@3.0.0

# Install with exact version
yarn add --exact macro_api

# Install as dev dependency
yarn add macro_api --dev

# Upgrade to latest version
yarn upgrade macro_api`}
        title="Yarn installation commands"
      />

      ### Method 3: pnpm

      <CodeExampleSwitcher
        typescript={`# Install the latest stable version
pnpm add macro_api

# Install a specific version
pnpm add macro_api@3.0.0

# Install with exact version
pnpm add --save-exact macro_api

# Install as dev dependency
pnpm add -D macro_api

# Update to latest version
pnpm update macro_api`}
        javascript={`# Install the latest stable version
pnpm add macro_api

# Install a specific version
pnpm add macro_api@3.0.0

# Install with exact version
pnpm add --save-exact macro_api

# Install as dev dependency
pnpm add -D macro_api

# Update to latest version
pnpm update macro_api`}
        title="pnpm installation commands"
      />

      ## Verification & Testing

      ### Basic Installation Verification

      <CodeExampleSwitcher
        typescript={`// verify-installation.ts
import { PACKAGE_INFO, ChatGPT, MacroAPIClient } from 'macro_api';

console.log('🚀 macro_api Installation Verification');
console.log('=====================================');
console.log(\`Version: \${PACKAGE_INFO.version}\`);
console.log(\`Supported Services: \${PACKAGE_INFO.supportedServices.length}\`);
console.log('');

// Test basic imports
console.log('✅ Core exports available:');
console.log(\`  - PACKAGE_INFO: \${typeof PACKAGE_INFO}\`);
console.log(\`  - ChatGPT: \${typeof ChatGPT}\`);
console.log(\`  - MacroAPIClient: \${typeof MacroAPIClient}\`);

// Test instantiation (without API keys)
try {
  const client = new MacroAPIClient();
  console.log('✅ MacroAPIClient instantiated successfully');
} catch (error) {
  console.log('❌ MacroAPIClient instantiation failed:', error);
}

console.log('');
console.log('🎉 Installation verified successfully!');
console.log('Next step: Configure your API keys in .env file');`}
        javascript={`// verify-installation.js
const { PACKAGE_INFO, ChatGPT, MacroAPIClient } = require('macro_api');

console.log('🚀 macro_api Installation Verification');
console.log('=====================================');
console.log(\`Version: \${PACKAGE_INFO.version}\`);
console.log(\`Supported Services: \${PACKAGE_INFO.supportedServices.length}\`);
console.log('');

// Test basic imports
console.log('✅ Core exports available:');
console.log(\`  - PACKAGE_INFO: \${typeof PACKAGE_INFO}\`);
console.log(\`  - ChatGPT: \${typeof ChatGPT}\`);
console.log(\`  - MacroAPIClient: \${typeof MacroAPIClient}\`);

// Test instantiation (without API keys)
try {
  const client = new MacroAPIClient();
  console.log('✅ MacroAPIClient instantiated successfully');
} catch (error) {
  console.log('❌ MacroAPIClient instantiation failed:', error);
}

console.log('');
console.log('🎉 Installation verified successfully!');
console.log('Next step: Configure your API keys in .env file');`}
        title="Installation verification script"
      />

      Run the verification:

      <CodeExampleSwitcher
        typescript={`# Using TypeScript directly (with tsx)
npx tsx verify-installation.ts

# Or compile first
npx tsc verify-installation.ts && node verify-installation.js

# Using ts-node
npx ts-node verify-installation.ts`}
        javascript={`# Using Node.js
node verify-installation.js

# Or with npm script
npm run verify`}
        title="Running verification"
      />

      ### Advanced Testing Script

      <CodeExampleSwitcher
        typescript={`// advanced-test.ts
import { 
  ChatGPT, 
  SpotifyAPI, 
  StripeAPI,
  SlackAPI,
  MacroAPIClient,
  CacheManager,
  ErrorHandler 
} from 'macro_api';

interface TestResult {
  name: string;
  status: 'pass' | 'fail' | 'skip';
  message: string;
  duration: number;
}

class InstallationTester {
  private results: TestResult[] = [];

  async runTest(name: string, testFn: () => Promise<void> | void): Promise<void> {
    const startTime = Date.now();
    try {
      await testFn();
      this.results.push({
        name,
        status: 'pass',
        message: 'Test passed',
        duration: Date.now() - startTime
      });
    } catch (error) {
      this.results.push({
        name,
        status: 'fail',
        message: error instanceof Error ? error.message : 'Unknown error',
        duration: Date.now() - startTime
      });
    }
  }

  async runAllTests(): Promise<void> {
    console.log('🧪 Running Advanced Installation Tests\\n');

    // Test 1: Basic imports
    await this.runTest('Basic Imports', () => {
      if (!ChatGPT || !SpotifyAPI || !StripeAPI) {
        throw new Error('Core API classes not available');
      }
    });

    // Test 2: Client instantiation
    await this.runTest('Client Instantiation', () => {
      new MacroAPIClient();
      new ChatGPT({ apiKey: 'test-key' });
      new SpotifyAPI({ clientId: 'test', clientSecret: 'test' });
    });

    // Test 3: Error handling
    await this.runTest('Error Handling', () => {
      const handler = ErrorHandler.getInstance();
      const error = handler.handle(new Error('Test error'));
      if (!error.timestamp) {
        throw new Error('Error handler not working properly');
      }
    });

    // Test 4: Cache system
    await this.runTest('Cache System', async () => {
      const cache = new CacheManager({ type: 'memory', ttl: 300 });
      await cache.set('test-key', 'test-value');
      const value = await cache.get('test-key');
      if (value !== 'test-value') {
        throw new Error('Cache system not working');
      }
      await cache.close();
    });

    // Test 5: TypeScript types
    await this.runTest('TypeScript Types', () => {
      // This test only runs with TypeScript
      const config: any = { type: 'memory', ttl: 300 };
      if (typeof config !== 'object') {
        throw new Error('Type checking failed');
      }
    });

    this.printResults();
  }

  private printResults(): void {
    console.log('\\n📊 Test Results');
    console.log('================');
    
    let passed = 0;
    let failed = 0;
    
    this.results.forEach(result => {
      const icon = result.status === 'pass' ? '✅' : '❌';
      const duration = result.duration.toString().padStart(4, ' ');
      console.log(\`\${icon} \${result.name.padEnd(25)} (\${duration}ms) - \${result.message}\`);
      
      if (result.status === 'pass') passed++;
      else failed++;
    });
    
    console.log('\\n📈 Summary');
    console.log(\`Passed: \${passed}\`);
    console.log(\`Failed: \${failed}\`);
    console.log(\`Total:  \${this.results.length}\`);
    
    if (failed === 0) {
      console.log('\\n🎉 All tests passed! macro_api is ready to use.');
    } else {
      console.log('\\n⚠️  Some tests failed. Check the issues above.');
    }
  }
}

// Run the tests
const tester = new InstallationTester();
tester.runAllTests().catch(console.error);`}
        javascript={`// advanced-test.js
const { 
  ChatGPT, 
  SpotifyAPI, 
  StripeAPI,
  SlackAPI,
  MacroAPIClient,
  CacheManager,
  ErrorHandler 
} = require('macro_api');

class InstallationTester {
  constructor() {
    this.results = [];
  }

  async runTest(name, testFn) {
    const startTime = Date.now();
    try {
      await testFn();
      this.results.push({
        name,
        status: 'pass',
        message: 'Test passed',
        duration: Date.now() - startTime
      });
    } catch (error) {
      this.results.push({
        name,
        status: 'fail',
        message: error.message || 'Unknown error',
        duration: Date.now() - startTime
      });
    }
  }

  async runAllTests() {
    console.log('🧪 Running Advanced Installation Tests\\n');

    // Test basic functionality
    await this.runTest('Basic Imports', () => {
      if (!ChatGPT || !SpotifyAPI || !StripeAPI) {
        throw new Error('Core API classes not available');
      }
    });

    await this.runTest('Client Instantiation', () => {
      new MacroAPIClient();
      new ChatGPT({ apiKey: 'test-key' });
    });

    this.printResults();
  }

  printResults() {
    console.log('\\n📊 Test Results');
    console.log('================');
    
    let passed = 0;
    let failed = 0;
    
    this.results.forEach(result => {
      const icon = result.status === 'pass' ? '✅' : '❌';
      console.log(\`\${icon} \${result.name} - \${result.message}\`);
      
      if (result.status === 'pass') passed++;
      else failed++;
    });
    
    console.log(\`\\nPassed: \${passed}, Failed: \${failed}\`);
  }
}

const tester = new InstallationTester();
tester.runAllTests().catch(console.error);`}
        title="Advanced testing script"
      />

      ## Environment Configuration

      ### Environment Variables Setup

      Create a comprehensive `.env` file in your project root:

      <CodeExampleSwitcher
        typescript={`# .env - Complete configuration template
# ===========================================

# Node Environment
NODE_ENV=development

# ===== AI & Language Models =====
OPENAI_API_KEY=sk-your-openai-key-here
OPENAI_ORG_ID=org-your-organization-id-optional
DEEPSEEK_API_KEY=your-deepseek-key-here

# ===== Communication & Messaging =====
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SLACK_SIGNING_SECRET=your-slack-signing-secret
SLACK_APP_TOKEN=xapp-your-slack-app-token
SENDGRID_API_KEY=SG.your-sendgrid-key

# ===== Payment Processing =====
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_SANDBOX=true

# ===== Development Tools =====
GITHUB_TOKEN=ghp_your-github-personal-access-token
VERCEL_TOKEN=your-vercel-access-token
VERCEL_PROJECT_ID=your-project-id
DOCKER_HUB_USERNAME=your-dockerhub-username
DOCKER_HUB_PASSWORD=your-dockerhub-password

# ===== Cloud Services =====
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-s3-bucket-name

# ===== Entertainment & Media =====
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
YOUTUBE_API_KEY=your-youtube-api-key

# ===== Sports & Gaming =====
FOOTBALL_API_KEY=your-rapidapi-football-key
VALORANT_API_KEY=your-valorant-api-key

# ===== Productivity =====
NOTION_API_KEY=secret_your-notion-integration-key
NOTION_DATABASE_ID=your-notion-database-id

# ===== Cache Configuration =====
REDIS_URL=redis://localhost:6379
CACHE_TTL=3600
CACHE_MAX_SIZE=1000

# ===== Application Settings =====
APP_NAME=My Awesome App
APP_URL=http://localhost:3000
API_BASE_URL=http://localhost:3000/api`}
        javascript={`# .env - Complete configuration template
# ===========================================

# Node Environment
NODE_ENV=development

# ===== AI & Language Models =====
OPENAI_API_KEY=sk-your-openai-key-here
DEEPSEEK_API_KEY=your-deepseek-key-here

# ===== Communication & Messaging =====
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SLACK_SIGNING_SECRET=your-slack-signing-secret
SENDGRID_API_KEY=SG.your-sendgrid-key

# ===== Payment Processing =====
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret

# ===== Development Tools =====
GITHUB_TOKEN=ghp_your-github-token
VERCEL_TOKEN=your-vercel-token

# ===== Cloud Services =====
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
S3_BUCKET_NAME=your-bucket-name

# ===== Entertainment =====
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret

# ===== Cache & App Settings =====
REDIS_URL=redis://localhost:6379
APP_URL=http://localhost:3000`}
        title="Complete environment variables template"
      />

      ### Environment Validation

      <CodeExampleSwitcher
        typescript={`// config/environment.ts
import { z } from 'zod';

// Define environment schema with validation
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // API Keys (optional validation)
  OPENAI_API_KEY: z.string().startsWith('sk-').optional(),
  SLACK_BOT_TOKEN: z.string().startsWith('xoxb-').optional(),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_').optional(),
  GITHUB_TOKEN: z.string().startsWith('ghp_').optional(),
  
  // URLs and endpoints
  APP_URL: z.string().url().default('http://localhost:3000'),
  REDIS_URL: z.string().url().optional(),
  
  // Numeric values
  CACHE_TTL: z.string().transform(Number).default('3600'),
  CACHE_MAX_SIZE: z.string().transform(Number).default('1000'),
});

export type Environment = z.infer<typeof envSchema>;

export function validateEnvironment(): Environment {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error('❌ Environment validation failed:');
    if (error instanceof z.ZodError) {
      error.errors.forEach(err => {
        console.error(\`  - \${err.path.join('.')}: \${err.message}\`);
      });
    }
    process.exit(1);
  }
}

// Export validated environment
export const env = validateEnvironment();

// Environment checker utility
export function checkRequiredServices(services: string[]): void {
  const missing: string[] = [];
  
  const serviceKeys: Record<string, string> = {
    openai: 'OPENAI_API_KEY',
    slack: 'SLACK_BOT_TOKEN',
    stripe: 'STRIPE_SECRET_KEY',
    github: 'GITHUB_TOKEN',
    spotify: 'SPOTIFY_CLIENT_ID',
    vercel: 'VERCEL_TOKEN',
    aws: 'AWS_ACCESS_KEY_ID',
  };
  
  services.forEach(service => {
    const key = serviceKeys[service.toLowerCase()];
    if (key && !process.env[key]) {
      missing.push(\`\${service}: \${key}\`);
    }
  });
  
  if (missing.length > 0) {
    console.warn('⚠️  Missing API keys for services:');
    missing.forEach(service => console.warn(\`  - \${service}\`));
    console.warn('   Add these to your .env file to use these services\\n');
  }
}`}
        javascript={`// config/environment.js
function validateEnvironment() {
  const errors = [];
  
  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 16) {
    errors.push(\`Node.js version \${nodeVersion} is not supported. Please use Node.js 16 or higher.\`);
  }
  
  // Validate API key formats
  if (process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY.startsWith('sk-')) {
    errors.push('OPENAI_API_KEY must start with "sk-"');
  }
  
  if (process.env.SLACK_BOT_TOKEN && !process.env.SLACK_BOT_TOKEN.startsWith('xoxb-')) {
    errors.push('SLACK_BOT_TOKEN must start with "xoxb-"');
  }
  
  if (process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
    errors.push('STRIPE_SECRET_KEY must start with "sk_"');
  }
  
  if (errors.length > 0) {
    console.error('❌ Environment validation failed:');
    errors.forEach(error => console.error(\`  - \${error}\`));
    process.exit(1);
  }
  
  console.log('✅ Environment validation passed');
}

function checkRequiredServices(services) {
  const missing = [];
  
  const serviceKeys = {
    openai: 'OPENAI_API_KEY',
    slack: 'SLACK_BOT_TOKEN',
    stripe: 'STRIPE_SECRET_KEY',
    github: 'GITHUB_TOKEN',
    spotify: 'SPOTIFY_CLIENT_ID',
  };
  
  services.forEach(service => {
    const key = serviceKeys[service.toLowerCase()];
    if (key && !process.env[key]) {
      missing.push(\`\${service}: \${key}\`);
    }
  });
  
  if (missing.length > 0) {
    console.warn('⚠️  Missing API keys:');
    missing.forEach(service => console.warn(\`  - \${service}\`));
  }
}

module.exports = {
  validateEnvironment,
  checkRequiredServices
};`}
        title="Environment validation utilities"
      />

      ## Framework-Specific Setup

      ### Next.js Configuration

      <InfoBox type="info" title="Next.js Compatibility">
        macro_api works seamlessly with both Pages Router and App Router in Next.js 12+.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better compatibility
  experimental: {
    serverComponentsExternalPackages: ['macro_api'],
    esmExternals: true,
  },
  
  // Webpack configuration for proper module resolution
  webpack: (config, { isServer }) => {
    // Fix for 'fs' module issues in client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Environment variables for client-side
  env: {
    // Only expose non-sensitive variables to client
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
  },
  
  // Headers for CORS if needed
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type,Authorization' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;`}
        javascript={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['macro_api'],
  },
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
  },
};

module.exports = nextConfig;`}
        title="Next.js configuration"
      />

      ### TypeScript Configuration

      <CodeExampleSwitcher
        typescript={`// tsconfig.json - Optimized for macro_api
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
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
    "incremental": true,
    "jsx": "preserve",
    
    // Path mapping (optional)
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    },
    
    // Type checking
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    
    // Additional type definitions
    "types": ["node", "@types/jest"]
  },
  "include": [
    "src/**/*",
    "*.ts",
    "*.js",
    ".env.d.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".next",
    "coverage"
  ]
}`}
        javascript={`// jsconfig.json - For JavaScript projects
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "src/**/*",
    "*.js"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}`}
        title="TypeScript/JavaScript configuration"
      />

      ### Environment Types Declaration

      <CodeExampleSwitcher
        typescript={`// types/environment.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      
      // AI Services
      OPENAI_API_KEY?: string;
      OPENAI_ORG_ID?: string;
      DEEPSEEK_API_KEY?: string;
      
      // Communication
      SLACK_BOT_TOKEN?: string;
      SLACK_SIGNING_SECRET?: string;
      SENDGRID_API_KEY?: string;
      
      // Payment Processing
      STRIPE_SECRET_KEY?: string;
      STRIPE_PUBLISHABLE_KEY?: string;
      STRIPE_WEBHOOK_SECRET?: string;
      PAYPAL_CLIENT_ID?: string;
      PAYPAL_CLIENT_SECRET?: string;
      PAYPAL_SANDBOX?: string;
      
      // Development Tools
      GITHUB_TOKEN?: string;
      VERCEL_TOKEN?: string;
      DOCKER_HUB_USERNAME?: string;
      DOCKER_HUB_PASSWORD?: string;
      
      // Cloud Services
      AWS_ACCESS_KEY_ID?: string;
      AWS_SECRET_ACCESS_KEY?: string;
      AWS_REGION?: string;
      S3_BUCKET_NAME?: string;
      
      // Entertainment
      SPOTIFY_CLIENT_ID?: string;
      SPOTIFY_CLIENT_SECRET?: string;
      SPOTIFY_REDIRECT_URI?: string;
      YOUTUBE_API_KEY?: string;
      
      // Sports & Gaming
      FOOTBALL_API_KEY?: string;
      VALORANT_API_KEY?: string;
      
      // Productivity
      NOTION_API_KEY?: string;
      NOTION_DATABASE_ID?: string;
      
      // Cache & App
      REDIS_URL?: string;
      CACHE_TTL?: string;
      APP_URL?: string;
    }
  }
}

export {};`}
        javascript={`// This file is not needed for JavaScript projects
// Types are automatically inferred`}
        title="Environment types (TypeScript only)"
      />

      ## Error Handling & Troubleshooting

      <InfoBox type="warning" title="Common Issues">
        Most installation issues can be resolved by following the troubleshooting steps below.
      </InfoBox>

      ### Common Installation Errors

      #### 1. Module Resolution Errors

      <CodeExampleSwitcher
        typescript={`// ❌ Error: Cannot resolve module 'macro_api'
// ❌ Error: Module not found: Can't resolve 'macro_api'

// 🔧 Solution 1: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

// 🔧 Solution 2: Check package.json
// Ensure macro_api is listed in dependencies
{
  "dependencies": {
    "macro_api": "^3.0.0"
  }
}

// 🔧 Solution 3: Verify Node.js version
node --version  // Should be 16.0.0 or higher
npm --version   // Should be 7.0.0 or higher

// 🔧 Solution 4: Check import syntax
// ✅ Correct ES modules import
import { ChatGPT } from 'macro_api';

// ✅ Correct CommonJS import
const { ChatGPT } = require('macro_api');

// ❌ Incorrect mixed syntax
import ChatGPT = require('macro_api'); // Don't do this`}
        javascript={`// ❌ Error: Cannot find module 'macro_api'
// ❌ Error: Module 'macro_api' not found

// 🔧 Solution 1: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

// 🔧 Solution 2: Verify installation
npm list macro_api

// 🔧 Solution 3: Check require syntax
// ✅ Correct
const { ChatGPT } = require('macro_api');

// ❌ Incorrect
const ChatGPT = require('macro_api/ChatGPT'); // Don't do this`}
        title="Module resolution fixes"
      />

      #### 2. TypeScript Compilation Errors

      <CodeExampleSwitcher
        typescript={`// ❌ Error: Type definitions not found
// ❌ Error: Module '"macro_api"' has no exported member 'ChatGPT'

// 🔧 Solution 1: Install @types/node
npm install --save-dev @types/node

// 🔧 Solution 2: Update tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "types": ["node"]
  }
}

// 🔧 Solution 3: Clear TypeScript cache
rm -rf .tsbuildinfo
npx tsc --build --clean

// 🔧 Solution 4: Restart TypeScript server in VS Code
// Command Palette -> "TypeScript: Restart TS Server"

// 🔧 Solution 5: Check import syntax
// ✅ Correct named imports
import { ChatGPT, SpotifyAPI } from 'macro_api';

// ✅ Correct namespace import
import * as MacroAPI from 'macro_api';
const { ChatGPT } = MacroAPI;`}
        javascript={`// JavaScript projects typically don't have TypeScript errors
// If using JSDoc for type checking:

// 🔧 Enable type checking in VS Code
// Add to settings.json:
{
  "js/ts.implicitProjectConfig.checkJs": true
}

// 🔧 Use JSDoc for type hints
/**
 * @typedef {import('macro_api').ChatGPT} ChatGPT
 */`}
        title="TypeScript compilation fixes"
      />

      #### 3. Environment Variable Issues

      <CodeExampleSwitcher
        typescript={`// ❌ Error: API key not found or invalid format
// ❌ Error: process.env.OPENAI_API_KEY is undefined

// 🔧 Solution 1: Install and configure dotenv
npm install dotenv

// Load in your app entry point
import 'dotenv/config';
// or
import dotenv from 'dotenv';
dotenv.config();

// 🔧 Solution 2: Verify .env file location
// .env should be in project root (same level as package.json)
project-root/
├── .env
├── package.json
└── src/

// 🔧 Solution 3: Check .env file format
// ✅ Correct format (no spaces around =)
OPENAI_API_KEY=sk-your-key-here
SLACK_BOT_TOKEN=xoxb-your-token

// ❌ Incorrect format
OPENAI_API_KEY = sk-your-key-here  // No spaces!
SLACK_BOT_TOKEN="xoxb-token"       // No quotes needed!

// 🔧 Solution 4: Environment-specific files
// .env.local (local development)
// .env.development (development)
// .env.production (production)

// 🔧 Solution 5: Debug environment loading
console.log('Environment variables loaded:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('OpenAI Key exists:', !!process.env.OPENAI_API_KEY);
console.log('Slack Token exists:', !!process.env.SLACK_BOT_TOKEN);`}
        javascript={`// 🔧 Environment variable debugging for JavaScript
require('dotenv').config();

// Check if variables are loaded
console.log('Environment check:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('API keys loaded:', {
  openai: !!process.env.OPENAI_API_KEY,
  slack: !!process.env.SLACK_BOT_TOKEN,
  stripe: !!process.env.STRIPE_SECRET_KEY
});

// Validate API key formats
function validateApiKeys() {
  const checks = [
    { name: 'OpenAI', key: process.env.OPENAI_API_KEY, prefix: 'sk-' },
    { name: 'Slack', key: process.env.SLACK_BOT_TOKEN, prefix: 'xoxb-' },
    { name: 'Stripe', key: process.env.STRIPE_SECRET_KEY, prefix: 'sk_' }
  ];
  
  checks.forEach(check => {
    if (check.key && !check.key.startsWith(check.prefix)) {
      console.error(\`❌ \${check.name} API key format invalid\`);
    } else if (check.key) {
      console.log(\`✅ \${check.name} API key format valid\`);
    }
  });
}`}
        title="Environment variable fixes"
      />

      #### 4. Runtime Errors

      <CodeExampleSwitcher
        typescript={`// ❌ Error: fetch is not defined (Node.js < 18)
// ❌ Error: XMLHttpRequest is not defined

// 🔧 Solution 1: Install node-fetch for older Node.js
npm install node-fetch@2
npm install --save-dev @types/node-fetch

// Then in your code:
import fetch from 'node-fetch';
global.fetch = fetch as any;

// 🔧 Solution 2: Use Node.js 18+ (recommended)
// Node.js 18+ has built-in fetch support

// 🔧 Solution 3: Polyfill for browser compatibility
// In your bundler config (webpack, vite, etc.)
// Add polyfills for Node.js modules if needed

// ❌ Error: Buffer is not defined (browser environment)
// 🔧 Solution: Add polyfill in your bundler config
// webpack.config.js
module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};

// ❌ Error: Cannot use import statement outside a module
// 🔧 Solution: Update package.json
{
  "type": "module",
  "main": "dist/index.js",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  }
}`}
        javascript={`// Runtime error fixes for JavaScript

// ❌ Error: fetch is not defined
// 🔧 Solution 1: Install node-fetch
npm install node-fetch@2

// Use in your code:
const fetch = require('node-fetch');

// 🔧 Solution 2: Use axios as alternative
npm install axios
const axios = require('axios');

// ❌ Error: require() of ES modules not supported
// 🔧 Solution: Use dynamic import
async function loadMacroAPI() {
  const { ChatGPT } = await import('macro_api');
  return ChatGPT;
}

// Or update to ES modules in package.json:
{
  "type": "module"
}`}
        title="Runtime error fixes"
      />

      ### Diagnostic Tools

      <CodeExampleSwitcher
        typescript={`// diagnostic-tool.ts - Comprehensive system check
import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface DiagnosticResult {
  category: string;
  checks: Array<{
    name: string;
    status: 'pass' | 'fail' | 'warning';
    message: string;
    solution?: string;
  }>;
}

class SystemDiagnostic {
  private results: DiagnosticResult[] = [];

  async runDiagnostics(): Promise<void> {
    console.log('🔍 Running macro_api System Diagnostics\\n');

    await this.checkSystemRequirements();
    await this.checkPackageInstallation();
    await this.checkEnvironment();
    await this.checkConfiguration();
    await this.printResults();
  }

  private async checkSystemRequirements(): Promise<void> {
    const checks = [];

    try {
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      checks.push({
        name: 'Node.js Version',
        status: majorVersion >= 16 ? 'pass' : 'fail',
        message: \`\${nodeVersion} (required: >= 16.0.0)\`,
        solution: majorVersion < 16 ? 'Upgrade to Node.js 16 or higher' : undefined
      });
    } catch (error) {
      checks.push({
        name: 'Node.js Version',
        status: 'fail' as const,
        message: 'Unable to detect Node.js version',
        solution: 'Install Node.js 16 or higher'
      });
    }

    try {
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      const majorNpmVersion = parseInt(npmVersion.split('.')[0]);
      
      checks.push({
        name: 'npm Version',
        status: majorNpmVersion >= 7 ? 'pass' : 'warning',
        message: \`\${npmVersion} (recommended: >= 7.0.0)\`,
        solution: majorNpmVersion < 7 ? 'Update npm: npm install -g npm@latest' : undefined
      });
    } catch (error) {
      checks.push({
        name: 'npm Version',
        status: 'warning' as const,
        message: 'Unable to detect npm version'
      });
    }

    this.results.push({
      category: 'System Requirements',
      checks
    });
  }

  private async checkPackageInstallation(): Promise<void> {
    const checks = [];

    try {
      const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
      const hasMacroApi = packageJson.dependencies?.['macro_api'] || 
                         packageJson.devDependencies?.['macro_api'];
      
      checks.push({
        name: 'macro_api in package.json',
        status: hasMacroApi ? 'pass' : 'fail',
        message: hasMacroApi ? \`Version: \${hasMacroApi}\` : 'Not found in dependencies',
        solution: !hasMacroApi ? 'Run: npm install macro_api' : undefined
      });
    } catch (error) {
      checks.push({
        name: 'package.json',
        status: 'fail' as const,
        message: 'package.json not found or invalid',
        solution: 'Create a valid package.json file'
      });
    }

    try {
      require.resolve('macro_api');
      checks.push({
        name: 'macro_api Module Resolution',
        status: 'pass' as const,
        message: 'Successfully resolved'
      });
    } catch (error) {
      checks.push({
        name: 'macro_api Module Resolution',
        status: 'fail' as const,
        message: 'Cannot resolve module',
        solution: 'Run: npm install macro_api'
      });
    }

    this.results.push({
      category: 'Package Installation',
      checks
    });
  }

  private async checkEnvironment(): Promise<void> {
    const checks = [];

    // Check .env file
    const envExists = existsSync('.env');
    checks.push({
      name: '.env File',
      status: envExists ? 'pass' : 'warning',
      message: envExists ? 'Found' : 'Not found',
      solution: !envExists ? 'Create .env file with your API keys' : undefined
    });

    // Check common API keys
    const apiKeys = [
      { name: 'OpenAI', env: 'OPENAI_API_KEY', prefix: 'sk-' },
      { name: 'Slack', env: 'SLACK_BOT_TOKEN', prefix: 'xoxb-' },
      { name: 'Stripe', env: 'STRIPE_SECRET_KEY', prefix: 'sk_' },
    ];

    apiKeys.forEach(({ name, env, prefix }) => {
      const value = process.env[env];
      if (!value) {
        checks.push({
          name: \`\${name} API Key\`,
          status: 'warning' as const,
          message: 'Not configured',
          solution: \`Add \${env} to your .env file\`
        });
      } else if (!value.startsWith(prefix)) {
        checks.push({
          name: \`\${name} API Key Format\`,
          status: 'fail' as const,
          message: \`Invalid format (should start with \${prefix})\`,
          solution: \`Check your \${env} format\`
        });
      } else {
        checks.push({
          name: \`\${name} API Key\`,
          status: 'pass' as const,
          message: 'Configured correctly'
        });
      }
    });

    this.results.push({
      category: 'Environment Configuration',
      checks
    });
  }

  private async checkConfiguration(): Promise<void> {
    const checks = [];

    // Check TypeScript configuration
    if (existsSync('tsconfig.json')) {
      try {
        const tsConfig = JSON.parse(readFileSync('tsconfig.json', 'utf8'));
        const moduleResolution = tsConfig.compilerOptions?.moduleResolution;
        
        checks.push({
          name: 'TypeScript Module Resolution',
          status: moduleResolution === 'node' ? 'pass' : 'warning',
          message: \`\${moduleResolution || 'not set'}\`,
          solution: moduleResolution !== 'node' ? 'Set moduleResolution to "node" in tsconfig.json' : undefined
        });
      } catch (error) {
        checks.push({
          name: 'TypeScript Configuration',
          status: 'warning' as const,
          message: 'Invalid tsconfig.json'
        });
      }
    }

    this.results.push({
      category: 'Configuration',
      checks
    });
  }

  private async printResults(): Promise<void> {
    let totalChecks = 0;
    let passedChecks = 0;
    let failedChecks = 0;
    let warningChecks = 0;

    this.results.forEach(result => {
      console.log(\`\\n📋 \${result.category}\`);
      console.log('='.repeat(result.category.length + 3));
      
      result.checks.forEach(check => {
        totalChecks++;
        const icon = check.status === 'pass' ? '✅' : check.status === 'fail' ? '❌' : '⚠️';
        console.log(\`\${icon} \${check.name}: \${check.message}\`);
        
        if (check.solution) {
          console.log(\`   💡 Solution: \${check.solution}\`);
        }
        
        if (check.status === 'pass') passedChecks++;
        else if (check.status === 'fail') failedChecks++;
        else warningChecks++;
      });
    });

    console.log('\\n📊 Summary');
    console.log('===========');
    console.log(\`Total checks: \${totalChecks}\`);
    console.log(\`✅ Passed: \${passedChecks}\`);
    console.log(\`❌ Failed: \${failedChecks}\`);
    console.log(\`⚠️  Warnings: \${warningChecks}\`);

    if (failedChecks === 0 && warningChecks === 0) {
      console.log('\\n🎉 All checks passed! macro_api is ready to use.');
    } else if (failedChecks === 0) {
      console.log('\\n👍 No critical issues found. Warnings can be addressed for optimal experience.');
    } else {
      console.log('\\n🔧 Please fix the failed checks before using macro_api.');
    }
  }
}

// Run diagnostics
const diagnostic = new SystemDiagnostic();
diagnostic.runDiagnostics().catch(console.error);`}
        javascript={`// diagnostic-tool.js - System check for JavaScript
const { execSync } = require('child_process');
const { readFileSync, existsSync } = require('fs');

class SystemDiagnostic {
  constructor() {
    this.results = [];
  }

  async runDiagnostics() {
    console.log('🔍 Running macro_api System Diagnostics\\n');

    this.checkSystemRequirements();
    this.checkPackageInstallation();
    this.checkEnvironment();
    this.printResults();
  }

  checkSystemRequirements() {
    const checks = [];

    try {
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      checks.push({
        name: 'Node.js Version',
        status: majorVersion >= 16 ? 'pass' : 'fail',
        message: \`\${nodeVersion} (required: >= 16.0.0)\`,
        solution: majorVersion < 16 ? 'Upgrade to Node.js 16+' : undefined
      });
    } catch (error) {
      checks.push({
        name: 'Node.js Version',
        status: 'fail',
        message: 'Unable to detect version'
      });
    }

    this.results.push({
      category: 'System Requirements',
      checks
    });
  }

  checkPackageInstallation() {
    const checks = [];

    try {
      require.resolve('macro_api');
      checks.push({
        name: 'macro_api Installation',
        status: 'pass',
        message: 'Successfully installed'
      });
    } catch (error) {
      checks.push({
        name: 'macro_api Installation',
        status: 'fail',
        message: 'Package not found',
        solution: 'Run: npm install macro_api'
      });
    }

    this.results.push({
      category: 'Package Installation',
      checks
    });
  }

  checkEnvironment() {
    const checks = [];

    const envExists = existsSync('.env');
    checks.push({
      name: '.env File',
      status: envExists ? 'pass' : 'warning',
      message: envExists ? 'Found' : 'Not found'
    });

    this.results.push({
      category: 'Environment',
      checks
    });
  }

  printResults() {
    this.results.forEach(result => {
      console.log(\`\\n📋 \${result.category}\`);
      console.log('='.repeat(result.category.length + 3));
      
      result.checks.forEach(check => {
        const icon = check.status === 'pass' ? '✅' : check.status === 'fail' ? '❌' : '⚠️';
        console.log(\`\${icon} \${check.name}: \${check.message}\`);
        
        if (check.solution) {
          console.log(\`   💡 \${check.solution}\`);
        }
      });
    });
  }
}

const diagnostic = new SystemDiagnostic();
diagnostic.runDiagnostics().catch(console.error);`}
        title="Comprehensive diagnostic tool"
      />

      ### Quick Fix Commands

      <CodeExampleSwitcher
        typescript={`# 🚨 Emergency Reset (nuclear option)
# This will completely reset your node_modules and package-lock

rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
npm cache clean --force
npm install

# 🔧 Common Quick Fixes

# Fix 1: Clear npm cache
npm cache clean --force

# Fix 2: Rebuild node_modules
rm -rf node_modules && npm install

# Fix 3: Update npm to latest
npm install -g npm@latest

# Fix 4: Check for conflicting versions
npm ls macro_api

# Fix 5: Force reinstall specific package
npm uninstall macro_api
npm install macro_api

# Fix 6: Clear TypeScript cache
rm -rf .tsbuildinfo dist
npx tsc --build --clean

# Fix 7: Restart development server
# Kill all node processes and restart

# Fix 8: Check disk space
df -h  # Unix/Linux/macOS
dir    # Windows

# Fix 9: Check permissions
ls -la node_modules/macro_api  # Should show read permissions`}
        javascript={`# Quick fixes for JavaScript projects

# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm install

# Check if macro_api is properly installed
npm list macro_api

# Verify require works
node -e "console.log(require('macro_api'))"

# Check Node.js version
node --version

# Update npm
npm install -g npm@latest`}
        title="Emergency fixes"
      />

      ## Production Deployment

      ### Docker Configuration

      <CodeExampleSwitcher
        typescript={`# Dockerfile - Optimized for production
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci --only=production --frozen-lockfile

# Build the application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build application (if needed)
RUN npm run build 2>/dev/null || echo "No build script found"

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S appuser -u 1001

# Copy built application
COPY --from=builder --chown=appuser:nodejs /app ./

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]`}
        javascript={`# Dockerfile for JavaScript applications
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S appuser -u 1001

USER appuser

EXPOSE 3000

CMD ["node", "index.js"]`}
        title="Docker configuration"
      />

      ### Environment Variables in Production

      <InfoBox type="security" title="Production Security">
        Never include actual API keys in Docker images or version control. Always use secure environment variable injection in production.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`# docker-compose.yml - Production setup
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    env_file:
      - .env.production
    depends_on:
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  redis_data:

# .env.production (example - never commit actual values)
NODE_ENV=production
OPENAI_API_KEY=sk-prod-your-production-key
REDIS_URL=redis://redis:6379
CACHE_TTL=7200`}
        javascript={`# Production environment setup
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env.production
    restart: unless-stopped

# Use secrets management in production:
# - Kubernetes secrets
# - Docker secrets  
# - Cloud provider secret managers
# - HashiCorp Vault`}
        title="Production deployment"
      />

      ## Best Practices & Recommendations

      ### Performance Optimization

      <CodeExampleSwitcher
        typescript={`// performance-config.ts
import { MacroAPIClient, CacheManager } from 'macro_api';

// Optimize cache configuration
const optimizedCache = new CacheManager({
  type: 'hybrid', // Use both memory and Redis
  ttl: 3600,
  maxSize: 10000,
  redis: {
    url: process.env.REDIS_URL!,
    keyPrefix: 'macro_api_prod',
    cluster: true // Enable if using Redis cluster
  },
  compression: true, // Enable compression for large values
  serialization: 'msgpack' // Faster than JSON
});

// Configure client for optimal performance
const client = new MacroAPIClient({
  cache: {
    type: 'hybrid',
    ttl: 3600,
    maxSize: 10000,
    redis: {
      url: process.env.REDIS_URL!,
      keyPrefix: 'api_cache'
    }
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000
  }
});

// Batch operations for better performance
export async function batchApiCalls<T>(
  operations: Array<() => Promise<T>>,
  batchSize: number = 10
): Promise<T[]> {
  const results: T[] = [];
  
  for (let i = 0; i < operations.length; i += batchSize) {
    const batch = operations.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(op => op())
    );
    
    batchResults.forEach(result => {
      if (result.status === 'fulfilled') {
        results.push(result.value);
      }
    });
    
    // Small delay between batches to respect rate limits
    if (i + batchSize < operations.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return results;
}`}
        javascript={`// performance-config.js
const { MacroAPIClient } = require('macro_api');

// Optimized configuration
const client = new MacroAPIClient({
  cache: {
    type: 'memory',
    ttl: 3600,
    maxSize: 5000
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

// Batch processing utility
async function batchApiCalls(operations, batchSize = 10) {
  const results = [];
  
  for (let i = 0; i < operations.length; i += batchSize) {
    const batch = operations.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(op => op())
    );
    
    batchResults.forEach(result => {
      if (result.status === 'fulfilled') {
        results.push(result.value);
      }
    });
  }
  
  return results;
}

module.exports = { client, batchApiCalls };`}
        title="Performance optimization"
      />

      ### Security Best Practices

      <CodeExampleSwitcher
        typescript={`// security-config.ts
import { z } from 'zod';

// Validate and sanitize environment variables
const secureEnvSchema = z.object({
  OPENAI_API_KEY: z.string().min(20).optional(),
  SLACK_BOT_TOKEN: z.string().min(20).optional(),
  STRIPE_SECRET_KEY: z.string().min(20).optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

export const secureEnv = secureEnvSchema.parse(process.env);

// API key rotation utility
export class ApiKeyManager {
  private keys: Map<string, { key: string; expiresAt: Date }> = new Map();

  setKey(service: string, key: string, expiresIn: number = 86400000): void {
    this.keys.set(service, {
      key,
      expiresAt: new Date(Date.now() + expiresIn)
    });
  }

  getKey(service: string): string | null {
    const keyData = this.keys.get(service);
    if (!keyData || keyData.expiresAt < new Date()) {
      this.keys.delete(service);
      return null;
    }
    return keyData.key;
  }

  rotateKey(service: string, newKey: string): void {
    // Implement key rotation logic
    this.setKey(service, newKey);
  }
}

// Rate limiting for API calls
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  constructor(
    private maxRequests: number = 100,
    private windowMs: number = 60000
  ) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  canMakeRequest(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    let timestamps = this.requests.get(identifier) || [];
    timestamps = timestamps.filter(timestamp => timestamp > windowStart);

    if (timestamps.length >= this.maxRequests) {
      return false;
    }

    timestamps.push(now);
    this.requests.set(identifier, timestamps);
    return true;
  }

  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    const timestamps = this.requests.get(identifier) || [];
    const validTimestamps = timestamps.filter(t => t > windowStart);
    return Math.max(0, this.maxRequests - validTimestamps.length);
  }
}

// Secure configuration validator
export function validateSecureConfig(): void {
  const issues: string[] = [];

  // Check for development keys in production
  if (process.env.NODE_ENV === 'production') {
    if (process.env.OPENAI_API_KEY?.includes('test')) {
      issues.push('Using test OpenAI key in production');
    }
    if (process.env.STRIPE_SECRET_KEY?.includes('test')) {
      issues.push('Using test Stripe key in production');
    }
  }

  // Check for insecure protocols
  if (process.env.REDIS_URL?.startsWith('redis://') &&
    process.env.NODE_ENV === 'production') {
    issues.push('Using insecure Redis connection in production');
  }

  if (issues.length > 0) {
    console.error('🚨 Security Issues Found:');
    issues.forEach(issue => console.error(\` - \${issue}\`));
    if (issues.length > 0) {
      console.error('🚨 Security Issues Found:');
      issues.forEach(issue => console.error(\` - \${issue}\`));
      throw new Error('Security validation failed');
    }
  }
}

// Usage example
export function initializeSecureClient(): MacroAPIClient {
  validateSecureConfig();

  const keyManager = new ApiKeyManager();
  const rateLimiter = new RateLimiter(1000, 60000); // 1000 requests per minute

  return new MacroAPIClient({
    cache: {
      type: 'hybrid',
      ttl: 3600,
      redis: {
        url: process.env.REDIS_URL!,
        keyPrefix: 'secure_api'
      }
    },
    retries: {
      maxRetries: 3,
      baseDelay: 1000
    }
  });
}`}
javascript={`// security-config.js
// Basic security configuration for JavaScript

// Environment validation
function validateEnvironment() {
  const errors = [];

  if (process.env.NODE_ENV === 'production') {
    // Check for test keys in production
    if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY.includes('test')) {
      errors.push('Using test Stripe key in production');
    }

    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.includes('test')) {
      errors.push('Using test OpenAI key in production');
    }
  }

  if (errors.length > 0) {
    console.error('🚨 Security Issues:');
    errors.forEach(function(error) {
      console.error(\` - \${error}\`);
    });
    throw new Error('Security validation failed');
  }
}

// Simple rate limiter
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests || 100;
    this.windowMs = windowMs || 60000;
    this.requests = new Map();
  }

  canMakeRequest(identifier) {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    let timestamps = this.requests.get(identifier) || [];
    timestamps = timestamps.filter(timestamp => timestamp > windowStart);

    if (timestamps.length >= this.maxRequests) {
      return false;
    }

    timestamps.push(now);
    this.requests.set(identifier, timestamps);
    return true;
  }
}

module.exports = {
  validateEnvironment: validateEnvironment,
  RateLimiter: RateLimiter
};`}
       title="Security best practices"
     />

     ### Monitoring and Logging

     <CodeExampleSwitcher
       typescript={`// monitoring-setup.ts
import { MacroAPIClient, ErrorHandler } from 'macro_api';

// Enhanced error handler with monitoring
class ProductionErrorHandler extends ErrorHandler {
 private metricsCollector: MetricsCollector;

 constructor(metricsCollector: MetricsCollector) {
   super();
   this.metricsCollector = metricsCollector;
 }

 handle(error: unknown, context?: { service?: string; operation?: string }) {
   const macroError = super.handle(error, context);
   
   // Send to monitoring service
   this.metricsCollector.recordError({
     service: context?.service || 'unknown',
     operation: context?.operation || 'unknown',
     errorCode: macroError.code,
     statusCode: macroError.statusCode,
     timestamp: new Date().toISOString()
   });
   
   // Log structured error
   console.error({
     message: 'API Error',
     error: macroError.toJSON(),
     context,
     timestamp: new Date().toISOString(),
     level: 'error'
   });
   
   return macroError;
 }
}

interface MetricsData {
 service: string;
 operation: string;
 errorCode: string;
 statusCode?: number;
 timestamp: string;
}

// Metrics collector for monitoring services
export class MetricsCollector {
 private metrics: MetricsData[] = [];
 private flushInterval: NodeJS.Timeout;

 constructor(private endpoint?: string) {
   // Flush metrics every 30 seconds
   this.flushInterval = setInterval(() => {
     this.flush();
   }, 30000);
 }

 recordError(data: MetricsData): void {
   this.metrics.push(data);
   
   // Immediate flush for critical errors
   if (data.statusCode && data.statusCode >= 500) {
     this.flush();
   }
 }

 recordApiCall(service: string, operation: string, duration: number, success: boolean): void {
   // Record API call metrics
   console.log(JSON.stringify({
     type: 'api_call',
     service,
     operation,
     duration,
     success,
     timestamp: new Date().toISOString()
   }));
 }

 private async flush(): Promise<void> {
   if (this.metrics.length === 0) return;

   const metricsToSend = [...this.metrics];
   this.metrics = [];

   try {
     if (this.endpoint) {
       await fetch(this.endpoint, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ metrics: metricsToSend })
       });
     } else {
       // Fallback to console logging
       metricsToSend.forEach(metric => {
         console.log(JSON.stringify({ type: 'metric', ...metric }));
       });
     }
   } catch (error) {
     console.error('Failed to send metrics:', error);
     // Re-add metrics for retry
     this.metrics.unshift(...metricsToSend);
   }
 }

 destroy(): void {
   clearInterval(this.flushInterval);
   this.flush();
 }
}

// Health check endpoint
export function createHealthCheck(client: MacroAPIClient) {
 return async function healthCheck(): Promise<{
   status: 'healthy' | 'unhealthy';
   timestamp: string;
   services: Record<string, 'up' | 'down'>;
   cache?: any;
 }> {
   const health = {
     status: 'healthy' as const,
     timestamp: new Date().toISOString(),
     services: {} as Record<string, 'up' | 'down'>,
     cache: undefined as any
   };

   try {
     // Check cache health
     const cacheStats = await client.getCacheStats();
     health.cache = cacheStats;
   } catch (error) {
     health.status = 'unhealthy';
     health.services.cache = 'down';
   }

   // Add more health checks as needed
   return health;
 };
}`}
       javascript={`// monitoring-setup.js
const { ErrorHandler } = require('macro_api');

// Simple metrics collector
class MetricsCollector {
 constructor(endpoint) {
   this.endpoint = endpoint;
   this.metrics = [];
   
   // Flush metrics every 30 seconds
   this.flushInterval = setInterval(() => {
     this.flush();
   }, 30000);
 }

 recordError(data) {
   this.metrics.push({
     ...data,
     timestamp: new Date().toISOString()
   });
 }

 recordApiCall(service, operation, duration, success) {
   console.log(JSON.stringify({
     type: 'api_call',
     service,
     operation,
     duration,
     success,
     timestamp: new Date().toISOString()
   }));
 }

 async flush() {
   if (this.metrics.length === 0) return;

   const metricsToSend = [...this.metrics];
   this.metrics = [];

   try {
     if (this.endpoint) {
       const response = await fetch(this.endpoint, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ metrics: metricsToSend })
       });
     } else {
       metricsToSend.forEach(metric => {
         console.log(JSON.stringify({ type: 'metric', ...metric }));
       });
     }
   } catch (error) {
     console.error('Failed to send metrics:', error);
   }
 }
}

// Health check function
function createHealthCheck(client) {
 return async function healthCheck() {
   const health = {
     status: 'healthy',
     timestamp: new Date().toISOString(),
     services: {}
   };

   try {
     const cacheStats = await client.getCacheStats();
     health.cache = cacheStats;
   } catch (error) {
     health.status = 'unhealthy';
     health.services.cache = 'down';
   }

   return health;
 };
}

module.exports = {
 MetricsCollector,
 createHealthCheck
};`}
       title="Monitoring and logging setup"
     />

     ## Getting Help & Support

     ### Documentation Resources

     <div className="not-prose my-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <a href="/documentation?section=basic-usage" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
           <Terminal className="h-6 w-6 mb-2 text-blue-600" />
           <h3 className="font-semibold mb-2">Basic Usage Guide</h3>
           <p className="text-sm text-gray-600 dark:text-gray-300">Learn the fundamentals of using macro_api</p>
         </a>
         <a href="/documentation?section=authentication" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
           <Shield className="h-6 w-6 mb-2 text-green-600" />
           <h3 className="font-semibold mb-2">Authentication Guide</h3>
           <p className="text-sm text-gray-600 dark:text-gray-300">Set up API keys for different services</p>
         </a>
         <a href="/documentation?section=error-handling" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
           <AlertCircle className="h-6 w-6 mb-2 text-red-600" />
           <h3 className="font-semibold mb-2">Error Handling</h3>
           <p className="text-sm text-gray-600 dark:text-gray-300">Master robust error handling patterns</p>
         </a>
         <a href="/documentation?section=caching" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
           <Zap className="h-6 w-6 mb-2 text-purple-600" />
           <h3 className="font-semibold mb-2">Caching System</h3>
           <p className="text-sm text-gray-600 dark:text-gray-300">Improve performance with intelligent caching</p>
         </a>
       </div>
     </div>

     ### Community Support

     <InfoBox type="info" title="Get Help">
       If you're still experiencing issues after following this guide, here's where to get help:
     </InfoBox>

     <div className="not-prose my-6">
       <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
         <h3 className="text-lg font-semibold mb-4">Support Channels</h3>
         <div className="space-y-4">
           <div className="flex items-start">
             <ExternalLink className="h-5 w-5 mr-3 mt-0.5 text-blue-600" />
             <div>
               <h4 className="font-medium">GitHub Issues</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Report bugs and request features</p>
               <a href="https://github.com/cptcr/macro_api/issues" className="text-blue-600 hover:underline text-sm">
                 github.com/cptcr/macro_api/issues
               </a>
             </div>
           </div>
           <div className="flex items-start">
             <ExternalLink className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
             <div>
               <h4 className="font-medium">Discord Community</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Chat with other developers</p>
               <a href="https://discord.gg/macro-api" className="text-green-600 hover:underline text-sm">
                 discord.gg/macro-api
               </a>
             </div>
           </div>
           <div className="flex items-start">
             <ExternalLink className="h-5 w-5 mr-3 mt-0.5 text-purple-600" />
             <div>
               <h4 className="font-medium">Stack Overflow</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Ask technical questions</p>
               <a href="https://stackoverflow.com/questions/tagged/macro-api" className="text-purple-600 hover:underline text-sm">
                 Use tag: macro-api
               </a>
             </div>
           </div>
           <div className="flex items-start">
             <ExternalLink className="h-5 w-5 mr-3 mt-0.5 text-orange-600" />
             <div>
               <h4 className="font-medium">Email Support</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Direct support for enterprise users</p>
               <a href="mailto:support@macro-api.dev" className="text-orange-600 hover:underline text-sm">
                 support@macro-api.dev
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>

     ### Troubleshooting Checklist

     Before seeking help, please try this quick checklist:

     <div className="not-prose my-6">
       <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
         <h3 className="text-lg font-semibold mb-4">Pre-Support Checklist</h3>
         <div className="space-y-3">
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I have Node.js 16+ installed</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I ran the installation verification script</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I cleared node_modules and reinstalled</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I checked my .env file configuration</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I verified my API key formats</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I ran the diagnostic tool</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I checked the error logs carefully</span>
           </label>
           <label className="flex items-center">
             <input type="checkbox" className="mr-3 rounded" />
             <span className="text-sm">I searched existing GitHub issues</span>
           </label>
         </div>
       </div>
     </div>

     ## What's Next?

     <InfoBox type="success" title="Installation Complete!">
       Congratulations! You've successfully installed and configured macro_api. You're now ready to start building amazing applications with unified API integrations.
     </InfoBox>

     ### Recommended Next Steps

     1. **[Basic Usage Guide](/documentation?section=basic-usage)** - Learn the fundamentals
     2. **[Authentication Setup](/documentation?section=authentication)** - Configure your API keys
     3. **[Choose Your First API](/documentation?section=chatgpt)** - Start with ChatGPT, Spotify, or Stripe
     4. **[Error Handling](/documentation?section=error-handling)** - Implement robust error management
     5. **[Caching](/documentation?section=caching)** - Optimize performance with caching

     ### Quick Start Template

     <CodeExampleSwitcher
       typescript={`// quick-start.ts
import { ChatGPT, MacroAPIClient } from 'macro_api';
import 'dotenv/config';

// Initialize with caching and error handling
const client = new MacroAPIClient({
 cache: { type: 'memory', ttl: 300 },
 retries: { maxRetries: 3 }
});

const gpt = new ChatGPT({
 apiKey: process.env.OPENAI_API_KEY!
});

// Your first API call with macro_api
async function main() {
 try {
   const response = await client.execute(
     () => gpt.chat('Hello, macro_api!'),
     {
       service: 'openai',
       method: 'chat',
       cacheTtl: 600
     }
   );
   
   console.log('🎉 Success:', response);
 } catch (error) {
   console.error('❌ Error:', error);
 }
}

main();`}
       javascript={`// quick-start.js
const { ChatGPT, MacroAPIClient } = require('macro_api');
require('dotenv').config();

// Initialize with basic configuration
const client = new MacroAPIClient({
 cache: { type: 'memory', ttl: 300 }
});

const gpt = new ChatGPT({
 apiKey: process.env.OPENAI_API_KEY
});

// Your first API call
async function main() {
 try {
   const response = await client.execute(
     () => gpt.chat('Hello, macro_api!'),
     { service: 'openai', method: 'chat' }
   );
   
   console.log('🎉 Success:', response);
 } catch (error) {
   console.error('❌ Error:', error);
 }
}

main();`}
       title="Quick start template"
     />

     Happy coding with macro_api! 🚀
   </div>
 );
};

export default InstallationDocs;