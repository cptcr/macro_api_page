import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Package, Download, CheckCircle, AlertTriangle, Terminal, FileCode, Zap, Shield, AlertCircle, RefreshCw, ExternalLink, Settings, Sparkles, ArrowRight, Globe, Lock } from 'lucide-react';

const InstallationDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('installation');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language = 'bash', id }: { code: string; language?: string; id: string }) => (
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

  const npmInstallCode = `# Install the latest stable version
npm install macro_api

# Install a specific version
npm install macro_api@3.0.0

# Install with exact version lock
npm install --save-exact macro_api

# Install with development dependencies
npm install macro_api --save-dev

# For global CLI usage (if available)
npm install -g macro_api`;

  const yarnInstallCode = `# Install the latest stable version
yarn add macro_api

# Install a specific version
yarn add macro_api@3.0.0

# Install with exact version
yarn add --exact macro_api

# Install as dev dependency
yarn add macro_api --dev

# Upgrade to latest version
yarn upgrade macro_api`;

  const pnpmInstallCode = `# Install the latest stable version
pnpm add macro_api

# Install a specific version
pnpm add macro_api@3.0.0

# Install with exact version
pnpm add --save-exact macro_api

# Install as dev dependency
pnpm add -D macro_api

# Update to latest version
pnpm update macro_api`;

  const verificationCode = `// verify-installation.ts
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
console.log('Next step: Configure your API keys in .env file');`;

  const advancedTestCode = `// advanced-test.ts
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
tester.runAllTests().catch(console.error);`;

  const envTemplateCode = `# .env - Complete configuration template
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
API_BASE_URL=http://localhost:3000/api`;

  const envValidationCode = `// config/environment.ts
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
}`;

  const nextjsConfigCode = `// next.config.js
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

module.exports = nextConfig;`;

  const tsConfigCode = `// tsconfig.json - Optimized for macro_api
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
}`;

  const envTypesCode = `// types/environment.d.ts
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

export {};`;

  const moduleResolutionCode = `// ❌ Error: Cannot resolve module 'macro_api'
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
import ChatGPT = require('macro_api'); // Don't do this`;

  const typescriptErrorsCode = `// ❌ Error: Type definitions not found
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
const { ChatGPT } = MacroAPI;`;

  const envErrorsCode = `// ❌ Error: API key not found or invalid format
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
console.log('Slack Token exists:', !!process.env.SLACK_BOT_TOKEN);`;

  const runtimeErrorsCode = `// ❌ Error: fetch is not defined (Node.js < 18)
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
}`;

  const diagnosticToolCode = `// diagnostic-tool.ts - Comprehensive system check
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
diagnostic.runDiagnostics().catch(console.error);`;

  const quickFixCode = `# 🚨 Emergency Reset (nuclear option)
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
ls -la node_modules/macro_api  # Should show read permissions`;

  const dockerConfigCode = `# Dockerfile - Optimized for production
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

CMD ["node", "server.js"]`;

  const productionEnvCode = `# docker-compose.yml - Production setup
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
CACHE_TTL=7200`;

  const performanceOptimizationCode = `// performance-config.ts
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
}`;

  const securityConfigCode = `// security-config.ts
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
    throw new Error('Security validation failed');
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
}`;

    const quickStartCode = `// quick-start.ts
  import { MacroAPIClient, ChatGPT, SpotifyAPI } from 'macro_api';
  
  // Initialize the client
  const client = new MacroAPIClient({
    cache: { type: 'memory', ttl: 3600 },
    retries: { maxRetries: 3 }
  });
  
  // Initialize services
  const chatGPT = new ChatGPT({
    apiKey: process.env.OPENAI_API_KEY!
  });
  
  const spotify = new SpotifyAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID!,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
  });
  
  // Example usage
  async function example() {
    try {
      // Use ChatGPT
      const completion = await chatGPT.complete({
        prompt: 'Hello, how are you?',
        maxTokens: 100
      });
      console.log('ChatGPT:', completion);
  
      // Use Spotify
      const playlist = await spotify.getPlaylist('your_playlist_id');
      console.log('Spotify Playlist:', playlist);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  example();`;
  
    const monitoringSetupCode = `// monitoring-setup.ts
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
}`;

  const systemRequirements = [
    {
      category: 'Runtime Environment',
      icon: <CheckCircle className="h-4 w-4" />,
      requirements: [
        'Node.js 16.0.0 or higher (LTS recommended)',
        'npm 7.0.0+ or yarn 1.22.0+ or pnpm 6.0.0+',
        'Modern browsers supporting ES2020'
      ]
    },
    {
      category: 'Development Environment',
      icon: <Terminal className="h-4 w-4" />,
      requirements: [
        'TypeScript 4.5+ (recommended)',
        'VS Code or similar IDE with TypeScript support',
        'Git for version control'
      ]
    },
    {
      category: 'Framework Compatibility',
      icon: <Globe className="h-4 w-4" />,
      requirements: [
        'Next.js 12+ (Pages & App Router)',
        'React 16.8+ (with hooks)',
        'Express.js 4.0+',
        'NestJS 8.0+',
        'Vite, Webpack, or similar bundlers'
      ]
    }
  ];

  const supportChannels = [
    {
      name: 'GitHub Issues',
      description: 'Report bugs and request features',
      url: 'https://github.com/cptcr/macro_api/issues',
      icon: <ExternalLink className="h-5 w-5" />,
      color: 'blue'
    },
    {
      name: 'Discord Community',
      description: 'Chat with other developers',
      url: 'https://discord.gg/macro-api',
      icon: <ExternalLink className="h-5 w-5" />,
      color: 'green'
    },
    {
      name: 'Stack Overflow',
      description: 'Ask technical questions',
      url: 'https://stackoverflow.com/questions/tagged/macro-api',
      icon: <ExternalLink className="h-5 w-5" />,
      color: 'purple'
    },
    {
      name: 'Email Support',
      description: 'Direct support for enterprise users',
      url: 'mailto:support@macro-api.dev',
      icon: <ExternalLink className="h-5 w-5" />,
      color: 'orange'
    }
  ];

  const nextSteps = [
    {
      title: 'Basic Usage Guide',
      description: 'Learn the fundamentals of using macro_api',
      icon: <Terminal className="h-5 w-5" />,
      href: '/documentation?section=basic-usage',
      color: 'blue'
    },
    {
      title: 'Authentication Setup',
      description: 'Configure your API keys for different services',
      icon: <Shield className="h-5 w-5" />,
      href: '/documentation?section=authentication',
      color: 'green'
    },
    {
      title: 'Error Handling',
      description: 'Master robust error handling patterns',
      icon: <AlertCircle className="h-5 w-5" />,
      href: '/documentation?section=error-handling',
      color: 'red'
    },
    {
      title: 'Caching System',
      description: 'Improve performance with intelligent caching',
      icon: <Zap className="h-5 w-5" />,
      href: '/documentation?section=caching',
      color: 'purple'
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
            <Package className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Installation Guide
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-green-500 p-3 rounded-full">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Installation & Setup
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete guide to installing and configuring macro_api in your project
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            Get macro_api up and running in your project with this comprehensive installation guide. We'll cover everything from system requirements to production deployment best practices.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Quick Setup</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Environment Config</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Troubleshooting</span>
          </div>
        </div>

        {/* System Requirements */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <CheckCircle className="h-6 w-6 mr-2" />
            System Requirements
          </h2>
          <p className="text-muted-foreground mb-6">Before installing macro_api, ensure your system meets these requirements:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemRequirements.map((req, index) => (
              <div key={index} className="glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  {req.icon}
                  <span className="ml-2">{req.category}</span>
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {req.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="glass-card mb-8 sm:mb-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('installation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'installation' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Package Installation
              </button>
              <button
                onClick={() => setActiveTab('verification')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'verification' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Verification & Testing
              </button>
              <button
                onClick={() => setActiveTab('environment')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'environment' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Environment Setup
              </button>
              <button
                onClick={() => setActiveTab('frameworks')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'frameworks' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Framework Config
              </button>
              <button
                onClick={() => setActiveTab('troubleshooting')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'troubleshooting' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Troubleshooting
              </button>
              <button
                onClick={() => setActiveTab('production')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'production' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Production Setup
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'installation' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Method 1: npm (Recommended)
                </h3>
                <CodeBlock code={npmInstallCode} id="npm-install" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Method 2: Yarn
                </h3>
                <CodeBlock code={yarnInstallCode} id="yarn-install" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Method 3: pnpm
                </h3>
                <CodeBlock code={pnpmInstallCode} id="pnpm-install" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'verification' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  Basic Installation Verification
                </h3>
                <p className="text-muted-foreground mb-4">Run this script to verify your installation:</p>
                <CodeBlock code={verificationCode} language="typescript" id="verification" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Advanced Testing Script
                </h3>
                <p className="text-muted-foreground mb-4">Comprehensive testing for production environments:</p>
                <CodeBlock code={advancedTestCode} language="typescript" id="advanced-test" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'environment' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  Environment Variables Setup
                </h3>
                <p className="text-muted-foreground mb-4">Create a comprehensive .env file in your project root:</p>
                <CodeBlock code={envTemplateCode} language="bash" id="env-template" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Environment Validation
                </h3>
                <p className="text-muted-foreground mb-4">Type-safe environment variable validation:</p>
                <CodeBlock code={envValidationCode} language="typescript" id="env-validation" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'frameworks' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Next.js Configuration
                </h3>
                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 mb-4">
                  <p className="text-sm">
                    <Globe className="h-4 w-4 inline mr-2 text-blue-500" />
                    <strong>Next.js Compatibility:</strong> macro_api works seamlessly with both Pages Router and App Router in Next.js 12+.
                  </p>
                </div>
                <CodeBlock code={nextjsConfigCode} language="javascript" id="nextjs-config" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <FileCode className="h-5 w-5 mr-2 text-primary" />
                  TypeScript Configuration
                </h3>
                <CodeBlock code={tsConfigCode} language="json" id="ts-config" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Environment Types Declaration
                </h3>
                <CodeBlock code={envTypesCode} language="typescript" id="env-types" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'troubleshooting' ? 'block' : 'hidden'}`}>
              <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 mb-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-600 mb-2">Common Issues</h3>
                    <p className="text-sm text-muted-foreground">
                      Most installation issues can be resolved by following the troubleshooting steps below.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">1. Module Resolution Errors</h3>
                <CodeBlock code={moduleResolutionCode} language="typescript" id="module-resolution" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">2. TypeScript Compilation Errors</h3>
                <CodeBlock code={typescriptErrorsCode} language="typescript" id="typescript-errors" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">3. Environment Variable Issues</h3>
                <CodeBlock code={envErrorsCode} language="typescript" id="env-errors" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">4. Runtime Errors</h3>
                <CodeBlock code={runtimeErrorsCode} language="typescript" id="runtime-errors" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-primary" />
                  Comprehensive Diagnostic Tool
                </h3>
                <CodeBlock code={diagnosticToolCode} language="typescript" id="diagnostic-tool" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-primary" />
                  Quick Fix Commands
                </h3>
                <CodeBlock code={quickFixCode} id="quick-fix" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'production' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Docker Configuration
                </h3>
                <CodeBlock code={dockerConfigCode} language="dockerfile" id="docker-config" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  Environment Variables in Production
                </h3>
                <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20 mb-4">
                  <p className="text-sm">
                    <Shield className="h-4 w-4 inline mr-2 text-red-500" />
                    <strong>Production Security:</strong> Never include actual API keys in Docker images or version control. Always use secure environment variable injection in production.
                  </p>
                </div>
                <CodeBlock code={productionEnvCode} language="yaml" id="production-env" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Performance Optimization
                </h3>
                <CodeBlock code={performanceOptimizationCode} language="typescript" id="performance-optimization" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Security Best Practices
                </h3>
                <CodeBlock code={securityConfigCode} language="typescript" id="security-config" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Monitoring and Logging
                </h3>
                <CodeBlock code={monitoringSetupCode} language="typescript" id="monitoring-setup" />
              </div>
            </div>
          </div>
        </div>

        {/* Getting Help & Support */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Getting Help & Support</h2>
          
          <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 mb-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Get Help</h3>
                <p className="text-sm text-muted-foreground">
                  If you're still experiencing issues after following this guide, here's where to get help:
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportChannels.map((channel, index) => (
              <a key={index} href={channel.url} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <div className={`text-${channel.color}-600`}>
                      {channel.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{channel.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{channel.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Visit</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card bg-gray-50 dark:bg-gray-800 mt-8">
            <h3 className="text-lg font-semibold mb-4">Pre-Support Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I have Node.js 16+ installed</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I ran the installation verification script</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I cleared node_modules and reinstalled</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I checked my .env file configuration</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I verified my API key formats</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I ran the diagnostic tool</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I checked the error logs carefully</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="text-sm">I searched existing GitHub issues</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">What's Next?</h2>
          
          <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 mb-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Installation Complete!</h3>
                <p className="text-sm text-muted-foreground">
                  Congratulations! You've successfully installed and configured macro_api. You're now ready to start building amazing applications with unified API integrations.
                </p>
              </div>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            Now that you have macro_api installed, here are the recommended next steps to get the most out of your installation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              Quick Start Template
            </h3>
            <p className="text-muted-foreground mb-4">Get started immediately with this quick template:</p>
            <CodeBlock code={quickStartCode} language="typescript" id="quick-start" />
          </div>

          <div className="text-center mt-8">
            <p className="text-responsive-sm text-muted-foreground mb-4">
              Happy coding with macro_api! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationDocs;